import { ArrowUpRight } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { experiences } from '@/data/experiencesData';

export const Experience = () => {
  return (
    <div className="flex flex-col gap-4">
      {experiences.map((experience) => (
        <div key={experience.id} className="group">
          <Card className="bg-primary-bg border-none shadow-none hover:bg-primary-bg-hover hover:shadow-sm transition-colors duration-300 ease-in px-6 flex flex-col sm:flex-row items-start gap-4">
            {/* Left Side - Date */}
            <div className="w-[180px] flex-shrink-0 self-start">
              <p className="text-sm text-primary-foreground">
                {experience.date}
              </p>
            </div>

            {/* Right Side - Job Title, Description & Tech Stack */}
            <CardContent className="p-0 flex-1 self-start">
              <h3 className="text-base text-primary group-hover:text-primary-alt transition leading-tight">
                <span className="flex flex-col sm:flex-row sm:items-center gap-1">
                  <span>{experience.title} ‣</span>
                  <span className="flex items-center gap-1">
                    {experience.company}
                    <ArrowUpRight size={16} />
                  </span>
                </span>
              </h3>

              {experience.description && (
                <p className="text-primary-foreground text-base leading-relaxed mt-1">
                  {experience.description}
                </p>
              )}

              {experience.technologies &&
                experience.technologies.length > 0 && (
                  <div className="flex flex-wrap gap-2 mt-3">
                    {experience.technologies.map((tech, index) => (
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
