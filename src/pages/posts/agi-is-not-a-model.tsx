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
            After working with large language models (LLMs) for the past four
            years, I have concluded that the path to Artificial General
            Intelligence (AGI) will be markedly different from conventional
            expectations. Among colleagues deeply invested in AGI, the prevalent
            belief is that a company like OpenAI or Anthropic will be the first
            to produce a model—perhaps GPT-6 or Claude 4—that meets the AGI
            threshold. The problem with this assumption is that even an
            incredibly intelligent foundation model will not suffice by itself
            to achieve AGI.
          </p>
          <p className="mb-4">
            To clarify, let's define AGI using a common example: an advanced AI
            that can autonomously fulfill a command like "make me a million
            dollars." This definition implies an AI capable of complex,
            real-world tasks. The notion is that we will eventually have a model
            powerful enough to handle such a command seamlessly. However, even
            today's most advanced models are not yet capable of this, despite
            their impressive intelligence.
          </p>
          <p className="mb-4">
            Consider an AI tasked with making a million dollars by building an
            internet business. Such an AI could theoretically analyze market
            opportunities, validate ideas with landing pages and ads, and then
            design and scale a product. This process requires not just one
            intelligent agent but a coordinated effort of specialized agents—a
            marketer, designer, and business strategist, among others. While
            theoretically feasible, the current models struggle with high error
            rates and edge cases, as seen with tools like Devon, which aims to
            write and execute code but falls short in many scenarios.
          </p>
          <p className="mb-4">
            The limitations hindering AGI today are twofold: foundational model
            intelligence and advanced prompt engineering techniques. Prompt
            engineering, often misunderstood as merely communicating with AI in
            human language, is more akin to concept engineering. It involves
            crafting unique strings or tokens that elicit expert-level responses
            from the AI. For instance, asking an AI to write a poem about an elm
            tree typically yields a generic output. However, incorporating
            few-shot prompts with high-quality examples can significantly
            enhance the result, revealing the AI's capacity to produce more
            sophisticated and nuanced content.
          </p>
          <p className="mb-4">
            Most AI engineers rely on instruction prompting, which often leads
            to mediocre or inconsistent outputs. To advance toward AGI, we need
            not only more sophisticated prompt engineering but also methods to
            distill and transfer expert decision-making processes into formats
            that LLMs can consume. This challenge underscores the complexity of
            achieving AGI.
          </p>
          <p className="mb-4">
            For example, an AGI in medicine would need to go beyond summarizing
            papers to generating new hypotheses and simulating experiments to
            find new truths. Achieving this would require detailed collaboration
            with medical experts to encode their decision-making processes into
            an agent architecture. This approach highlights that AGI won't
            emerge from a single, all-encompassing model but from specialized
            systems designed to solve specific problems.
          </p>
          <p className="mb-4">
            In summary, the path to AGI will not be a sudden breakthrough but a
            gradual accumulation of specialized intelligent applications. We
            will likely see pockets of AGI emerging in various domains, such as
            business creation or medical problem-solving, through the concerted
            efforts of startups and agent-based architectures. These
            developments will precede the advent of a general-purpose AGI,
            suggesting a future where AGI evolves from a collection of
            domain-specific intelligences.
          </p>
        </div>
      </div>
    </>
  );
}
