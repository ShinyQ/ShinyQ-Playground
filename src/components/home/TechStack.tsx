import React from "react";

interface TechItem {
  name: string;
  icon: string;
  type: "backend" | "frontend" | "other";
}

const techItems: TechItem[] = [
  // Backend
  { name: "Spring Boot", icon: "🍃", type: "backend" },
  { name: "ExpressJS", icon: "🚂", type: "backend" },
  { name: "Laravel", icon: "🔺", type: "backend" },
  { name: "Flask", icon: "🧪", type: "backend" },
  { name: "FastAPI", icon: "⚡", type: "backend" },
  { name: "Django", icon: "🦄", type: "backend" },
  { name: "Gin", icon: "🍸", type: "backend" },
  { name: "Echo", icon: "📡", type: "backend" },
  { name: "Huggingface", icon: "🤗", type: "backend" },
  { name: "Langchain", icon: "⛓️", type: "backend" },
  
  // Frontend
  { name: "React", icon: "⚛️", type: "frontend" },
  { name: "Vue", icon: "💚", type: "frontend" },
  { name: "Next.js", icon: "▲", type: "frontend" },
  { name: "Tailwind", icon: "🌊", type: "frontend" },
  { name: "Streamlit", icon: "🌊", type: "frontend" },
  
  // Others
  { name: "Docker", icon: "🐳", type: "other" },
  { name: "Git", icon: "🐙", type: "other" },
  { name: "PostgreSQL", icon: "🐘", type: "other" },
  { name: "MySQL", icon: "🐬", type: "other" },
  { name: "MongoDB", icon: "🍃", type: "other" },
  { name: "Jenkins", icon: "🤵", type: "other" },
  { name: "AWS S3", icon: "☁️", type: "other" },
  { name: "Sentry", icon: "🦅", type: "other" },
  { name: "Redis", icon: "🟥", type: "other" },
];

const TechStack = () => {
  // Group tech items by type
  const backendItems = techItems.filter(item => item.type === "backend");
  const frontendItems = techItems.filter(item => item.type === "frontend");
  const otherItems = techItems.filter(item => item.type === "other");
  
  return (
    <section className="py-16 overflow-hidden bg-muted">
      <div className="container mx-auto px-4 mb-8">
        <div className="text-sm text-primary font-mono mb-2">
          // tech stack
        </div>
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          Technologies I Work With
        </h2>
        <p className="text-foreground/70 max-w-2xl">
          I've worked with a wide range of technologies across the full stack.
          Here are some of my favorites that I use regularly.
        </p>
      </div>

      <div className="space-y-10">
        {/* Backend Technologies */}
        <div className="relative">
          <div className="mb-2 px-4 md:px-8">
            <span className="inline-block py-1 px-3 bg-primary/20 text-primary rounded-full text-sm">
              Backend
            </span>
          </div>
          <div className="flex overflow-hidden">
            <div className="flex animate-marquee whitespace-nowrap">
              {[...backendItems, ...backendItems].map((tech, index) => (
                <div key={`${tech.name}-${index}`} className="tech-card mx-2">
                  <span className="text-xl">{tech.icon}</span>
                  <span>{tech.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Frontend Technologies */}
        <div className="relative">
          <div className="mb-2 px-4 md:px-8">
            <span className="inline-block py-1 px-3 bg-accent/20 text-accent rounded-full text-sm">
              Frontend
            </span>
          </div>
          <div className="flex overflow-hidden">
            <div className="flex animate-marquee-slow whitespace-nowrap">
              {[...frontendItems, ...frontendItems, ...frontendItems].map((tech, index) => (
                <div key={`${tech.name}-${index}`} className="tech-card mx-2">
                  <span className="text-xl">{tech.icon}</span>
                  <span>{tech.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Other Technologies */}
        <div className="relative">
          <div className="mb-2 px-4 md:px-8">
            <span className="inline-block py-1 px-3 bg-foreground/10 text-foreground/80 rounded-full text-sm">
              Other
            </span>
          </div>
          <div className="flex overflow-hidden">
            <div className="flex animate-marquee whitespace-nowrap">
              {[...otherItems, ...otherItems].map((tech, index) => (
                <div key={`${tech.name}-${index}`} className="tech-card mx-2">
                  <span className="text-xl">{tech.icon}</span>
                  <span>{tech.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
