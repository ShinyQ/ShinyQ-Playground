export interface TechItem {
  name: string;
  icon: string;
  type?: string;
}

export const techItems: TechItem[] = [
  // Backend
  { name: "Spring Boot", icon: "/icons/spring-boot.png", type: "backend" },
  { name: "ExpressJS", icon: "/icons/expressjs.png", type: "backend" },
  { name: "Laravel", icon: "/icons/laravel.png", type: "backend" },
  { name: "Flask", icon: "/icons/flask.png", type: "backend" },
  { name: "FastAPI", icon: "/icons/fastapi.png", type: "backend" },
  { name: "Django", icon: "/icons/django.png", type: "backend" },
  { name: "Gin", icon: "/icons/gin.png", type: "backend" },
  { name: "Echo", icon: "/icons/echo.png", type: "backend" },
  { name: "Huggingface", icon: "/icons/huggingface.png", type: "backend" },
  { name: "Langchain", icon: "/icons/langchain.png", type: "backend" },

  // Frontend
  { name: "React", icon: "/icons/react.png", type: "frontend" },
  { name: "Vue", icon: "/icons/vue.png", type: "frontend" },
  { name: "Next.js", icon: "/icons/nextjs.png", type: "frontend" },
  { name: "Radix UI", icon: "/icons/radix-ui.png", type: "frontend" },
  { name: "Shadcn UI", icon: "/icons/shadcn-ui.png", type: "frontend" },
  { name: "Tailwind", icon: "/icons/tailwind.png", type: "frontend" },
  { name: "Streamlit", icon: "/icons/streamlit.png", type: "frontend" },
  { name: "Bootstrap", icon: "/icons/bootstrap.png", type: "frontend" },
  { name: "Svelte", icon: "/icons/svelte.png", type: "frontend" },

  // Others
  { name: "Docker", icon: "/icons/docker.png", type: "other" },
  { name: "Git", icon: "/icons/git.png", type: "other" },
  { name: "PostgreSQL", icon: "/icons/postgresql.png", type: "other" },
  { name: "MySQL", icon: "/icons/mysql.png", type: "other" },
  { name: "MongoDB", icon: "/icons/mongodb.png", type: "other" },
  { name: "Jenkins", icon: "/icons/jenkins.png", type: "other" },
  { name: "AWS", icon: "/icons/aws.png", type: "other" },
  { name: "Sentry", icon: "/icons/sentry.png", type: "other" },
  { name: "Redis", icon: "/icons/redis.png", type: "other" },
  { name: "Kafka", icon: "/icons/kafka.png", type: "other" },
]; 