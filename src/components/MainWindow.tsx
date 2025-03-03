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
            i'm a researcher/designer/engineer at{" "}
            <ColoredLink href="https://www.anthropic.com/">
              Anthropic
            </ColoredLink>{" "}
            building AI systems that enhance human capabilities.
          </div>
          <div>facts about me:</div>
          <ul className="list-inside list-disc">
            <li>grew up in houston, texas</li>
            <li>
              previously I was the founder of an AI x education research lab
              called{" "}
              <ColoredLink href="https://onplayground.com">
                playground education
              </ColoredLink>
            </li>
            <li>
              i made{" "}
              <ColoredLink href="https://wanderer.space">wanderer</ColoredLink>,
              an app that helps people visualize their potential futures (400K+
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
