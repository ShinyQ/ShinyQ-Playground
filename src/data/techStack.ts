interface TechItem {
  name: string;
  icon: string;
  type?: string;
  site?: string;
}

export const techItems: TechItem[] = [
  // Backend
  { name: "Spring Boot", icon: "/icons/spring-boot.png", type: "backend", site: "https://spring.io/projects/spring-boot" },
  { name: "ExpressJS", icon: "/icons/expressjs.png", type: "backend", site: "https://expressjs.com/" },
  { name: "Laravel", icon: "/icons/laravel.png", type: "backend", site: "https://laravel.com/" },
  { name: "Flask", icon: "/icons/flask.png", type: "backend", site: "https://flask.palletsprojects.com/" },
  { name: "FastAPI", icon: "/icons/fastapi.png", type: "backend", site: "https://fastapi.tiangolo.com/" },
  { name: "Django", icon: "/icons/django.png", type: "backend", site: "https://www.djangoproject.com/" },
  { name: "Gin", icon: "/icons/gin.png", type: "backend", site: "https://gin-gonic.com/" },
  { name: "Echo", icon: "/icons/echo.png", type: "backend", site: "https://echo.labstack.com/" },
  { name: "Huggingface", icon: "/icons/huggingface.png", type: "backend", site: "https://huggingface.co/" },
  { name: "Langchain", icon: "/icons/langchain.png", type: "backend", site: "https://www.langchain.com/" },

  // Frontend
  { name: "React", icon: "/icons/react.png", type: "frontend", site: "https://react.dev/" },
  { name: "Vue", icon: "/icons/vue.png", type: "frontend", site: "https://vuejs.org/" },
  { name: "Next.js", icon: "/icons/nextjs.png", type: "frontend", site: "https://nextjs.org/" },
  { name: "Radix UI", icon: "/icons/radix-ui.png", type: "frontend", site: "https://www.radix-ui.com/" },
  { name: "Shadcn UI", icon: "/icons/shadcn-ui.png", type: "frontend", site: "https://ui.shadcn.com/" },
  { name: "Tailwind", icon: "/icons/tailwind.png", type: "frontend", site: "https://tailwindcss.com/" },
  { name: "Streamlit", icon: "/icons/streamlit.png", type: "frontend", site: "https://streamlit.io/" },
  { name: "Bootstrap", icon: "/icons/bootstrap.png", type: "frontend", site: "https://getbootstrap.com/" },
  { name: "Svelte", icon: "/icons/svelte.png", type: "frontend", site: "https://svelte.dev/" },

  // Others
  { name: "Docker", icon: "/icons/docker.png", type: "other", site: "https://www.docker.com/" },
  { name: "Git", icon: "/icons/git.png", type: "other", site: "https://git-scm.com/" },
  { name: "PostgreSQL", icon: "/icons/postgresql.png", type: "other", site: "https://www.postgresql.org/" },
  { name: "MySQL", icon: "/icons/mysql.png", type: "other", site: "https://www.mysql.com/" },
  { name: "MongoDB", icon: "/icons/mongodb.png", type: "other", site: "https://www.mongodb.com/" },
  { name: "Jenkins", icon: "/icons/jenkins.png", type: "other", site: "https://www.jenkins.io/" },
  { name: "AWS", icon: "/icons/aws.png", type: "other", site: "https://aws.amazon.com/" },
  { name: "Sentry", icon: "/icons/sentry.png", type: "other", site: "https://sentry.io/" },
  { name: "Redis", icon: "/icons/redis.png", type: "other", site: "https://redis.io/" },
  { name: "Kafka", icon: "/icons/kafka.png", type: "other", site: "https://kafka.apache.org/" },
]; 