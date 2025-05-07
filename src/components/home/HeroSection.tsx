
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="pt-20 pb-10 md:py-28">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <div className="flex flex-col space-y-4 md:space-y-6">
              <div className="flex flex-col space-y-1">
                <span className="text-primary font-mono">/ contact-info</span>
                <div className="bg-muted rounded-md p-4 border border-border">
                  <ul className="space-y-3">
                    <li className="flex items-center gap-2 text-sm md:text-base">
                      <span className="text-primary">📍</span>
                      <span>Jakarta, Indonesia</span>
                    </li>
                    <li className="flex items-center gap-2 text-sm md:text-base">
                      <span className="text-primary">✉️</span>
                      <a 
                        href="mailto:kurniadiahmadwijaya@gmail.com"
                        className="hover:text-primary transition-colors"
                      >
                        kurniadiahmadwijaya@gmail.com
                      </a>
                    </li>
                    <li className="flex items-center gap-2 text-sm md:text-base">
                      <span className="text-primary">🐙</span>
                      <a 
                        href="https://github.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-primary transition-colors"
                      >
                        GitHub
                      </a>
                    </li>
                    <li className="flex items-center gap-2 text-sm md:text-base">
                      <span className="text-primary">🔗</span>
                      <a 
                        href="https://linkedin.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-primary transition-colors"
                      >
                        LinkedIn
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          
          <div className="order-1 md:order-2">
            <div className="space-y-6">
              <div>
                <div className="text-xs md:text-sm text-primary font-mono mb-2">
                  // hello world
                </div>
                <h1 className="text-3xl md:text-5xl font-bold mb-4">
                  I'm Kurniadi Ahmad Wijaya
                </h1>
                <div className="text-lg md:text-xl text-foreground/80">
                  Software Engineer with 3+ years of experience in backend and full-stack development, 
                  focusing on microservices, API integrations, and system optimization.
                </div>
              </div>
              
              <div className="text-foreground/80">
                <p>
                  Experienced in cross-functional collaboration, providing technical guidance, 
                  and developing solutions that support business objectives.
                </p>
              </div>
              
              <div className="flex flex-wrap gap-3">
                <Button asChild>
                  <Link to="/projects">
                    View Projects
                    <ArrowRight size={16} className="ml-1" />
                  </Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link to="/about">About Me</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
