import Head from "next/head";
import { ColoredLink } from "~/components/ColoredLink";

/* eslint-disable react/no-unescaped-entities */
export default function AgiIsNotAModel() {
  return (
    <>
      <Head>
        <title>zackblog - the path to agi</title>
      </Head>
      <div className="p-4">
        <ColoredLink href="/">home</ColoredLink>
      </div>
      <div className="window min-w-[360px]">
        <div className="title-bar"></div>
        <div className="separator"></div>
        <div className="window-pane text-sm">
          <h2 className="mb-4 text-lg font-bold">The Path to AGI</h2>
          <p className="mb-4">
            After four years of working with large language models (LLMs), I've
            concluded that the path to Artificial General Intelligence (AGI)
            will differ significantly from common expectations.
          </p>
          <p className="mb-4">
            While many believe a company like OpenAI or Anthropic will produce
            an AGI-capable model (e.g., GPT-6 or Claude 4), even an incredibly
            intelligent foundation model alone won't suffice for AGI.
          </p>
          <p className="mb-4">
            Consider the common AGI example: an AI that can autonomously "make
            me a million dollars." This implies an AI capable of complex,
            real-world tasks, which current models struggle with despite their
            intelligence.
          </p>
          <p className="mb-4">The limitations hindering AGI are twofold:</p>
          <ul className="mb-4 list-inside list-disc">
            <li>Foundational model intelligence</li>
            <li>Advanced prompt engineering techniques</li>
          </ul>
          <p className="mb-4">
            Prompt engineering, often misunderstood, is more akin to concept
            engineering. It involves crafting unique prompts that elicit
            expert-level responses from AI.
          </p>
          <p className="mb-4">
            The path to AGI will likely be a gradual accumulation of specialized
            intelligent applications. We'll see pockets of AGI emerging in
            various domains through the efforts of startups and agent-based
            architectures.
          </p>
          <p className="mb-4">
            In summary, AGI won't emerge from a single, all-encompassing model
            but from specialized systems designed to solve specific problems
            across different domains.
          </p>
        </div>
      </div>
    </>
  );
}
