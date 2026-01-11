import { HeroUIProvider, Link, Card, CardBody } from "@heroui/react";
import {
  LogoGithub,
  LogoLinkedin,
  CodeSlashOutline,
  DocumentTextOutline,
  CalendarOutline,
  ArrowForward,
  MailOutline,
} from "@ricons/ionicons5";
import { getIconByTags } from "../../utils/getIconByTags";
import "./style.less";

interface Project {
  icon: string | any;
  iconType: string;
  name: string;
  description: string;
  url: string;
  tags: string[];
  badges?: string[];
}

interface Post {
  title: string;
  date: string;
  url: string;
  cover: string;
}

interface HomeProps {
  projects?: Project[];
  recentPosts?: Post[];
}

/**
 * Home page
 * @returns
 */
export default function Home({ projects = [], recentPosts = [] }: HomeProps) {
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
                />
                {/* <span className="text-sm">GitHub</span> */}
              </Link>
              <Link
                href="https://www.linkedin.com/in/xinyu-gou-5558b721a"
                target="_blank"
                className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
              >
                <LogoLinkedin
                  style={{ width: "18px", height: "18px" }}
                />
                {/* <span className="text-sm">LinkedIn</span> */}
              </Link>
              <Link
                href="https://twitter.com/GomiGxy"
                target="_blank"
                className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
                {/* <span className="text-sm">X</span> */}
              </Link>
              <Link
                href="mailto:gxy880520@gmail.com"
                className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
              >
                <MailOutline
                  style={{ width: "18px", height: "18px" }}
                />
                <span className="text-sm">gxy880520@gmail.com</span>
              </Link>
            </div>
          </div>

          {/* Open Source Contributions Link */}
          <div className="mb-8">
            <Link
              href="/contributions"
              className="inline-flex items-center gap-2 text-gray-300 hover:text-white transition-colors group"
            >
              <CodeSlashOutline
                style={{ width: "20px", height: "20px" }}
                className="text-green-400"
              />
              <span className="text-base s-medium">Open Source Contributions</span>
              <ArrowForward
                style={{ width: "16px", height: "16px" }}
                className="group-hover:translate-x-1 transition-transform"
              />
            </Link>
          </div>

          {/* Projects */}
          <section className="mb-16">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-sm uppercase tracking-widest text-gray-500">
                Projects
              </h2>
              <Link
                href="/portfolio"
                className="flex items-center gap-1 text-sm text-gray-400 hover:text-white transition-colors group"
              >
                <span>More</span>
                <ArrowForward
                  style={{ width: "16px", height: "16px" }}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </Link>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {projects.map((project, index) => {
                return (
                  <Card
                    key={index}
                    className="project-card h-[180px]"
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
          </section>

          {/* Recent Posts */}
          <section>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-sm uppercase tracking-widest text-gray-500">
                Recent Posts
              </h2>
              <Link
                href="/blog"
                className="flex items-center gap-1 text-sm text-gray-400 hover:text-white transition-colors group"
              >
                <span>More</span>
                <ArrowForward
                  style={{ width: "16px", height: "16px" }}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </Link>
            </div>
            <div className="space-y-3">
              {recentPosts.map((post, index) => (
                <Card key={index} className="post-card" as="a" href={post.url}>
                  <CardBody className="p-5">
                    <div className="flex items-start gap-4">
                      {/* 封面图片 */}
                      <div className="flex-shrink-0">
                        <img
                          src={post.cover}
                          alt={post.title}
                          className="w-40 h-20 object-cover rounded-lg"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-base text-gray-100 font-medium mb-1 line-clamp-2">
                          {post.title}
                        </h3>
                        <div className="flex items-center gap-2 text-xs text-gray-500">
                          <CalendarOutline
                            style={{ width: "14px", height: "14px" }}
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
