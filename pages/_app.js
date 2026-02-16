import Head from "next/head";
import "../styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>HarborBook — Scheduling & payments</title>
        <meta
          name="description"
          content="HarborBook gives service businesses a clean, mobile‑first booking experience that keeps your calendar full."
        />
        <link rel="icon" href="/harborbook.png" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

