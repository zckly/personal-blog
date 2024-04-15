import { type AppType } from "next/app";

import { api } from "~/utils/api";

import { Analytics } from "@vercel/analytics/react";
import { Figtree } from "next/font/google";
import Link from "next/link";

import "~/styles/globals.css";

// If loading a variable font, you don't need to specify the font weight
const fontSans = Figtree({ subsets: ["latin"] });
const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <main className={fontSans.className}>
      <div className="flex h-full min-h-screen w-full flex-col gap-y-6">
        <div className="flex w-full flex-row items-center justify-between p-3">
          <Link href="/">
            <h3 className="font-semibold hover:animate-pulse hover:underline">
              Zachary Lee
            </h3>
          </Link>
        </div>
        <div className="flex min-h-[60vh] w-full flex-col items-center justify-center p-3">
          <div className="max-w-prose">
            <Component {...pageProps} />
          </div>
        </div>
      </div>
      <Analytics />
    </main>
  );
};

export default api.withTRPC(MyApp);
