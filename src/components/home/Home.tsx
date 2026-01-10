import { HeroUIProvider, Link, Card, CardBody } from "@heroui/react";
import {
  LogoGithub,
  LogoLinkedin,
  LogoTwitter,
  CodeSlashOutline,
  DocumentTextOutline,
  CalendarOutline,
} from "@ricons/ionicons5";
import "./style.less";

const projects = [
  {
    icon: CodeSlashOutline,
    name: "Personal Website",
    description: "A modern personal portfolio built with React, TypeScript and Astro.",
    url: "https://github.com/gxy5202",
  },
  {
    icon: CodeSlashOutline,
    name: "Open Source Contributions",
    description: "Contributing to various open source projects and communities.",
    url: "https://github.com/gxy5202",
  },
  {
    icon: CodeSlashOutline,
    name: "More Projects",
    description: "Check out more projects and repositories on GitHub.",
    url: "https://github.com/gxy5202",
  },
];

interface Post {
  title: string;
  date: string;
  url: string;
}

interface HomeProps {
  recentPosts?: Post[];
}

/**
 * Home page
 * @returns
 */
export default function Home({ recentPosts = [] }: HomeProps) {
  return (
    <HeroUIProvider>
      <div className="home min-h-screen text-gray-100 flex items-center justify-center px-6 py-12">
        <div className="max-w-4xl w-full">
          {/* 主标题和简介 */}
          <div className="mb-16">
            <h1 className="info-text text-4xl font-bold mb-4 tracking-tight">
              Hi, I'm Gomi （勾鑫宇）
            </h1>
            <p className="text-xl text-gray-400 mb-6">
              A front end developer who is creating the life he loves.
            </p>
            <div className="flex flex-wrap gap-6 mt-8">
              <Link
                href="https://github.com/gxy5202"
                target="_blank"
                className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
              >
                <LogoGithub
                  style={{ width: "18px", height: "18px" }}
                  onPointerEnterCapture={undefined}
                  onPointerLeaveCapture={undefined}
                />
                <span className="text-sm">GitHub</span>
              </Link>
              <Link
                href="https://www.linkedin.com/in/xinyu-gou-5558b721a"
                target="_blank"
                className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
              >
                <LogoLinkedin
                  style={{ width: "18px", height: "18px" }}
                  onPointerEnterCapture={undefined}
                  onPointerLeaveCapture={undefined}
                />
                <span className="text-sm">LinkedIn</span>
              </Link>
              <Link
                href="https://twitter.com/GomiGxy"
                target="_blank"
                className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
              >
                <LogoTwitter
                  style={{ width: "18px", height: "18px" }}
                  onPointerEnterCapture={undefined}
                  onPointerLeaveCapture={undefined}
                />
                <span className="text-sm">Twitter</span>
              </Link>
              <Link
                href="mailto:gxy5202@gmail.com"
                className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
              >
                <span className="text-sm">gxy5202@gmail.com</span>
              </Link>
            </div>
          </div>

          {/* Projects */}
          <section className="mb-16">
            <h2 className="text-sm uppercase tracking-widest text-gray-500 mb-6">
              Projects
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {projects.map((project, index) => {
                const IconComponent = project.icon;
                return (
                  <Card
                    key={index}
                    className="project-card"
                    as="a"
                    href={project.url}
                    target="_blank"
                  >
                    <CardBody className="p-5">
                      <div className="flex gap-4">
                        <div className="flex-shrink-0">
                          <IconComponent
                            style={{ width: "24px", height: "24px" }}
                            className="text-blue-400"
                            onPointerEnterCapture={undefined}
                            onPointerLeaveCapture={undefined}
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="text-base font-semibold text-gray-100 mb-1">
                            {project.name}
                          </h3>
                          <p className="text-sm text-gray-400 leading-relaxed">
                            {project.description}
                          </p>
                        </div>
                      </div>
                    </CardBody>
                  </Card>
                );
              })}
            </div>
          </section>

          {/* Recent Posts */}
          <section>
            <h2 className="text-sm uppercase tracking-widest text-gray-500 mb-6">
              Recent Posts
            </h2>
            <div className="space-y-3">
              {recentPosts.map((post, index) => (
                <Card
                  key={index}
                  className="post-card"
                  as="a"
                  href={post.url}
                >
                  <CardBody className="p-5">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0">
                        <DocumentTextOutline
                          style={{ width: "20px", height: "20px" }}
                          className="text-cyan-400"
                          onPointerEnterCapture={undefined}
                          onPointerLeaveCapture={undefined}
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-base text-gray-100 font-medium mb-1">
                          {post.title}
                        </h3>
                        <div className="flex items-center gap-2 text-xs text-gray-500">
                          <CalendarOutline
                            style={{ width: "14px", height: "14px" }}
                            onPointerEnterCapture={undefined}
                            onPointerLeaveCapture={undefined}
                          />
                          <span>{post.date}</span>
                        </div>
                      </div>
                    </div>
                  </CardBody>
                </Card>
              ))}
            </div>
          </section>
        </div>
      </div>
    </HeroUIProvider>
  );
}
