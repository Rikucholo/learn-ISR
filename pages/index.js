import Head from "next/head";
import Layout, { siteTitle } from "./layout";
import utilStyles from "../styles/utils.module.css";

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hello, I am riku.</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{" "}
          <a href="https://google.com">our google site</a>.)
        </p>
      </section>
    </Layout>
  );
}
