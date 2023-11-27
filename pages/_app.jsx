import Layout from "../components/layout/layout";
import "../styles/globals.css";

function MyApp(props) {
  const { Component, pageProps } = props;
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
