import { BlogWindow } from "~/components/BlogWindow";
import { MainWindow } from "~/components/MainWindow";
import { ProjectsWindow } from "~/components/ProjectsWindow";
import { SocialWindow } from "~/components/SocialWindow";

export default function Home() {
  return (
    <div className="my-6 md:grid md:grid-cols-3">
      <MainWindow />
      <BlogWindow />
      <ProjectsWindow />
      <SocialWindow />
    </div>
  );
}
