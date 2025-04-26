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
            research engineer at{" "}
            <ColoredLink href="https://www.anthropic.com/">
              Anthropic
            </ColoredLink>
            , shaping how AI amplifies human potential. based in new york city.
          </div>
          <ul className="list-inside list-disc">
            <li>
              founded{" "}
              <ColoredLink href="https://onplayground.com">
                playground education
              </ColoredLink>
              , an AI research lab exploring the future of learning
            </li>
            <li>
              built{" "}
              <ColoredLink href="https://wanderer.space">wanderer</ColoredLink>,
              a life-path visualization tool
            </li>
            <li>
              taught thousands to code through{" "}
              <ColoredLink href="https://www.youtube.com/@wenquai">
                youtube
              </ColoredLink>
              ,{" "}
              <ColoredLink href="https://www.twitch.tv/wenquai">
                twitch
              </ColoredLink>
              , and at{" "}
              <ColoredLink href="https://www.galvanize.com/">
                galvanize
              </ColoredLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
