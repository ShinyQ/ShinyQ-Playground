import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import GalleryModal from "@/components/project/GalleryModal";
import { GitBranch, Link as LinkIcon, FileText } from "lucide-react";
import { getSubcategories } from "@/data/tagCategories";

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
  docUrl?: string;
  gallery: GalleryImage[];
}

interface ProjectGridProps {
  projects: Project[];
}

const ProjectGrid: React.FC<ProjectGridProps> = ({ projects }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalImages, setModalImages] = useState<GalleryImage[]>([]);
  const [modalStartIndex, setModalStartIndex] = useState(0);
  const [activeCategory, setActiveCategory] = useState<string>("all");

  useEffect(() => {
    const handleTagClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.matches('[data-category]')) {
        const category = target.getAttribute('data-category');
        if (category) {
          setActiveCategory(category);
        }
      }
    };

    document.addEventListener('click', handleTagClick);
    return () => document.removeEventListener('click', handleTagClick);
  }, []);

  useEffect(() => {
    const projectCards = document.querySelectorAll('.project-card');
    const noProjectsMessage = document.getElementById('no-projects');
    let visibleCount = 0;

    projectCards.forEach((card) => {
      const tags = (card as HTMLElement).dataset.tags?.split(',') || [];
      let shouldShow = false;

      if (activeCategory === 'all') {
        shouldShow = true;
      } else {
        const subcategories = getSubcategories(activeCategory);
        shouldShow = tags.some(tag => subcategories.includes(tag));
      }

      (card as HTMLElement).style.display = shouldShow ? 'flex' : 'none';
      if (shouldShow) visibleCount++;
    });

    if (noProjectsMessage) {
      noProjectsMessage.style.display = visibleCount === 0 ? 'block' : 'none';
    }

    // Update active category button styles
    const categoryButtons = document.querySelectorAll('[data-category]');
    categoryButtons.forEach((button) => {
      const category = (button as HTMLElement).getAttribute('data-category');
      if (category === activeCategory) {
        button.classList.remove('bg-muted', 'text-foreground/70');
        button.classList.add('bg-primary', 'text-primary-foreground');
      } else {
        button.classList.remove('bg-primary', 'text-primary-foreground');
        button.classList.add('bg-muted', 'text-foreground/70');
      }
    });
  }, [activeCategory]);

  function handleImageClick(images: GalleryImage[], idx: number) {
    setModalImages(images);
    setModalStartIndex(idx);
    setModalOpen(true);
  }

  return (
    <>
      {projects.map((project) => (
        <div
          className="project-card flex flex-col h-full bg-card rounded-lg border border-border shadow-lg hover:shadow-xl hover:border-primary transition-all duration-300"
          data-tags={project.tags.join(",")}
          key={project.id}
        >
          <div className="h-48 overflow-hidden rounded-t-lg">
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

            <div className="flex gap-2 mt-auto">
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
                    <GitBranch size={16} className="mr-2" /> GitHub
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
              {project.docUrl && (
                <Button
                  variant="outline"
                  size="sm"
                  className="flex items-center"
                >
                  <a
                    href={project.docUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center"
                  >
                    <FileText size={16} className="mr-2" /> Docs
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