/* eslint-disable react/no-unescaped-entities */
import "@sakun/system.css";
import { Analytics } from "@vercel/analytics/react";
import { type AppType } from "next/app";
import Head from "next/head";
import Script from "next/script";
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
      
      <Script
        id="theme-script"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            (function() {
              // Check for saved theme preference or use the system preference
              const isDarkMode = localStorage.getItem('theme') === 'dark' || 
                (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches);
              
              // Apply the dark class to the document if needed before page renders
              if (isDarkMode) {
                document.documentElement.classList.add('dark');
                document.body.classList.add('dark');
                document.body.style.backgroundColor = '#1a1a2e';
              }
            })()
          `,
        }}
      />

      <Component {...pageProps} />
      <Analytics />
    </>
  );
};

export default api.withTRPC(MyApp);