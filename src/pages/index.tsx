import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>Zachary Lee</title>
        <meta name="description" content="Personal site of Zachary Lee" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest"></link>
      </Head>
      <main>
        <h3 className="mb-6 text-2xl font-bold">Hi! I&apos;m Zack 👋</h3>
        <div className="mb-3">
          Founder and CEO of{" "}
          <Link
            className="text-indigo-500 underline"
            href="https://onplayground.com"
          >
            Playground Education
          </Link>
          , an AI research lab reimagining consumer education in the age of
          large language models. Was previously a Data Scientist / AI Engineer
          at places like{" "}
          <Link className="text-indigo-500 underline" href="https://copy.ai">
            CopyAI
          </Link>
          ,{" "}
          <Link
            className="text-indigo-500 underline"
            href="https://vinovest.co"
          >
            Vinovest
          </Link>
          , and{" "}
          <Link className="text-indigo-500 underline" href="https://indeed.com">
            Indeed.
          </Link>
        </div>
        <div className="mb-3">
          I write about LLMs, startups, and education:
          <ul className="list-inside list-disc">
            <li>
              <Link
                className="text-indigo-500 underline"
                href="/posts/llms-and-frameworks"
              >
                Replacing experts with large language models
              </Link>
            </li>
          </ul>
        </div>

        <div className="mb-3">
          I make fun products that help people learn:
          <ul className="list-inside list-disc">
            <li>
              <Link
                className="text-indigo-500 underline"
                href="https://withabstract.com"
              >
                <span className="font-semibold">Abstract</span> - daily
                summaries of the hottest research papers
              </Link>
            </li>
            <li>
              <Link
                className="text-indigo-500 underline"
                href="https://withartisan.com"
              >
                <span className="font-semibold">Artisan</span> - an AI-powered
                personal trainer for self-guided learners
              </Link>
            </li>
            <li>
              <Link
                className="text-indigo-500 underline"
                href="https://www.youtube.com/watch?v=ujOuXpvTss0"
              >
                <span className="font-semibold">My web dev bootcamp</span> - a
                free modern web development bootcamp on Youtube
              </Link>
            </li>
          </ul>
        </div>
        <div className="mb-3">
          You can find me on{" "}
          <Link
            className="text-indigo-500 underline"
            href="https://twitter.com/wenquai"
          >
            Twitter
          </Link>
          ,{" "}
          <Link
            className="text-indigo-500 underline"
            href="https://instagram.com/wenquai"
          >
            Instagram
          </Link>
          ,{" "}
          <Link
            className="text-indigo-500 underline"
            href="https://github.com/zckly"
          >
            Github
          </Link>{" "}
          and{" "}
          <Link
            className="text-indigo-500 underline"
            href="https://linkedin.com/in/zckly"
          >
            LinkedIn
          </Link>
          .
        </div>
      </main>
    </>
  );
}
