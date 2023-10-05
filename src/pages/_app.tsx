import { type AppType } from "next/app";

import { api } from "~/utils/api";

import Link from "next/link";
import "~/styles/globals.css";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <div className="flex h-full min-h-screen w-full flex-col gap-y-6">
      <div className="flex w-full flex-row items-center justify-between p-3">
        <Link href="/">
          <h3 className="font-semibold hover:animate-pulse hover:underline">
            Zachary Lee
          </h3>
        </Link>
      </div>
      <div className="flex min-h-[60vh] w-full flex-col items-center justify-center p-3">
        <div className="max-w-xl">
          <Component {...pageProps} />
        </div>
      </div>
    </div>
  );
};

export default api.withTRPC(MyApp);
