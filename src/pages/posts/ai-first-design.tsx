/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import { ColoredLink } from "~/components/ColoredLink";

/* eslint-disable react/no-unescaped-entities */
export default function AiFirstDesign() {
  return (
    <>
      <Head>
        <title>zackblog - you're probably designing ai products wrong</title>
      </Head>
      <div className="p-4">
        <ColoredLink href="/">home</ColoredLink>
      </div>
      <div className="window mx-auto min-w-[360px] max-w-2xl">
        <div className="title-bar"></div>
        <div className="separator"></div>
        <div className="window-pane text-sm">
          <h2 className="mb-4 text-lg font-bold">
            You're Probably Designing AI Products Wrong
          </h2>
          <p className="mb-4">
            The design process for building AI-first products, especially those
            using LLMs, is significantly different from traditional product
            design. In the past, the design process was linear and looked
            something like this:
          </p>
          <img
            className="mx-auto max-w-lg"
            src="/normal-product-design.jpeg"
            alt="ai-first-design-process"
          />
          <ol className="mb-4 list-inside list-decimal">
            <li>
              The design team would research user needs and current design
              issues
            </li>
            <li>
              They would create low-fidelity and high-fidelity mockups and
              wireframes
            </li>
            <li>These designs would be handed off to developers to build</li>
          </ol>
          <p className="mb-4">
            However, when building AI-first products using LLMs, the process
            should look something more like this:
          </p>
          <img
            className="mx-auto max-w-lg"
            src="/ai-product-design.jpeg"
            alt="ai-first-design-process"
          />
          <p className="mb-4">
            There are now three key components: <strong>design</strong>,{" "}
            <strong>development</strong>, and <strong>research</strong>. The
            research component often involves testing numerous iterations of
            prompts, parameters, and models to create the AI system needed for
            the product.
          </p>
          <p className="mb-4">
            Importantly, the design process is no longer linear, but cyclical.
            It starts with design, perhaps in a tool like Figma or Sketch, but
            equally important in this early phase is scoping out the research
            aspect. Sometimes, after building the front-end and back-end around
            the experience, the prompts or language model calls may not perform
            as expected when applied to real-world use cases.
          </p>
          <p className="mb-4">
            To illustrate this challenge, consider a hypothetical flight
            planning app that uses an LLM to search and summarize flight
            options. Can the LLM accurately parse and understand data from
            various flight aggregator sites? How will the app handle cases where
            the LLM misinterprets the data or provides incorrect summaries? What
            prompts and parameters will yield the most useful and relevant
            results for users? Answering these questions requires close
            collaboration between design and research teams to test and refine
            the AI capabilities in the context of the desired user experience.
          </p>
          <p className="mb-4">
            Therefore, in the early phases, research and design need to happen
            in tandem, with close communication between these teams. Ideally,
            the same person or team would handle both research and design, but
            since these require different skill sets, they are often separate
            units that need to work closely together.
          </p>
          <p className="mb-4">
            When a new design innovation is proposed, it must be validated by
            research to determine if it is feasible with the current AI
            capabilities. The design, development, and research cycle is tightly
            intertwined, resembling a jumbled ball of yarn more than a clean
            circle or straight line.
          </p>
          <p className="mb-4">
            For those building an AI-first product and trying to innovate on the
            user interface and overall experience, it is imperative to have
            strong collaboration and frequent communication between the
            research, development, and design teams. This can save significant
            time by catching issues early, before investing heavily in
            prototypes or prompts that may not meet the business requirements in
            the real world.
          </p>
          <h3 className="text-md mb-4 font-bold">
            Potential Challenges and Solutions
          </h3>
          <p className="mb-4">
            Shifting to a cyclical, research-heavy design process poses some
            challenges:
          </p>
          <ul className="mb-4 list-inside list-disc">
            <li>
              <strong>Skill gaps:</strong> Designers may lack experience with AI
              systems, while researchers may be unfamiliar with UX principles.
              Cross-training and hiring for interdisciplinary skills can help
              bridge these gaps.
            </li>
            <li>
              <strong>Longer timelines:</strong> The iterative nature of the
              process may lengthen product development timelines. Setting clear
              priorities and managing stakeholder expectations is crucial.
            </li>
            <li>
              <strong>Balancing innovation and feasibility:</strong> Bold design
              ideas may push the boundaries of current AI capabilities. Teams
              need to find a balance between innovation and what's technically
              feasible.
            </li>
          </ul>
          <h3 className="text-md mb-4 font-bold">Broader Implications</h3>
          <p className="mb-4">
            The shift towards AI-first design thinking extends beyond individual
            products:
          </p>
          <ul className="mb-4 list-inside list-disc">
            <li>
              <strong>Organizational structures:</strong> Companies may need to
              rethink team structures and incentives to foster closer
              collaboration between design, development, and research.
            </li>
            <li>
              <strong>Design education:</strong> Design curricula will need to
              evolve to include AI concepts and hands-on experience with LLMs
              and other AI technologies.
            </li>
            <li>
              <strong>Ethical considerations:</strong> As AI becomes more
              integral to product design, teams must grapple with ethical
              questions around data use, bias, and transparency.
            </li>
          </ul>
          <p className="mb-4">
            Embracing a cyclical, collaborative approach to design is not just a
            matter of process, but a fundamental shift in how we think about
            building products in an AI-driven world.
          </p>
        </div>
      </div>
    </>
  );
}
