import { ColoredLink } from "./ColoredLink";

const blogPosts = [
  {
    title: "ai agents have a big problem",
    href: "/posts/agent-adoption",
  },
  {
    title: "the foundational shift in ai product design",
    href: "/posts/ai-first-design",
  },
  {
    title: "superlearning",
    href: "/posts/superlearning",
  },
  {
    title: "a playbook for scaling llms",
    href: "https://x.com/wenquai/status/1748016021808595242",
  },
];

export function BlogWindow() {
  return (
    <div className="window min-w-[360px] md:col-span-1 md:mt-6 md:min-w-0">
      <div className="title-bar">
        <h1 className="title">writings</h1>
      </div>
      <div className="separator"></div>
      <div className="window-pane text-sm">
        <div className="flex flex-col gap-y-2">
          {blogPosts.map((post, index) => (
            <ColoredLink key={index} href={post.href}>
              {post.title}
            </ColoredLink>
          ))}
        </div>
      </div>
    </div>
  );
}
