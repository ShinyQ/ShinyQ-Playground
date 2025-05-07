
import React from "react";
import Layout from "@/components/Layout";
import { aboutInfo } from "@/data/about";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="flex flex-col md:flex-row gap-12">
          <div className="md:w-2/3">
            <div className="text-sm text-primary font-mono mb-2">
              // about me
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-6">
              Kurniadi Ahmad Wijaya
            </h1>
            
            {/* Intro */}
            <div className="prose prose-invert max-w-none mb-8">
              <p className="text-lg">{aboutInfo.intro}</p>
            </div>
            
            {/* Philosophy */}
            <div className="mb-10">
              <h2 className="text-xl font-semibold mb-4 flex items-center">
                <span className="text-primary mr-2">#</span>
                Engineering Philosophy
              </h2>
              <ul className="space-y-3">
                {aboutInfo.philosophy.map((item, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-primary mt-1">▹</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Working Style */}
            <div className="mb-10">
              <h2 className="text-xl font-semibold mb-4 flex items-center">
                <span className="text-primary mr-2">#</span>
                Working Style
              </h2>
              <ul className="space-y-3">
                {aboutInfo.workingStyle.map((item, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-primary mt-1">▹</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Favorite Tech */}
            <div className="mb-10">
              <h2 className="text-xl font-semibold mb-4 flex items-center">
                <span className="text-primary mr-2">#</span>
                Technologies I Love
              </h2>
              <ul className="space-y-3">
                {aboutInfo.favoriteTech.map((item, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-primary mt-1">▹</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Quote */}
            {aboutInfo.quote && (
              <div className="mb-10">
                <blockquote className="pl-4 border-l-2 border-primary italic text-foreground/80">
                  "{aboutInfo.quote}"
                </blockquote>
              </div>
            )}
            
            <div className="flex gap-4 mt-8">
              <Button asChild>
                <Link to="/projects">
                  View My Projects
                  <ArrowRight size={16} className="ml-1" />
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <a href="/resume.pdf" download>
                  Download Resume
                </a>
              </Button>
            </div>
          </div>
          
          <div className="md:w-1/3">
            {aboutInfo.profilePhoto && (
              <div className="sticky top-24">
                <div className="rounded-lg overflow-hidden border border-border hover:border-primary transition-all duration-300 relative">
                  <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent opacity-50 z-10"></div>
                  <img 
                    src={aboutInfo.profilePhoto} 
                    alt="Kurniadi Ahmad Wijaya" 
                    className="w-full h-auto" 
                  />
                </div>
                <div className="mt-4 text-foreground/70 text-sm">
                  Software Engineer based in Jakarta, Indonesia
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
