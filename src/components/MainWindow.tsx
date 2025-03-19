/* eslint-disable react/no-unescaped-entities */
import { ColoredLink } from "./ColoredLink";
import { ThemeToggle } from "./ThemeToggle";

export function MainWindow() {
  return (
    <div className="window min-w-[400px] md:col-span-2 md:min-w-0">
      <div className="title-bar flex items-center justify-between">
        <div className="w-10"></div>
        <h1 className="title">zack</h1>
        <div className="-mr-2 flex items-center">
          <ThemeToggle />
        </div>
      </div>
      <div className="separator"></div>
      <div className="window-pane text-sm">
        <div className="flex flex-col gap-y-2">
          <div>
            I'm a Member of Technical Staff at{" "}
            <ColoredLink href="https://www.anthropic.com/">
              Anthropic
            </ColoredLink>
            , exploring how AI can transform educational experiences.
          </div>
          <div>Facts about me:</div>
          <ul className="list-inside list-disc">
            <li>
              Previously I was the founder of an AI x education research lab
              called{" "}
              <ColoredLink href="https://onplayground.com">
                playground education
              </ColoredLink>
            </li>
            <li>
              I made{" "}
              <ColoredLink href="https://wanderer.space">wanderer</ColoredLink>,
              an app that helps people visualize their potential futures
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
