import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import GalleryModal from "@/components/project/GalleryModal";
import { Github, Link as LinkIcon } from "lucide-react";

interface GalleryImage {
  src: string;
  alt: string;
}

interface Project {
  id: string;
  title: string;
  description: string;
  coverImage: string;
  tags: string[];
  role: string;
  techStack: string[];
  githubUrl?: string;
  liveUrl?: string;
  gallery: GalleryImage[];
}

interface ProjectGridProps {
  projects: Project[];
}

const ProjectGrid: React.FC<ProjectGridProps> = ({ projects }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalImages, setModalImages] = useState<GalleryImage[]>([]);
  const [modalStartIndex, setModalStartIndex] = useState(0);

  function handleImageClick(images: GalleryImage[], idx: number) {
    setModalImages(images);
    setModalStartIndex(idx);
    setModalOpen(true);
  }

  return (
    <>
      {projects.map((project) => (
        <div
          className="project-card flex flex-col h-full"
          data-tags={project.tags.join(",")}
          key={project.id}
        >
          <div className="h-48 overflow-hidden">
            <button
              onClick={() => handleImageClick(project.gallery, 0)}
              className="h-48 w-full overflow-hidden cursor-zoom-in focus:outline-none"
              aria-label={`Open gallery for ${project.title}`}
            >
              <img
                src={project.coverImage}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                loading="lazy"
                decoding="async"
              />
            </button>
          </div>
          <div className="p-6 flex flex-col flex-grow">
            <div className="flex flex-wrap gap-2 mb-3">
              {project.tags.map((tag: string) => (
                <span className="text-xs px-2 py-1 rounded-full bg-muted text-foreground/80" key={tag}>
                  {tag}
                </span>
              ))}
            </div>
            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
            <p className="text-sm text-foreground/70 mb-4 flex-grow">
              {project.description}
            </p>

            <div className="mb-4">
              <div className="text-sm font-medium mb-2">Role:</div>
              <div className="text-foreground/80">{project.role}</div>
            </div>

            <div className="mb-5">
              <div className="text-sm font-medium mb-2">Tech Stack:</div>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech: string) => (
                  <span className="text-xs px-2 py-1 rounded-md bg-muted/50 text-foreground/70" key={tech}>
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex gap-3 mt-auto">
              {project.githubUrl && (
                <Button
                  variant="outline"
                  size="sm"
                  className="flex items-center"
                >
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center"
                  >
                    <Github size={16} className="mr-2" /> GitHub
                  </a>
                </Button>
              )}
              {project.liveUrl && (
                <Button size="sm" className="flex items-center">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center"
                  >
                    <LinkIcon size={16} className="mr-2" /> Live Demo
                  </a>
                </Button>
              )}
            </div>
          </div>
        </div>
      ))}
      <GalleryModal
        images={modalImages}
        open={modalOpen}
        startIndex={modalStartIndex}
        onClose={() => setModalOpen(false)}
      />
    </>
  );
};

export default ProjectGrid; 