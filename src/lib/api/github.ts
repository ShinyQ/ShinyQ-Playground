import { Octokit } from "@octokit/core";
import { withRedis } from "@/lib/redis";
import { CACHE_TOP_REPO_TTL, CACHE_KEY_TOP_REPO, config } from "@/config";

// Constants
const CACHE_KEY = CACHE_KEY_TOP_REPO;
const CACHE_TTL = CACHE_TOP_REPO_TTL;
const GITHUB_TIMEOUT = 5000;
const MAX_REPOS = 6;

// Types
type RepoInfo = {
    name: string;
    description: string | null;
    html_url: string;
    stargazers_count: number;
    forks_count: number;
    language: string | null;
    updated_at: string;
};

// GitHub client management
class GitHubClient {
    private static instance: GitHubClient;
    private readonly client: Octokit;
    private rateLimitRemaining: number = 5000;
    private rateLimitReset: number = 0;

    private constructor() {
        this.client = new Octokit({
            auth: config.GITHUB_API_TOKEN,
            request: {
                timeout: GITHUB_TIMEOUT,
            },
        });
    }

    public static getInstance(): GitHubClient {
        if (!GitHubClient.instance) {
            GitHubClient.instance = new GitHubClient();
        }
        return GitHubClient.instance;
    }

    private updateRateLimit(response: any): void {
        this.rateLimitRemaining = parseInt(response.headers['x-ratelimit-remaining'] ?? '5000');
        this.rateLimitReset = parseInt(response.headers['x-ratelimit-reset'] ?? '0') * 1000;
    }

    private canMakeRequest(): boolean {
        if (this.rateLimitRemaining === 0) {
            const now = Date.now();
            if (now < this.rateLimitReset) {
                console.warn('[GitHub] Rate limit exceeded, reset at:', new Date(this.rateLimitReset));
                return false;
            }
        }
        return true;
    }

    public async request<T>(operation: (client: Octokit) => Promise<T>): Promise<T | null> {
        if (!this.canMakeRequest()) {
            return null;
        }

        try {
            const result = await Promise.race([
                operation(this.client),
                new Promise<null>((_, reject) => 
                    setTimeout(() => reject(new Error('GitHub operation timeout')), GITHUB_TIMEOUT)
                )
            ]);

            if (result && 'headers' in (result as any)) {
                this.updateRateLimit(result);
            }

            return result as T;
        } catch (error) {
            console.error('[GitHub] Operation failed:', error);
            return null;
        }
    }
}

// Repository processing
function processRepos(repos: unknown[]): RepoInfo[] {
    return [...repos]
        .sort((a: any, b: any) => ((b?.stargazers_count ?? 0) - (a?.stargazers_count ?? 0)))
        .slice(0, MAX_REPOS)
        .map((repo: any) => ({
            name: repo.name,
            description: repo.description,
            html_url: repo.html_url,
            stargazers_count: repo.stargazers_count ?? 0,
            forks_count: repo.forks_count ?? 0,
            language: repo.language ?? null,
            updated_at: repo.updated_at ?? new Date().toISOString(),
        }));
}

// Exported function
export async function getPublicRepositories(username = "ShinyQ"): Promise<RepoInfo[]> {
    const result = await withRedis(async (redis) => {
        // Try Redis cache first
        const cached = await redis.get(CACHE_KEY);
        if (cached) {
            return JSON.parse(cached) as RepoInfo[];
        }

        // Fetch from GitHub
        const githubClient = GitHubClient.getInstance();
        const response = await githubClient.request(async (client) => {
            return client.request("GET /users/{username}/repos", {
                username,
                type: "owner",
                per_page: 100,
            });
        });

        if (!response) {
            return [];
        }

        const topRepos = processRepos(response.data);

        // Cache in Redis
        await redis.set(CACHE_KEY, JSON.stringify(topRepos), "EX", CACHE_TTL);

        return topRepos;
    }, CACHE_KEY, { ttl: CACHE_TTL * 1000 }); // Convert Redis TTL (seconds) to localStorage TTL (milliseconds)

    return result ?? [];
}
