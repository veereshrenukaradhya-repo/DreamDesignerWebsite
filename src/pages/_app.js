import "../styles/globals.css";
import Head from "next/head";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <base href="/DreamDesignerWebsite/" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}