/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import { ColoredLink } from "~/components/ColoredLink";

/* eslint-disable react/no-unescaped-entities */
export default function AiFirstDesign() {
  return (
    <>
      <Head>
        <title>zackblog - the foundational shift in ai product design</title>
      </Head>
      <div className="p-4">
        <ColoredLink href="/">home</ColoredLink>
      </div>
      <div className="window mx-auto min-w-[360px] max-w-2xl">
        <div className="title-bar"></div>
        <div className="separator"></div>
        <div className="window-pane text-sm">
          <h2 className="mb-4 text-lg font-bold">
            The Foundational Shift in AI Product Design
          </h2>
          <p className="mb-4">
            The best AI products I've seen aren't the ones with perfect designs 
            handed to engineering. They're born from a messy, iterative dance 
            between what's beautiful and what's possible. Traditional design 
            assumptions will kill your AI-first product before it launches.
          </p>
          <p className="mb-4">
            In the pre-LLM era, we treated design like assembly-line manufacturing:
          </p>
          <img
            className="mx-auto max-w-lg"
            src="/normal-product-design.jpeg"
            alt="ai-first-design-process"
          />
          <ol className="mb-4 list-inside list-decimal">
            <li>
              Designers conducted sterile user research, divorced from technical constraints
            </li>
            <li>
              Pixel-perfect mockups cascaded through approval chains
            </li>
            <li>Developers inherited precise specifications to implement</li>
          </ol>
          <p className="mb-4">
            This approach doesn't just fail for AI products—it fails spectacularly. 
            The gap between what designers envision and what LLMs can deliver is often 
            an unbridgeable chasm. Here's what actually works:
          </p>
          <img
            className="mx-auto max-w-lg"
            src="/ai-product-design.jpeg"
            alt="ai-first-design-process"
          />
          <p className="mb-4">
            The winning formula isn't a process—it's a trinity: <strong>design</strong>,{" "}
            <strong>development</strong>, and <strong>LLM research</strong>. That last piece 
            is where most teams stumble. They underestimate how much time they'll spend 
            wrestling with prompts, temperature settings, and token limits until the model 
            actually behaves as needed.
          </p>
          <p className="mb-4">
            Think of it like jazz improvisation rather than classical composition. You might 
            start with a clean design in Figma, but within hours you'll discover your elegant 
            interface crumbles when the LLM hallucinates, runs too slow, or outputs garbage 
            80% of the time. The real work begins when theory meets reality.
          </p>
          <p className="mb-4">
            Case in point: A startup I know spent three months designing an AI flight 
            assistant. Beautiful UI, flawless flows, incredible user testing. Launch day? 
            The LLM confused layovers with direct flights, invented airports that don't 
            exist, and couldn't handle time zones. Their recovery strategy? Pivot to a 
            1000-iteration prompt engineering sprint, while simultaneously redesigning 
            every interface to account for uncertainty markers, confidence scores, and 
            graceful fallbacks.
          </p>
          <p className="mb-4">
            The solution demands a cultural shift. Your researchers need to sit beside 
            designers, not in a separate room. Your prompt engineers must understand 
            user psychology. Your designers should know the difference between zero-shot 
            and few-shot learning. The dream is one person who embodies all three skills—
            but that's rarer than a unicorn with a CS degree.
          </p>
          <p className="mb-4">
            Every "brilliant" design innovation must survive the harsh reality of LLM 
            limitations. "Wouldn't it be cool if the AI could..." starts a hundred 
            meetings, but only those that pass the feasibility gauntlet make it to 
            production. The process isn't a clean flowchart—it's more like quantum 
            entanglement where touching one element instantly affects all others.
          </p>
          <p className="mb-4">
            The teams that win aren't the ones with the best designers or the smartest 
            engineers or the most advanced models. They're the ones that collapse the 
            walls between disciplines. Run daily standups with designers, engineers, and 
            AI researchers in the same room. Prototype with real LLMs, not mock data. 
            Fail fast, pivot faster, and never ship an AI feature without stress-testing 
            it against the weird, messy, unexpected ways humans actually use products.
          </p>
          <h3 className="text-md mb-4 font-bold">
            The Painful Realities Nobody Tells You
          </h3>
          <p className="mb-4">
            Making this shift will hurt. Here's why:
          </p>
          <ul className="mb-4 list-inside list-disc">
            <li>
              <strong>Everyone is a specialist:</strong> Your designers can't read JSON 
              outputs. Your engineers don't know what "above the fold" means. Your AI 
              researchers think UI stands for "Unnecessary Interface." Throw them in a 
              room together and watch the sparks fly.
            </li>
            <li>
              <strong>Time estimates are lies:</strong> That two-week sprint will become 
              two months of prompt engineering purgatory. Your PM's Gantt chart looks 
              like abstract art. Learn to embrace the chaos timeline.
            </li>
            <li>
              <strong>Features die daily:</strong> That revolutionary AI-powered feature 
              everyone loved? It works 40% of the time. Get comfortable killing your 
              darlings, or better yet, scaling them back to what actually works consistently.
            </li>
          </ul>
          <h3 className="text-md mb-4 font-bold">The Industry-Wide Earthquake</h3>
          <p className="mb-4">
            This isn't just about your product team—it's a tectonic shift in tech:
          </p>
          <ul className="mb-4 list-inside list-disc">
            <li>
              <strong>The org chart is dead:</strong> Hierarchical design teams? That's 
              2019 thinking. The future belongs to hybrid squads where designers write 
              prompts, engineers conduct user research, and AI specialists obsess over 
              microinteractions.
            </li>
            <li>
              <strong>Design schools are obsolete:</strong> Teaching Figma without teaching 
              prompt engineering is like teaching filmmaking without cameras. The next 
              generation needs to understand both pixels and parameters, both wireframes 
              and weight matrices.
            </li>
            <li>
              <strong>Ethics becomes core:</strong> Every design decision cascades through 
              training data biases, output hallucinations, and privacy implications. The 
              line between UX designer and ethics consultant blurs by the day.
            </li>
          </ul>
          <p className="mb-4">
            The companies that survive this transition won't just adapt their processes—
            they'll reinvent their DNA. Those still shipping waterfall-designed AI 
            features in 2025 will be as relevant as companies shipping Flash websites 
            in 2015. The future belongs to the interdisciplinary, the flexible, and 
            the radically collaborative.
          </p>
        </div>
      </div>
    </>
  );
}
