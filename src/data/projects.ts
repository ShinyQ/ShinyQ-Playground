
export interface Project {
  id: number;
  title: string;
  description: string;
  coverImage: string;
  techStack: string[];
  role: string;
  githubUrl?: string;
  liveUrl?: string;
  tags: string[];
}

export const projects: Project[] = [
  {
    id: 1,
    title: "E-Commerce Microservices Platform",
    description: "A scalable e-commerce platform built with microservices architecture. Includes product catalog, shopping cart, payment processing, and order management services.",
    coverImage: "https://images.unsplash.com/photo-1481487196290-c152efe083f5?auto=format&fit=crop&w=800&h=500",
    techStack: ["Spring Boot", "Docker", "PostgreSQL", "RabbitMQ", "Redis", "Kubernetes"],
    role: "Lead Backend Developer",
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
    tags: ["Microservices", "Backend", "Architecture"]
  },
  {
    id: 2,
    title: "AI-Powered Document Processing System",
    description: "An intelligent system that processes and extracts information from documents using OCR and natural language processing techniques.",
    coverImage: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&h=500",
    techStack: ["Python", "FastAPI", "Huggingface", "TensorFlow", "MongoDB", "Docker"],
    role: "ML Engineer & Backend Developer",
    githubUrl: "https://github.com",
    tags: ["AI", "ML", "Backend"]
  },
  {
    id: 3,
    title: "Real-time Analytics Dashboard",
    description: "A comprehensive analytics dashboard providing real-time insights with customizable metrics, filters, and visualization options.",
    coverImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&h=500",
    techStack: ["Vue.js", "Express.js", "Socket.IO", "D3.js", "PostgreSQL", "Redis"],
    role: "Full-stack Developer",
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
    tags: ["Frontend", "Full-stack", "Data Visualization"]
  },
  {
    id: 4,
    title: "Distributed Task Scheduling System",
    description: "A robust task scheduling system capable of distributing and managing tasks across multiple worker nodes with failover support.",
    coverImage: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&h=500",
    techStack: ["Go", "gRPC", "etcd", "Redis", "PostgreSQL", "Docker"],
    role: "Backend Developer",
    githubUrl: "https://github.com",
    tags: ["Backend", "Distributed Systems", "Go"]
  },
  {
    id: 5,
    title: "Developer Community Platform",
    description: "A social platform for developers to share knowledge, ask questions, and collaborate on projects with features like code snippets, discussions, and project showcases.",
    coverImage: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&h=500",
    techStack: ["Next.js", "GraphQL", "MongoDB", "Express", "Redis", "AWS S3"],
    role: "Full-stack Developer",
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
    tags: ["Frontend", "Full-stack", "Community"]
  },
  {
    id: 6,
    title: "CI/CD Pipeline Automation Tool",
    description: "A tool that automates continuous integration and deployment workflows with support for multiple cloud providers and version control systems.",
    coverImage: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=800&h=500",
    techStack: ["Python", "Flask", "Jenkins", "Docker", "AWS", "Terraform"],
    role: "DevOps Engineer",
    githubUrl: "https://github.com",
    tags: ["DevOps", "Automation", "CI/CD"]
  }
];
