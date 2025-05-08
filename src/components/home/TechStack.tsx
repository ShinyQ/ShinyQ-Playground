import { techItems, TechItem } from "@/data/techStack";

const TechStack = () => {
  const grouped = {
    backend: techItems.filter((item) => item.type === "backend"),
    frontend: techItems.filter((item) => item.type === "frontend"),
    other: techItems.filter((item) => item.type === "other"),
  };

  const Section = ({ items }: { items: TechItem[] }) => (
    <div className="relative group overflow-hidden border border-border rounded-lg bg-gradient-to-r py-0">
      <div className="w-full relative overflow-hidden">
        <div className="flex gap-3 w-max px-2 animate-marquee-fast group-hover:[animation-play-state:paused]">
          {[...items, ...items].map((tech, i) => (
            <div
              key={`${tech.name}-${i}`}
              className="flex items-center gap-2 bg-background border border-border shadow-sm rounded-md px-4 py-2 text-sm hover:scale-[1.02] transition-transform duration-300"
            >
              <img
                src={tech.icon}
                alt={tech.name}
                className="w-6 h-6 bg-white rounded-sm p-0.5"
              />

              <span className="whitespace-nowrap">{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <section className="py-12 bg-muted text-center">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">
          Technologies I Work With
        </h2>
        <p className="text-foreground/70 max-w-2xl mx-auto text-sm mb-6">
          From backend systems to modern frontend frameworks, <br />
          these are the tools I reach for in building great software.
        </p>
        <div className="space-y-4">
          <Section items={grouped.backend} />
          <Section items={grouped.frontend} />
          <Section items={grouped.other} />
        </div>
      </div>
    </section>
  );
};

export default TechStack;
