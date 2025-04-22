/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import Link from "next/link";
import { ColoredLink } from "~/components/ColoredLink";

/* eslint-disable react/no-unescaped-entities */
export default function AgentAdoption() {
  return (
    <>
      <Head>
        <title>zackblog - AI Agents Have a Big Adoption Problem</title>
      </Head>
      <div className="p-4">
        <ColoredLink href="/">home</ColoredLink>
      </div>
      <div className="window mx-auto min-w-[360px] max-w-2xl">
        <div className="title-bar"></div>
        <div className="separator"></div>
        <div className="window-pane text-sm">
          <h2 className="mb-4 text-lg font-bold">
            AI Agents Have a Big Problem
          </h2>
          <p className="mb-4">
            AI agent companies face a critical challenge: adoption. Despite their
            impressive capabilities, most people struggle to make agents part of
            their daily workflow. The problem isn't the technology — it's the
            mismatch between how these agents are designed and how we actually
            work.
          </p>
          <p className="mb-4">
            Take{" "}
            <Link
              href="https://devin.ai"
              target="_blank"
              className="text-blue-500"
            >
              Devin
            </Link>, 
            the AI software engineer I've been using for months. My first
            four-hour session felt like magic. I watched it automate tasks,
            build small projects from scratch, and attempt to contribute to
            existing codebases. While it excelled at greenfield development, it
            struggled with legacy code integration — but that wasn't Devin's
            fault. I needed to provide better prompts and context.
          </p>
          <p className="mb-4">
            The experience forced a fascinating mindset shift. Using Devin, I
            wasn't an engineer anymore — I was a technical product manager
            commanding a team of junior developers. This new workflow felt
            genuinely exciting.
          </p>
          <p className="mb-4">
            But then... nothing changed. The next day, I needed to fix urgent
            bugs in my project. I could've used Devin, but that meant crafting
            the perfect prompt and monitoring its progress. With the solution
            already clear in my head, it was faster to open Cursor and just
            fix it myself. This pattern repeated until I forgot about Devin
            entirely.
          </p>
          <p className="mb-4">
            {" "}
            <Link
              href="https://minion.ai"
              target="_blank"
              className="text-blue-500"
            >
              Minion
            </Link>
            , a general-purpose AI agent, followed the same arc. This iOS app
            promised to automate web tasks like restaurant bookings and parking
            tickets. Watching it book a table was entertaining, but I churned
            immediately — I didn't need it right then. Days later, while booking
            a flight, Minion crossed my mind as I typed "flights.google.com."
            But habit won: I was used to doing it manually, and I already knew
            exactly what I wanted.
          </p>
          <p className="mb-4">
            Here's the takeaway for AI agent builders: fix the fit between form
            and function. Agents need to either integrate seamlessly into
            existing tools or mirror our current workflows.
          </p>
          <p className="mb-4">
            Cursor gets this right. It's an AI code editor with Composer, their
            autonomous agent, built in. I use it constantly because it lives
            where I work. Crucially, Cursor doesn't position itself as an
            "agent product" — the agent is just a feature. This might be the
            key to wider adoption.
          </p>
          <h3 className="mb-2 mt-6 text-md font-bold">Update (April 2025)</h3>
          <p className="mb-4">
            The market has proven my thesis right. Devin ended up pivoting to 
            be more similar to Cursor and Windsurf — focusing on integrating
            their agent directly into developers' existing workflows rather
            than being a standalone product. Meanwhile, Minion has shut down
            entirely, unable to overcome the adoption challenges of being a
            disconnected, general-purpose agent. The future of AI agents is
            clearly in seamless integration, not standalone products.
          </p>
        </div>
      </div>
    </>
  );
}