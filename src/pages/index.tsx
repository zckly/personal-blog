import { BlogWindow } from "~/components/BlogWindow";
import { MainWindow } from "~/components/MainWindow";
import { ProjectsWindow } from "~/components/ProjectsWindow";
import { SocialWindow } from "~/components/SocialWindow";

export default function Home() {
  return (
    <div className="mx-auto max-w-5xl md:grid md:grid-cols-3">
      <MainWindow />
      <BlogWindow />
      <ProjectsWindow />
      <SocialWindow />
    </div>
  );
}
