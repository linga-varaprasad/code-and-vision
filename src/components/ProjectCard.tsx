
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { ExternalLink, Github } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  delay?: number;
}

const ProjectCard = ({
  title,
  description,
  technologies,
  liveUrl,
  githubUrl,
  delay = 0,
}: ProjectCardProps) => {
  return (
    <div 
      className="card-project group animate-fade-in-up" 
      style={{ animationDelay: `${delay * 0.1}s` }}
    >
      <div className="flex justify-between items-start mb-3">
        <h3 className="font-jacques text-xl">{title}</h3>
        <div className="flex space-x-2">
          {githubUrl && (
            <a 
              href={githubUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="opacity-70 hover:opacity-100 hover:text-accent transition-all duration-300"
              aria-label={`GitHub repository for ${title}`}
            >
              <Github size={18} />
            </a>
          )}
          {liveUrl && (
            <a 
              href={liveUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="opacity-70 hover:opacity-100 hover:text-accent transition-all duration-300"
              aria-label={`Live demo for ${title}`}
            >
              <ExternalLink size={18} />
            </a>
          )}
        </div>
      </div>
      
      <p className="mb-4 text-sm md:text-base opacity-80">{description}</p>
      
      <div className="flex flex-wrap gap-2">
        {technologies.map((tech, index) => (
          <Badge key={index} variant="outline" className="bg-white/10 border-white/20">
            {tech}
          </Badge>
        ))}
      </div>
    </div>
  );
};

export default ProjectCard;
