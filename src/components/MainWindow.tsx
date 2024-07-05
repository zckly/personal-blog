/* eslint-disable react/no-unescaped-entities */
import { ColoredLink } from "./ColoredLink";

export function MainWindow() {
  return (
    <div className="window min-w-[400px] md:col-span-2 md:min-w-0">
      <div className="title-bar">
        <h1 className="title">zack</h1>
      </div>
      <div className="separator"></div>
      <div className="window-pane text-sm">
        <div className="flex flex-col gap-y-2">
          <div>
            i'm a technology generalist living in nyc. i specialize in
            designing, building, and scaling llm-powered applications.
          </div>
          <div>facts about me:</div>
          <ul className="list-inside list-disc">
            <li>grew up in houston, texas</li>
            <li>
              i've been a software engineer for over 10 years, a data scientist
              for 7, and a designer for 4
            </li>
            <li>was founding engineer for two companies</li>
            <li>
              i make and run{" "}
              <ColoredLink href="https://wanderer.space">Wanderer</ColoredLink>,
              an app that helps people visualize their potential futures
            </li>
            <li>
              i've taught coding/AI on{" "}
              <ColoredLink href="https://www.youtube.com/">Youtube</ColoredLink>
              , <ColoredLink href="https://www.twitch.tv/">Twitch</ColoredLink>,
              and at top{" "}
              <ColoredLink href="https://www.coursereport.com/best-coding-bootcamps">
                coding bootcamps
              </ColoredLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
