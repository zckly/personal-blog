import Head from "next/head";
import { ColoredLink } from "~/components/ColoredLink";

/* eslint-disable react/no-unescaped-entities */
export default function AgiIsNotAModel() {
  return (
    <>
      <Head>
        <title>zackblog - agi will emerge in pieces, not a big bang</title>
      </Head>
      <div className="p-4">
        <ColoredLink href="/">home</ColoredLink>
      </div>
      <div className="window mx-auto min-w-[360px] max-w-2xl">
        <div className="title-bar"></div>
        <div className="separator"></div>
        <div className="window-pane text-sm">
          <h2 className="mb-4 text-lg font-bold">You're Waiting for the Wrong AGI</h2>
          <p className="mb-4">
            Everyone's waiting for the messiah model—GPT-6, Claude 4, some mythical 
            architecture that finally "achieves" AGI. They're dreaming of a 
            foundation model so powerful it can do everything from curing cancer 
            to writing symphonies to running multinational corporations.
          </p>
          <p className="mb-4">
            After four years in the language model trenches, I'm convinced they're 
            looking in the wrong place. AGI won't arrive as a single breakthrough. 
            It's already emerging piece by piece, domain by domain, in ways that 
            will upend the AI landscape before the foundation model researchers 
            even realize the game has changed.
          </p>
          <p className="mb-4">
            Take Sam Altman's AGI definition: a system that can reliably execute 
            commands like "make me a million dollars." The foundation model faithful 
            believe we need to wait years for GPT-6 to master the complex reasoning 
            required for autonomous wealth generation.
          </p>
          <p className="mb-4">
            But here's the secret the big labs don't want you to know: you can build 
            this <span className="italic">right now</span>. Not with better models, 
            but with better engineering. Not with more parameters, but with more 
            prompting finesse. The AGI isn't in the model—it's in the orchestration.
          </p>
          <p className="mb-4">
            Don't believe me? Here's an autonomous startup engine I hacked together 
            in two weeks using vanilla Claude 3 and GPT-4. Nothing fancy—just 
            ruthlessly practical prompt engineering:
          </p>
          <video
            width="600"
            height="400"
            controls
            loop
            preload="auto"
            className="mx-auto my-8 rounded-lg shadow-lg"
          >
            <source src="/omni-demo.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <p>
            A fully-autonomous startup founder could be accomplished by training
            an agent that specializes in the strategy, design, engineering, and
            marketing of internet businesses. Given the command to make a
            million dollars, this agent could work backwards to identify
            promising markets and opportunities, validate them using landing
            pages and ads, and then design, build, and scale a product
            automatically. It's basically a team of autonomous agents: a
            developer, a marketer, a designer, and a business strategist all
            working together towards a common goal.
          </p>
          <p className="my-4">
            However, the current limitation lies in the{" "}
            <span className="font-bold">high error rate</span> and{" "}
            <span className="font-bold">inability to handle edge cases</span>.
            We see this challenge even with existing software engineering agents
            like <ColoredLink href="https://devin.ai/">Devin</ColoredLink> that
            can write and execute code. Despite software engineering being a lot
            easier to solve than building a successful business, Devin and its
            compatriots still struggle with many edge cases users present.
          </p>
          <p className="mb-4">
            Two main factors limit our current ability to build AGI: the
            intelligence of underlying foundational models and the
            sophistication of prompt engineering techniques. Prompt engineering
            is more than just conversing with AI; it's about concept engineering
            – finding unique strings or tokens that evoke expert-level responses
            from the AI.
          </p>
          <p className="mb-4">
            For instance, when asking an AI to write a poem about an elm tree
            without additional context, the result is pretty...generic and
            average. However, by including a few-shot prompt with a diverse
            corpus of well-written poems, the AI's output improves tenfold. This
            improvement occurs because the language model picks up on tacit
            concepts in the expert prompt, leading to more expert output.
          </p>
          <p className="mb-4">
            Unfortunately, most AI engineers I've met rely solely on instruction
            prompting rather than few-shot prompting, often resulting in
            mediocre or inconsistent outcomes. Advancing prompt engineering
            involves not only understanding which concepts evoke expert
            responses but also learning how to distill and transfer expert
            decision-making processes into a format consumable by language
            models.
          </p>
          <p className="mb-4">
            Consider the challenge of building an AGI in medicine – one that
            goes beyond summarizing papers to simulating new experiments and
            generating novel hypotheses. Simply waiting for more advanced models
            like GPT-5 or Claude 4 is unlikely to solve this problem due to the
            vast amount of context and specialized tools required. Instead,
            partnering with multiple doctors to understand their decision-making
            processes and translating this into a detailed agent architecture
            would be a more effective approach.
          </p>
          <p className="mb-4">
            This perspective suggests that AGI will not emerge suddenly as a
            single, all-encompassing model. Rather, we're likely to see pockets
            of AGI form in specific areas as the next generation of language
            models (GPT-5 or Claude 4 level) emerges and more companies build
            intelligent applications around them. Startups focusing on creating
            businesses or solving medical issues, if designed and implemented
            correctly, may achieve domain-specific AGI before major AI research
            companies produce a general AGI.
          </p>
          <p className="mb-4">
            In conclusion, the path to AGI will likely be gradual and
            domain-specific, driven by advances in both foundational models and
            sophisticated prompt engineering techniques, rather than a sudden
            breakthrough in general artificial intelligence.
          </p>
        </div>
      </div>
    </>
  );
}
