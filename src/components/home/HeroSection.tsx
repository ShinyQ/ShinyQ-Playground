import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Typewriter from "@/components/custom/Typewriter";

const HeroSection = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center">
          <div>
            <div className="space-y-6">
              <div>
                <h1 className="text-2xl md:text-4xl font-semibold leading-snug tracking-tight text-foreground mb-2">
                  Hello<span className="pl-2 inline-block">👋</span>
                </h1>

                <h1 className="text-2xl md:text-4xl font-semibold leading-snug tracking-tight mb-4">
                  I'm <span className="bg-gradient-to-r from-primary to-accent text-transparent bg-clip-text">Kurniadi Ahmad Wijaya</span> 
                </h1>

                <Typewriter
                  text="Software engineer specializing in backend and full-stack development with 3+ years of experience designing scalable systems, clean APIs, and performant architectures."
                  className="text-base md:text-lg text-foreground/80 max-w-2xl"
                />
              </div>

              <div className="flex flex-wrap gap-4 pt-2">
                <Button asChild size="lg" className="bg-primary text-white font-bold py-2 px-6 rounded-md transition-all duration-300 hover:bg-gradient-to-r hover:from-primary/90 hover:to-accent transform hover:scale-105 flex items-center gap-2">
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
                      href="https://github.com/shinyq"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-primary hover:underline"
                    >
                      github.com/shinyq
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="text-xl">🔗</div>
                  <div>
                    <div className="font-medium">LinkedIn</div>
                    <a
                      href="https://www.linkedin.com/in/kurniadiwijaya/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-primary hover:underline"
                    >
                      linkedin.com/in/kurniadiwijaya
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
