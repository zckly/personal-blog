/* eslint-disable react/no-unescaped-entities */
import { ColoredLink } from "./ColoredLink";

export function MainWindow() {
  return (
    <div className="window mt-6 min-w-[360px] md:col-span-2 md:min-w-0">
      <div className="title-bar">
        <h1 className="title">zack</h1>
      </div>
      <div className="separator"></div>
      <div className="window-pane text-sm">
        <div className="flex flex-col gap-y-2">
          <div>
            i'm an engineer/researcher working on interactive education at{" "}
            <ColoredLink href="https://www.anthropic.com/">
              Anthropic
            </ColoredLink>
            . i specialize in designing, building, and scaling AI-powered
            applications.
          </div>
          <div>facts about me:</div>
          <ul className="list-inside list-disc">
            <li>grew up in houston, texas</li>
            <li>
              i've been a software engineer for over 10 years, a data scientist
              for 7, and a designer for 4
            </li>
            <li>
              was founding engineer for{" "}
              <ColoredLink href="https://www.vinovest.com/">
                vinovest
              </ColoredLink>{" "}
              and <ColoredLink href="https://www.copy.ai/">copy.ai</ColoredLink>
            </li>
            <li>
              i make{" "}
              <ColoredLink href="https://wanderer.space">wanderer</ColoredLink>,
              an app that helps people visualize their potential futures (300K+
              users)
            </li>
            <li>
              i've taught coding/ai on{" "}
              <ColoredLink href="https://www.youtube.com/@wenquai">
                youtube
              </ColoredLink>
              ,{" "}
              <ColoredLink href="https://www.twitch.tv/wenquai">
                twitch
              </ColoredLink>
              , and at top{" "}
              <ColoredLink href="https://www.galvanize.com/">
                coding bootcamps
              </ColoredLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
