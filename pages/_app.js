import "../styles/globals.css";
import Layout from "@/components/layout/layout";

function MyApp(props) {
  const { Component, pageProps } = props;
  return (
    <Layout>
      <Component {...pageProps} />;
    </Layout>
  );
}

export default MyApp;
