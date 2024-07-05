import Head from "next/head";
import { ColoredLink } from "~/components/ColoredLink";

/* eslint-disable react/no-unescaped-entities */
export default function AgiIsNotAModel() {
  return (
    <>
      <Head>
        <title>zackblog - agi is not a model</title>
      </Head>
      <div className="p-4">
        <ColoredLink href="/">home</ColoredLink>
      </div>
      <div className="window min-w-[400px]">
        <div className="title-bar"></div>
        <div className="separator"></div>
        <div className="window-pane text-sm">
          <h2 className="mb-4 text-lg font-bold">AGI is not a model</h2>
          <p className="mb-4">
            The Zuckerberg-Dwarkesh interview made me realize something: AGI
            will most likely come from the application layer rather than the
            foundation model layer.
          </p>
          <p className="mb-4">
            Once the first GPT-5 level model is released, we'll start to see
            pockets of "AGI" forming in various domains.
          </p>
          <p className="mb-4">For example:</p>
          <ul className="mb-4 list-inside list-disc">
            <li>
              GPT-5 might enable the first autonomous startup founder agent.
            </li>
            <li>
              Or an AI that can solve for all medical cases (even ones
              unforeseen).
            </li>
          </ul>
          <p className="mb-4">
            These won't come from directly interacting with the model itself,
            but rather from the systems that enable these models to plan and
            solve tasks.
          </p>
          <p className="mb-4">
            The real breakthrough will be in how we harness these powerful
            models to create specialized, task-solving AIs.
          </p>
        </div>
      </div>
    </>
  );
}
