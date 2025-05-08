export interface Project {
  id: string;
  title: string;
  description: string;
  coverImage: string;
  tags: string[];
  role: string;
  techStack: string[];
  githubUrl?: string;
  liveUrl?: string;
}

export const projects: Project[] = [
  {
    id: "shinyq",
    title: "ShinyQ",
    description: "A modern web application for managing and tracking personal projects and tasks.",
    coverImage: "/placeholder.svg",
    tags: ["Web Development", "Productivity"],
    role: "Full Stack Developer",
    techStack: ["Astro", "TypeScript", "Tailwind CSS"],
    githubUrl: "https://github.com/yourusername/shinyq",
    liveUrl: "https://shinyq.app"
  },
  {
    id: "blog",
    title: "Personal Blog",
    description: "A personal blog built with modern web technologies to share thoughts and experiences.",
    coverImage: "/placeholder.svg",
    tags: ["Web Development", "Content"],
    role: "Full Stack Developer",
    techStack: ["Astro", "TypeScript", "Tailwind CSS"],
    githubUrl: "https://github.com/yourusername/blog",
    liveUrl: "https://blog.example.com"
  }
]; 