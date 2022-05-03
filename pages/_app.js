import Layout from '../components/layout'
import Head from "next/head";
import '../styles/globals.css'
import store from "../redux/store"
import { Provider } from "react-redux";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>The Godfather</title>
        <meta name="description" content="Best pizza shop in town" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
      </Head>

      <Provider store={store}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Provider>

    </>

  )
}

export default MyApp
