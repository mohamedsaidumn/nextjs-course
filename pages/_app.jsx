import Layout from "../components/layout/layout";
import "../styles/globals.css";
import { Provider } from "next-auth/client";

function MyApp(props) {
  const { Component, pageProps } = props;
  return (
    <Provider session={pageProps.session}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}

export default MyApp;
