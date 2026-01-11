import { HeroUIProvider, Card, CardBody } from "@heroui/react";
import { getIconByTags } from "../../utils/getIconByTags";
import "../../components/home/style.less"; // 复用 home 的样式

interface Project {
  icon: string | any;
  iconType: string;
  name: string;
  description: string;
  url: string;
  tags: string[];
  badges?: string[];
}

interface PortfolioGridProps {
  projects: Project[];
}

export default function PortfolioGrid({ projects }: PortfolioGridProps) {
  return (
    <HeroUIProvider>
      <div className="grid md:grid-cols-2 gap-4">
        {projects.map((project, index) => {
          return (
            <Card
              key={index}
              className="project-card h-[200px]"
              as="a"
              href={project.url}
              target="_blank"
            >
              <CardBody className="p-5 flex flex-col h-full">
                <div className="flex gap-4 mb-3 flex-shrink-0">
                  <div className="flex-shrink-0">
                    {project.iconType === "img" ? (
                      <img
                        src={project.icon as string}
                        alt={project.name}
                        style={{ width: "32px", height: "32px" }}
                        className="rounded-lg object-contain"
                      />
                    ) : (
                      getIconByTags(project.tags)
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-base font-semibold text-gray-100 mb-1">
                      {project.name}
                    </h3>
                    <p className="text-sm text-gray-400 leading-relaxed line-clamp-2">
                      {project.description}
                    </p>
                  </div>
                </div>
                {/* Tags and Badges */}
                <div className="flex flex-wrap items-center gap-2 mt-auto pt-3 border-t border-gray-800">
                  {/* Tags */}
                  {project.tags?.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-0.5 text-xs rounded bg-gray-800/50 text-gray-400 border border-gray-700"
                    >
                      {tag}
                    </span>
                  ))}
                  {/* Badges from URL */}
                  {project.badges?.map((badgeUrl, idx) => (
                    <img
                      key={idx}
                      src={badgeUrl}
                      alt="badge"
                      className="h-5"
                    />
                  ))}
                </div>
              </CardBody>
            </Card>
          );
        })}
      </div>
    </HeroUIProvider>
  );
}
