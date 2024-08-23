/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import { ColoredLink } from "~/components/ColoredLink";

/* eslint-disable react/no-unescaped-entities */
export default function FavoriteBooks() {
  return (
    <>
      <Head>
        <title>zackblog - favorite books</title>
      </Head>
      <div className="p-4">
        <ColoredLink href="/">home</ColoredLink>
      </div>
      <div className="window mx-auto min-w-[360px] max-w-2xl">
        <div className="title-bar"></div>
        <div className="separator"></div>
        <div className="window-pane text-sm">
          <h2 className="mb-4 text-lg font-bold">Favorite Books</h2>
          <p className="mb-4">
            Below is a shortlist of my favorite books, by domain.
          </p>
          <h3 className="text-md mb-4 font-bold">Design</h3>
          <ul className="mb-4 list-inside list-disc">
            <li>Notes on the Synthesis of Form</li>
          </ul>

          <h3 className="text-md mb-4 font-bold">Complex Systems</h3>
          <ul className="mb-4 list-inside list-disc">
            <li>Thinking in Systems</li>
            <li>Antifragile</li>
          </ul>

          <h3 className="text-md mb-4 font-bold">Data / Analytics</h3>
          <ul className="mb-4 list-inside list-disc">
            <li>
              <a href="https://www.amazon.com/Trustworthy-Online-Controlled-Experiments-Practical/dp/1108724264/ref=sr_1_1?crid=23ZIULAJUSIG9&dib=eyJ2IjoiMSJ9.NPCHXfY3O_Kv4LZrL2m_6flj0ZYe96U_rU_J8kDkn_NcXoW_SLVEWRBIRKpU3K1wVB7DqGtc93CVTqhTsoXjhVgaoIpZHBLPqVwnJzIGWP8.Pmn1gC_VTpWHZOnQGqDTRGizv80tfkrlvJlnjjuNFJQ&dib_tag=se&keywords=trustworthy+online+controlled+experiments&qid=1721055831&s=books&sprefix=trustworthy+online+controlled+experiments%2Cstripbooks%2C104&sr=1-1">
                <strong>Invisible Women</strong>
              </a>
              : eye-opening book on how bias and discrimination against women
              are baked into our systems. a must read, especially for men and
              those working in tech.
            </li>
            <li>
              <a href="https://www.amazon.com/Trustworthy-Online-Controlled-Experiments-Practical/dp/1108724264/ref=sr_1_1?crid=23ZIULAJUSIG9&dib=eyJ2IjoiMSJ9.NPCHXfY3O_Kv4LZrL2m_6flj0ZYe96U_rU_J8kDkn_NcXoW_SLVEWRBIRKpU3K1wVB7DqGtc93CVTqhTsoXjhVgaoIpZHBLPqVwnJzIGWP8.Pmn1gC_VTpWHZOnQGqDTRGizv80tfkrlvJlnjjuNFJQ&dib_tag=se&keywords=trustworthy+online+controlled+experiments&qid=1721055831&s=books&sprefix=trustworthy+online+controlled+experiments%2Cstripbooks%2C104&sr=1-1">
                <strong>Trustworthy Online Controlled Experiments</strong>
              </a>
              : the only book you need to read on setting up / scaling reliable
              experiments in your company
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
