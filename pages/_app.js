import "../styles/globals.css";

import Footer from "components/Footer";
import Navigation from "components/Navigation";
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
      <Navigation />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
