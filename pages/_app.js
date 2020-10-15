import "../styles/globals.css";
import { DefaultSeo } from "next-seo";

import SEO from "../next-seo.config";
import Navigation from "components/Navigation";
import Footer from "components/Footer";
import "react-image-lightbox/style.css";

import Router from "next/router";
import NProgress from "nprogress"; //nprogress module
import "nprogress/nprogress.css"; //styles of nprogress

function MyApp({ Component, pageProps }) {
  //Binding events.
  try {
    Router.events.on("routeChangeStart", () => NProgress.start());
    Router.events.on("routeChangeComplete", () => NProgress.done());
    Router.events.on("routeChangeError", () => NProgress.done());
  } catch (err) {
    console.log(err);
  }
  return (
    <>
      <DefaultSeo {...SEO} />
      <Navigation />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
