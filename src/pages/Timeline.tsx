
import React, { useState } from "react";
import Layout from "@/components/Layout";
import { timelineItems } from "@/data/timeline";
import { Button } from "@/components/ui/button";

const Timeline = () => {
  const [filter, setFilter] = useState<string | null>(null);
  
  // Filter items by type
  const filteredItems = filter 
    ? timelineItems.filter(item => item.type === filter) 
    : timelineItems;
  
  // Sort by date (most recent first)
  const sortedItems = [...filteredItems].sort((a, b) => {
    return new Date(b.startDate).getTime() - new Date(a.startDate).getTime();
  });

  // Format date string
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short'
    });
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="mb-12">
          <div className="text-sm text-primary font-mono mb-2">
            // career journey
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-6">
            Timeline
          </h1>
          <p className="text-lg text-foreground/80 max-w-3xl">
            My professional journey, education, and key milestones over the years.
          </p>
        </div>
        
        {/* Filters */}
        <div className="mb-10 flex flex-wrap gap-2">
          <Button 
            variant={filter === null ? "default" : "outline"}
            onClick={() => setFilter(null)}
          >
            All
          </Button>
          <Button 
            variant={filter === "job" ? "default" : "outline"}
            onClick={() => setFilter("job")}
          >
            Professional
          </Button>
          <Button 
            variant={filter === "freelance" ? "default" : "outline"}
            onClick={() => setFilter("freelance")}
          >
            Freelance
          </Button>
          <Button 
            variant={filter === "education" ? "default" : "outline"}
            onClick={() => setFilter("education")}
          >
            Education
          </Button>
          <Button 
            variant={filter === "certification" ? "default" : "outline"}
            onClick={() => setFilter("certification")}
          >
            Certifications
          </Button>
          <Button 
            variant={filter === "event" ? "default" : "outline"}
            onClick={() => setFilter("event")}
          >
            Events
          </Button>
        </div>
        
        {/* Timeline */}
        <div className="relative border-l border-border">
          {sortedItems.map((item, index) => (
            <div 
              key={item.id} 
              className="relative mb-10 pl-10 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Timeline dot with properly fixed position */}
              <div 
                className="absolute w-4 h-4 rounded-full bg-primary shadow-md shadow-primary/20 z-10" 
                style={{ left: "-8px", top: "9px" }} 
              />
              
              <div className="mb-2">
                <span className="bg-muted text-foreground/80 text-xs px-2 py-1 rounded-full">
                  {formatDate(item.startDate)} — {item.endDate === "Present" ? "Present" : formatDate(item.endDate)}
                </span>
              </div>
              
              <div className="bg-card rounded-lg p-6 border border-border hover:border-primary transition-all duration-300">
                <div className="mb-4">
                  <h3 className="text-xl font-bold">{item.title}</h3>
                  <div className="text-primary">{item.subtitle}</div>
                </div>
                
                <ul className="space-y-2 mb-4">
                  {item.description.map((desc, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-primary mt-1">▹</span>
                      <span>{desc}</span>
                    </li>
                  ))}
                </ul>
                
                {item.tools && (
                  <div className="mt-4">
                    <div className="flex flex-wrap gap-2">
                      {item.tools.map((tool, i) => (
                        <span 
                          key={i}
                          className="text-xs px-2 py-1 rounded-md bg-muted/50 text-foreground/70"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
                
                <div className="mt-2 text-xs text-foreground/60 uppercase">
                  {item.type}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {sortedItems.length === 0 && (
          <div className="text-center py-20">
            <h3 className="text-xl mb-2">No timeline items found</h3>
            <p className="text-foreground/70">
              No items match the selected filter. Try selecting a different category.
            </p>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Timeline;
