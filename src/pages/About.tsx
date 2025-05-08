import Layout from "@/components/Layout";
import { aboutInfo } from "@/data/about";
import { Button } from "@/components/ui/button";
import { EyeIcon, Github, Linkedin, Mail } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";

const About = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="flex flex-col md:flex-row gap-12">
          {/* Left Section */}
          <div className="md:w-2/3">
            {/* Section Header */}
            <div className="text-sm text-primary font-mono mb-2">
              // about me
            </div>

            {/* Name with Gradient Effect */}
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-primary to-accent text-transparent bg-clip-text mb-6">
              Kurniadi Ahmad Wijaya
            </h1>

            {/* Curriculum Vitae Button */}
            <div className="flex gap-4 mt-6 mb-5 animate-fade-in">
              <Dialog>
                <DialogTrigger asChild>
                  <Button
                    className="bg-gradient-to-r from-primary via-accent to-primary text-white font-bold py-2 px-6 rounded-md shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
                  >
                    See My CV
                    <EyeIcon className="ml-2 w-5 h-5" />
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-4xl h-[80vh] border border-border shadow-xl rounded-lg">
                  <iframe
                    src="/files/cv.pdf"
                    className="w-full h-full rounded"
                    title="Resume"
                  />
                </DialogContent>
              </Dialog>
            </div>

            {/* Intro Section */}
            <div className="prose prose-invert max-w-none mb-8">
              <p className="text-lg">{aboutInfo.intro}</p>
            </div>

            {/* Engineering Philosophy */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-primary mb-4 border-b border-border pb-2 flex items-center">
                <span className="mr-2">⚙️</span> Engineering Philosophy
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
              <h2 className="text-2xl font-bold text-primary mb-4 border-b border-border pb-2 flex items-center">
                <span className="mr-2">💻</span> Working Style
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

            {/* Favorite Technologies */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-primary mb-4 border-b border-border pb-2 flex items-center">
                <span className="mr-2">✨</span> Technologies I Love
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

            {/* Quote Section */}
            {aboutInfo.quote && (
              <div className="mb-10">
                <blockquote className="pl-6 border-l-4 border-primary italic text-muted-foreground bg-background/50 rounded-md p-4 shadow-inner">
                  "{aboutInfo.quote}"
                </blockquote>
              </div>
            )}
          </div>

          {/* Right Section (Profile Photo & Social Links) */}
          <div className="md:w-1/3">
            {aboutInfo.profilePhoto && (
              <div className="sticky top-24">
                {/* Profile Image with Gradient Overlay */}
                <div className="rounded-lg overflow-hidden border border-border hover:border-primary transition-all duration-300 relative">
                  <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent opacity-50 z-10"></div>
                  <img
                    src={aboutInfo.profilePhoto}
                    alt="Kurniadi Ahmad Wijaya"
                    className="w-full h-auto"
                  />
                </div>

                {/* Profile Description */}
                <div className="mt-4 text-foreground/70 text-sm text-center">
                  Software Engineer based in Jakarta, Indonesia
                  <div className="flex gap-3 mt-3 justify-center">
                    {/* GitHub Icon */}
                    <a
                      href="https://github.com/shinyq"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group hover:scale-110 transition-transform duration-200"
                    >
                      <div className="bg-background border border-border rounded-md p-2 group-hover:bg-primary/10">
                        <Github className="w-5 h-5 text-muted-foreground group-hover:text-primary" />
                      </div>
                    </a>

                    {/* LinkedIn Icon */}
                    <a
                      href="https://linkedin.com/in/kurniadiahmadwijaya"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group hover:scale-110 transition-transform duration-200"
                    >
                      <div className="bg-background border border-border rounded-md p-2 group-hover:bg-primary/10">
                        <Linkedin className="w-5 h-5 text-muted-foreground group-hover:text-primary" />
                      </div>
                    </a>

                    {/* Email Icon */}
                    <a
                      href="mailto:kurniadiahmadwijaya@gmail.com"
                      className="group hover:scale-110 transition-transform duration-200"
                    >
                      <div className="bg-background border border-border rounded-md p-2 group-hover:bg-primary/10">
                        <Mail className="w-5 h-5 text-muted-foreground group-hover:text-primary" />
                      </div>
                    </a>
                  </div>
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