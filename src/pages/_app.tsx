/* eslint-disable react/no-unescaped-entities */
import "@sakun/system.css";
import { type AppType } from "next/app";
import Head from "next/head";
import "~/styles/globals.css";
import { api } from "~/utils/api";

// Font files can be colocated inside of `app`

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>zack</title>
        <meta charSet="UTF-8" />
      </Head>

      <Component {...pageProps} />
    </>
  );
};

export default api.withTRPC(MyApp);
