import React, { useState } from "react";
import Layout from "@/components/Layout";
import { projects } from "@/data/projects";
import { ArrowRight, Github, Link as LinkIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  
  // Get unique tags
  const allTags = Array.from(
    new Set(projects.flatMap(project => project.tags))
  );
  
  // Filter projects by tag
  const filteredProjects = selectedTag
    ? projects.filter(project => project.tags.includes(selectedTag))
    : projects;

  return (
    <Layout>
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="mb-12">
          <div className="text-sm text-primary font-mono mb-2">
            // featured projects
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-6">
            My Projects
          </h1>
          <p className="text-lg text-foreground/80 max-w-3xl">
            A collection of projects I've built and contributed to. These range from 
            personal explorations to professional work across various domains.
          </p>
        </div>
        
        {/* Tags filter */}
        <div className="mb-8 flex flex-wrap gap-2">
          <button
            onClick={() => setSelectedTag(null)}
            className={`px-3 py-1 rounded-full text-sm transition-colors
              ${!selectedTag 
                ? 'bg-primary text-primary-foreground' 
                : 'bg-muted text-foreground/70 hover:bg-muted/80'}`}
          >
            All
          </button>
          {allTags.map(tag => (
            <button
              key={tag}
              onClick={() => setSelectedTag(tag)}
              className={`px-3 py-1 rounded-full text-sm transition-colors
                ${selectedTag === tag 
                  ? 'bg-primary text-primary-foreground' 
                  : 'bg-muted text-foreground/70 hover:bg-muted/80'}`}
            >
              {tag}
            </button>
          ))}
        </div>
        
        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map(project => (
            <div key={project.id} className="project-card flex flex-col h-full">
              <div className="h-48 overflow-hidden">
                <img 
                  src={project.coverImage} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105" 
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.tags.map((tag, i) => (
                    <span 
                      key={i} 
                      className="text-xs px-2 py-1 rounded-full bg-muted text-foreground/80"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  {project.title}
                </h3>
                <p className="text-foreground/70 mb-4 flex-grow">
                  {project.description}
                </p>
                
                <div className="mb-4">
                  <div className="text-sm font-medium mb-2">Role:</div>
                  <div className="text-foreground/80">{project.role}</div>
                </div>
                
                <div className="mb-5">
                  <div className="text-sm font-medium mb-2">Tech Stack:</div>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech, index) => (
                      <span 
                        key={index} 
                        className="text-xs px-2 py-1 rounded-md bg-muted/50 text-foreground/70"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex gap-3 mt-auto">
                  {project.githubUrl && (
                    <Button variant="outline" size="sm" asChild>
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github size={16} className="mr-1" /> GitHub
                      </a>
                    </Button>
                  )}
                  {project.liveUrl && (
                    <Button size="sm" asChild>
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <LinkIcon size={16} className="mr-1" /> Live Demo
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {filteredProjects.length === 0 && (
          <div className="text-center py-20">
            <h3 className="text-xl mb-2">No projects found</h3>
            <p className="text-foreground/70">
              No projects match the selected filter. Try selecting a different category.
            </p>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Projects;
