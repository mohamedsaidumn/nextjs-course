import "../styles/globals.css";
import Layout from "@/components/layout/layout";
import Head from "next/head";
import Notification from "@/components/notification/notification";
function MyApp(props) {
  const { Component, pageProps } = props;
  return (
    <Layout>
      <Head>
        <title>Next Events</title>
        <meta name="description" content="NextJS Events" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Component {...pageProps} />;
      <Notification status="success" title="hello" message="we got it" />
    </Layout>
  );
}

export default MyApp;
