import { Octokit } from "@octokit/core";
import redis from "@/lib/redis";
import { config } from "@/config";

const octokit = new Octokit({ auth: config.GITHUB_API_TOKEN });

const CACHE_KEY = config.CACHE_KEY_TOP_REPO;
const CACHE_TTL = config.CACHE_TOP_REPO_TTL;

type RepoInfo = {
    name: string;
    description: string | null;
    html_url: string;
    stargazers_count: number;
    forks_count: number;
    language: string | null;
    updated_at: string;
};

export async function getPublicRepositories(
    username = "ShinyQ"
): Promise<RepoInfo[]> {
    try {
        const cached = await redis.get(CACHE_KEY);
        if (cached) {
            return JSON.parse(cached) as RepoInfo[];
        }
    } catch (err) {
        console.error("[Redis] Error during GET:", err);
    }

    try {
        const { data: repos } = await octokit.request("GET /users/{username}/repos", {
            username,
            type: "owner",
            per_page: 100,
        });

        const sortedRepos = [...repos].sort(
            (a, b) => (b.stargazers_count ?? 0) - (a.stargazers_count ?? 0)
        );

        const topRepos = sortedRepos.slice(0, 6).map((repo) => ({
            name: repo.name,
            description: repo.description,
            html_url: repo.html_url,
            stargazers_count: repo.stargazers_count ?? 0,
            forks_count: repo.forks_count ?? 0,
            language: repo.language ?? null,
            updated_at: repo.updated_at ?? new Date().toISOString(),
        }));

        try {
            await redis.set(CACHE_KEY, JSON.stringify(topRepos), "EX", CACHE_TTL);
        } catch (err) {
            console.error("[Redis] Error during SET:", err);
        }

        return topRepos;
    } catch (err) {
        console.error("[GitHub] Error fetching repos:", err);
        return [];
    }
}
