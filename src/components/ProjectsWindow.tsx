import { ColoredLink } from "./ColoredLink";

const projects = [
  {
    title: "affirmations generator",
    href: "https://affirmations-ai.vercel.app/",
  },
  {
    title: "dark souls overlay for your screen",
    href: "https://x.com/wenquai/status/1769470640308855253",
  },
  {
    title: "a camera for learning languages",
    href: "https://youtu.be/rqF0IQJ3bnY",
  },
  {
    title: "codecademy for prompt engineering",
    href: "https://www.genschool.com",
  },
  {
    title: "ai engineering roadmap",
    href: "https://github.com/zckly/ai-engineer-roadmap",
  },
  {
    title: "storybook generator with DALL-E",
    href: "https://x.com/wenquai/status/1527312285152452608",
  },
];

export function ProjectsWindow() {
  return (
    <div className="window min-w-[360px] md:col-span-2 md:min-w-0">
      <div className="title-bar">
        <h1 className="title">projects</h1>
      </div>
      <div className="separator"></div>
      <div className="window-pane text-sm">
        <div className="flex flex-col gap-y-2">
          {projects.map((post, index) => (
            <ColoredLink key={index} href={post.href}>
              {post.title}
            </ColoredLink>
          ))}
        </div>
      </div>
    </div>
  );
}
