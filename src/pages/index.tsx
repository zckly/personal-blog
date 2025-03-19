import { useState, useCallback } from "react";
import { BlogWindow } from "~/components/BlogWindow";
import { MainWindow } from "~/components/MainWindow";
import { ProjectsWindow } from "~/components/ProjectsWindow";
import { SocialWindow } from "~/components/SocialWindow";
import { DraggableWindow } from "~/components/DraggableWindow";

export default function Home() {
  const [windowOrder, setWindowOrder] = useState([
    "main-window",
    "blog-window",
    "projects-window",
    "social-window",
  ]);

  const bringToFront = useCallback((windowId: string) => {
    setWindowOrder((prev) => {
      const newOrder = prev.filter((id) => id !== windowId);
      return [...newOrder, windowId];
    });
  }, []);

  const getZIndex = (windowId: string) => {
    const index = windowOrder.indexOf(windowId);
    return 10 + index * 10;
  };

  return (
    <div className="min-h-screen w-full dark:bg-[#1a1a2e]">
      <div className="relative mx-auto min-h-screen overflow-x-hidden pb-40 pt-4">
        <DraggableWindow
          initialWidth={450}
          initialHeight={300}
          responsivePosition={{
            desktop: { x: 250, y: 50 },
            tablet: { x: 150, y: 30 },
            mobile: { x: 10, y: 10 },
          }}
          responsiveSize={{
            desktop: { width: 450, height: 300 },
            tablet: { width: 400, height: 280 },
            mobile: { width: 300, height: 280 },
          }}
          onBringToFront={() => bringToFront("main-window")}
          style={{ zIndex: getZIndex("main-window") }}
        >
          <MainWindow />
        </DraggableWindow>

        <DraggableWindow
          initialWidth={360}
          initialHeight={350}
          responsivePosition={{
            desktop: { x: 820, y: 80 },
            tablet: { x: 400, y: 50 },
            mobile: { x: 10, y: 300 },
          }}
          responsiveSize={{
            desktop: { width: 360, height: 350 },
            tablet: { width: 350, height: 330 },
            mobile: { width: 300, height: 280 },
          }}
          onBringToFront={() => bringToFront("blog-window")}
          style={{ zIndex: getZIndex("blog-window") }}
        >
          <BlogWindow />
        </DraggableWindow>

        <DraggableWindow
          initialWidth={400}
          initialHeight={400}
          responsivePosition={{
            desktop: { x: 350, y: 350 },
            tablet: { x: 150, y: 400 },
            mobile: { x: 10, y: 590 },
          }}
          responsiveSize={{
            desktop: { width: 400, height: 400 },
            tablet: { width: 380, height: 380 },
            mobile: { width: 300, height: 280 },
          }}
          onBringToFront={() => bringToFront("projects-window")}
          style={{ zIndex: getZIndex("projects-window") }}
        >
          <ProjectsWindow />
        </DraggableWindow>

        <DraggableWindow
          initialWidth={300}
          initialHeight={300}
          responsivePosition={{
            desktop: { x: 950, y: 360 },
            tablet: { x: 400, y: 450 },
            mobile: { x: 10, y: 880 },
          }}
          responsiveSize={{
            desktop: { width: 300, height: 300 },
            tablet: { width: 300, height: 300 },
            mobile: { width: 300, height: 280 },
          }}
          onBringToFront={() => bringToFront("social-window")}
          style={{ zIndex: getZIndex("social-window") }}
        >
          <SocialWindow />
        </DraggableWindow>
      </div>
    </div>
  );
}
