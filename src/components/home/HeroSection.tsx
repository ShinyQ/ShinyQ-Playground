
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center">
          <div>
            <div className="space-y-6">
              <div>
                <div className="text-xs md:text-sm text-primary font-mono mb-2">
                  // software engineer
                </div>
                <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
                  Building <span className="text-primary">robust solutions</span> for complex problems
                </h1>
                <div className="text-lg text-foreground/80">
                  I'm Kurniadi Ahmad Wijaya, a software engineer specializing in backend and full-stack development 
                  with 3+ years experience building scalable systems and APIs.
                </div>
              </div>
              
              <div className="flex flex-wrap gap-4 pt-2">
                <Button asChild size="lg">
                  <Link to="/projects">
                    View My Projects
                    <ArrowRight size={16} className="ml-2" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link to="/about">About Me</Link>
                </Button>
              </div>
            </div>
          </div>
          
          <div>
            <div className="bg-muted rounded-lg border border-border p-6">
              <div className="flex items-center gap-2 mb-4 text-sm text-primary font-mono">
                <span className="flex h-3 w-3 rounded-full bg-primary"></span>
                <span>// get-in-touch</span>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="text-xl">📍</div>
                  <div>
                    <div className="font-medium">Location</div>
                    <div className="text-sm text-foreground/70">Jakarta, Indonesia</div>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="text-xl">✉️</div>
                  <div>
                    <div className="font-medium">Email</div>
                    <a 
                      href="mailto:kurniadiahmadwijaya@gmail.com"
                      className="text-sm text-primary hover:underline"
                    >
                      kurniadiahmadwijaya@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="text-xl">🐙</div>
                  <div>
                    <div className="font-medium">GitHub</div>
                    <a 
                      href="https://github.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-primary hover:underline"
                    >
                      github.com/kurniadi
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="text-xl">🔗</div>
                  <div>
                    <div className="font-medium">LinkedIn</div>
                    <a 
                      href="https://linkedin.com"
                      target="_blank"
                      rel="noopener noreferrer" 
                      className="text-sm text-primary hover:underline"
                    >
                      linkedin.com/in/kurniadi
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
