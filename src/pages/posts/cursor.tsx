/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import { ColoredLink } from "~/components/ColoredLink";

/* eslint-disable react/no-unescaped-entities */
export default function Cursor() {
  return (
    <>
      <Head>
        <title>zackblog - cursor</title>
      </Head>
      <div className="p-4">
        <ColoredLink href="/">home</ColoredLink>
      </div>
      <div className="window min-w-[360px]">
        <div className="title-bar"></div>
        <div className="separator"></div>
        <div className="window-pane text-sm">
          <h2 className="mb-4 text-lg font-bold">Cursor</h2>
          <p className="mb-4">
            Cursor is an AI-powered code editor, and it might be <i>the</i> most
            useful AI product to ever exist. I have been a power user for about
            a year now and I cannot imagine coding without it.
          </p>
          <p className="mb-4">
            Cursor (like many LLM-powered products) has a steep learning curve
            that can take a while to get used to. This guide will cover the core
            features and best practices for seamlessly integrating Cursor into
            your workflow. We'll start with the simplest features and then move
            on to more complex ones.
          </p>
          <p>
            Also, I'm not affiliated with Cursor in any way. I just think it's a
            great tool.
          </p>
          <h3 className="mb-4 text-lg font-bold">
            Getting Started with Cursor
          </h3>
          <p className="mb-4">
            To download Cursor, go to{" "}
            <a href="https://cursor.so" className="text-blue-500">
              cursor.so
            </a>{" "}
            and click the "Download" button.
          </p>
          <img
            className="mx-auto max-w-lg"
            src="/normal-product-design.jpeg"
            alt="ai-first-design-process"
          />
          1{" "}
        </div>
      </div>
    </>
  );
}
