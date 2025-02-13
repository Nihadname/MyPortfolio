import React from 'react';
import { ExternalLink } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  image: string;
  projectLink:string;
  SecondLink?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, technologies, image,projectLink, SecondLink }) => {
  return (
    <div className="group bg-white rounded-2xl shadow-lg overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
      <div className="relative h-48">
        <img src={image} alt={title} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
      <div className="p-8">
        <h3 className="text-2xl font-semibold mb-3 text-blue-900 group-hover:text-blue-700 transition-colors">{title}</h3>
        <p className="text-gray-600 mb-6 leading-relaxed">{description}</p>
        <div className="flex flex-wrap gap-2 mb-6">
          {technologies.map((tech, index) => (
            <span
              key={index}
              className="px-4 py-1.5 bg-blue-50 text-blue-800 rounded-full text-sm font-medium group-hover:bg-blue-100 transition-colors"
            >
              {tech}
            </span>
          ))}
        </div>
        <a
          href={projectLink}
          className="inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold transition-colors group-hover:translate-x-2 transform transition-transform duration-300"
        >
          View Project <ExternalLink size={18} className="ml-2" />
        </a>
        {SecondLink && (
            <a
              href={SecondLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold transition-colors transform group-hover:translate-x-2 duration-300"
            >
              Second Link <ExternalLink size={18} className="ml-2" />
            </a>
          )}
      </div>
    </div>
  );
};

export default ProjectCard;