import { ColoredLink } from "./ColoredLink";

const blogPosts = [
  {
    title: "superlearning",
    href: "/posts/superlearning",
  },
  {
    title: "the path to agi",
    href: "/posts/agi-is-not-a-model",
  },
];

export function BlogWindow() {
  return (
    <div className="window min-w-[360px] md:col-span-1 md:min-w-0">
      <div className="title-bar">
        <h1 className="title">blog posts</h1>
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
