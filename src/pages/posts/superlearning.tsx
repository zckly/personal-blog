import Head from "next/head";
import { ColoredLink } from "~/components/ColoredLink";

/* eslint-disable react/no-unescaped-entities */
export default function Superlearning() {
  return (
    <>
      <Head>
        <title>zackblog - superlearning</title>
      </Head>
      <div className="p-4">
        <ColoredLink href="/">home</ColoredLink>
      </div>
      <div className="window mx-auto min-w-[360px] max-w-2xl">
        <div className="title-bar"></div>
        <div className="separator"></div>
        <div className="window-pane text-sm">
          <h2 className="mb-4 text-lg font-bold">
            The Rise of Superlearning Apps in AI x EdTech
          </h2>
          <p className="mb-4 italic">nb: this post is a work in progress.</p>
          <p className="mb-4">
            While many AI EdTech solutions focus on automating busywork or
            adapting to traditional educational frameworks, a new category is
            emerging: "superlearning" apps. These aim to accelerate human
            learning by 10x, targeting users with urgent needs to master new
            domains.
          </p>
          <p className="mb-4">Two notable examples:</p>
          <ul className="mb-4 list-inside list-disc">
            <li>
              Speak: Language learning app focusing on active speaking practice.
              Found product-market fit in South Korea, where English fluency is
              highly valued.
            </li>
            <li>
              Synaptiq: AI-powered platform for medical students. Used in 220+
              medical schools across 85 countries, growing 110%
              month-over-month.
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
