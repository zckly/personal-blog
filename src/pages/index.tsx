import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>Zachary Lee</title>
        <meta
          name="description"
          content="Personal site of Zachary Lee (Wenquai)"
        />
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
        </div>
        <div className="mb-3">
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
          I also love to teach/mentor others. I&apos;ve taught coding/AI at{" "}
          <Link
            className="text-indigo-500 underline"
            href="https://www.galvanize.com/hack-reactor/"
          >
            Hack Reactor
          </Link>
          ,{" "}
          <Link
            className="text-indigo-500 underline"
            href="https://www.thinkful.com/"
          >
            Thinkful
          </Link>
          , and{" "}
          <Link
            href="https://youtube.com/@wenquai"
            className="text-indigo-500 underline"
          >
            my YouTube channel
          </Link>
        </div>
        <div className="mb-3">
          I live in New York City with my partner and 3 cats. These days
          I&apos;m really into cooking, learning 日本語, and skateboarding.
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
