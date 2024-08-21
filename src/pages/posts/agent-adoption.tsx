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
      <div className="window min-w-[360px]">
        <div className="title-bar"></div>
        <div className="separator"></div>
        <div className="window-pane text-sm">
          <h2 className="mb-4 text-lg font-bold">
            AI Agents Have a Big Adoption Problem
          </h2>
          <p className="mb-4">
            The biggest challenge facing companies building AI agents isn't
            technical limitations — it's adoption. Most people simply struggle
            to incorporate an agent as their primary work interface. In other
            words, there's a mismatch between the form these AI agents take and
            the context in which they're expected to be used.
          </p>
          <p className="mb-4">
            For instance, I've had access to an AI software engineer named{" "}
            <Link
              href="https://devin.ai"
              target="_blank"
              className="text-blue-500"
            >
              Devin
            </Link>{" "}
            for a few months now. The first time I used it, I had a four-hour
            session that felt almost magical. Watching Devin automate the role
            of a software engineer was seriously impressive. I threw a few tasks
            at it — like building small ideas I had and contributing to an
            existing codebase. Devin was excellent at creating new apps from
            scratch but stumbled a bit when it came to integrating into existing
            projects. That’s not entirely Devin’s fault though — it’s not a mind
            reader, and I probably should’ve provided more detailed prompts.
            What stood out to me during that session was that I had to shift my
            mindset. To get the most out of Devin, I needed to plan my tasks
            more like a technical PM than an engineer. I distinctly remember
            feeling excited about adopting this new workflow in my daily
            routine.
          </p>
          <p className="mb-4">
            And then… I didn't. I thought about using it the next day but ended
            up skipping it to fix some urgent bugs in one of my projects. Sure,
            I could've used Devin to do it, but it would've required the extra
            effort of crafting the right prompt and monitoring the task. I
            already had all the context in my head, so it was quicker to just
            open Cursor and knock it out myself. This happened repeatedly over
            the next few days until I forgot about Devin entirely.
          </p>
          <p className="mb-4">
            I had a similar experience with{" "}
            <Link
              href="https://minion.ai"
              target="_blank"
              className="text-blue-500"
            >
              Minion
            </Link>
            , a general purpose AI agent product. Minion is an iOS app that
            allows you to command an agent to automate tasks that you would
            normally complete in a web browser, such as booking a restaurant or
            paying a parking ticket. The UX was engaging, and I enjoyed watching
            it attempt to book a restaurant for me. But I churned almost
            immediately, simply because I didn't have a pressing need for it at
            that moment. A few days later, when I needed to book a flight,
            Minion crossed my mind briefly as I started typing
            "flights.google.com" into my browser. But again, I defaulted to
            doing it manually because, one, I was used to it, and two, I had all
            the context in my head.
          </p>
          <p className="mb-4">
            So, what's the takeaway here for creators of AI agents? Stop
            treating technical issues as your core problem. The real issue lies
            in the design space — simply put, you need to bridge the gap between
            form and context. Agents need to either be seamlessly integrated
            into the tools people already use or adopt a form factor that
            closely aligns with the "analog" methods users are comfortable with
            today.
          </p>
          <p className="mb-4">
            Cursor is a great example — it's an AI-powered code editor, and they
            recently rolled out their own autonomous agent, Composer. I use it
            all the time because it's built right into my code editor.
            Crucially, Cursor isn't marketed as an "agent product"; it just has
            an agent as a feature. That distinction might be the key to
            unlocking broader adoption.
          </p>
        </div>
      </div>
    </>
  );
}