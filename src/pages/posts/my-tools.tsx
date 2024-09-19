/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import { ColoredLink } from "~/components/ColoredLink";

const tools = [
  {
    name: "Cursor",
    url: "https://cursor.sh",
  },
  {
    name: "WezTerm",
    url: "https://wezfurlong.org/wezterm/",
  },
  {
    name: "NeoVim (with Cursor and WezTerm)",
    url: "https://neovim.io/",
  },
  {
    name: "Bear",
    url: "https://bear.app/",
  },
  {
    name: "Arc (The Browser Company)",
    url: "https://arc.net/",
  },
  {
    name: "Claude",
    url: "https://claude.ai/",
  },
  {
    name: "Perplexity",
    url: "https://www.perplexity.ai/",
  },
  {
    name: "Superhuman",
    url: "https://superhuman.com/",
  },
  {
    name: "Raycast",
    url: "https://www.raycast.com/",
  },
];

/* eslint-disable react/no-unescaped-entities */
export default function MyTools() {
  return (
    <>
      <Head>
        <title>zackblog - my tools</title>
      </Head>
      <div className="p-4">
        <ColoredLink href="/">home</ColoredLink>
      </div>
      <div className="window mx-auto min-w-[360px] max-w-2xl">
        <div className="title-bar"></div>
        <div className="separator"></div>
        <div className="window-pane text-sm">
          <h2 className="mb-4 text-lg font-bold">my tools</h2>
          <p className="mb-4">
            Below is a list of tools that I use on a daily basis.
          </p>
          <ul>
            {tools.map((tool) => (
              <li key={tool.name}>
                <ColoredLink href={tool.url}>{tool.name}</ColoredLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
