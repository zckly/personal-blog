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
          I&apos;m the founder of{" "}
          <Link
            className="text-indigo-500 underline"
            href="https://onplayground.com"
          >
            Playground Education
          </Link>
          , a research lab reimagining education in the age of generative AI.
          Previously, I&apos;ve worked as as a Data Scientist / Developer /
          Designer at places like{" "}
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
