import { ArrowUpRight } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import Image from 'next/image';
import { projects } from '@/data/projectsData'; // Import project list

export const Projects = () => {
  return (
    <div className="flex flex-col gap-4">
      {projects.map((project) => (
        <div key={project.id} className="group">
          <Card className="bg-primary-bg border-none shadow-none hover:bg-primary-bg-hover hover:shadow-sm transition-colors duration-300 ease-in px-6 flex gap-4">
            {/* Left Side - Image Container */}
            <div className="w-[180px] h-[100px] rounded-sm border-2 border-primary-foreground overflow-hidden flex-shrink-0">
              <Image
                src={project.image}
                alt={project.title}
                width={180}
                height={100}
                className="object-cover w-full h-full"
              />
            </div>

            {/* Right Side - Text */}
            <CardContent className="p-0 flex-1">
              <a
                href={project.link}
                className="flex items-center gap-1 text-base text-primary group-hover:text-primary-alt transition"
              >
                {project.title}
                <ArrowUpRight size={16} />
              </a>
              <p className="text-gray-400 text-sm mt-1">
                {project.description}
              </p>

              {project.technologies && project.technologies.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="bg-primary-bg-foreground text-primary-alt text-xs font-medium px-3 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      ))}
    </div>
  );
};
