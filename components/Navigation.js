import Link from "next/link";
import { useEffect } from "react";

const Navigation = () => {
  function googleTranslateElementInit() {
    new window.google.translate.TranslateElement(
      { pageLanguage: "id" },
      "google_translate_element"
    );
  }
  useEffect(() => {
    var addScript = document.createElement("script");
    addScript.setAttribute(
      "src",
      "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
    );
    document.body.appendChild(addScript);
    window.googleTranslateElementInit = googleTranslateElementInit;
    return () => {};
  }, []);

  return (
    <header>
      <div className="bg-primary py-2">
        <div className="container clearfix">
          <div id="google_translate_element" className="float-left"></div>
          <a
            className="btn orange text-white float-right ml-4 py-0 px-2"
            href={`https://api.whatsapp.com/send?phone=628121103829&text=${"Halo Admin PT Kasih Karunia Kekal"}`}
          >
            <i className="fab fa-whatsapp mr-2"></i>Whatsapp
          </a>
          <a
            className="text-white float-right ml-4"
            href="mailto:info@kasihkaruniakekalpt.com"
          >
            <i className="fas fa-envelope mr-2"></i>info@kasihkaruniakekalpt.com
          </a>
          <a className="text-white float-right" href="tel:+628121103829">
            <i className="fas fa-phone mr-2"></i>+62 812-1103-829
          </a>
        </div>
      </div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <Link href="/">
            <a className="navbar-brand font-weight-bold">
              <img
                src="/img/logo.png"
                width="30"
                height="30"
                className="d-inline-block align-top mr-2"
                alt="PT Kasih Karunia Kekal"
                loading="lazy"
              />
              {/* <span className="d-none d-sm-inline">PT Kasih Karunia Kekal</span> */}
            </a>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto align-items-center">
              <li className="nav-item">
                <Link href="/Profil">
                  <a className="nav-link">About Us</a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/Produk">
                  <a className="nav-link">Products</a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/Catalogue">
                  <a className="nav-link">Catalogue</a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/Kontak">
                  <a className="nav-link">Contact Us</a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/blog">
                  <a className="nav-link">Blog</a>
                </Link>
              </li>
            </ul>
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                {/* <a
                  className="nav-link btn orange px-4 text-white font-weight-bold"
                  href={`https://api.whatsapp.com/send?phone=628121103829&text=${"Halo Admin PT Kasih Karunia Kekal"}`}
                >
                  FREE Whatsapp
                </a> */}
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navigation;
