import Link from "next/link";

const Navigation = () => {
  return (
    <header>
      {/* <div className="gray py-2">
        <div className="container clearfix">
          <div id="google_translate_element" className="float-left"></div>
          <a
            className="text-white float-right ml-4"
            href="mailto:zzfindonesia@gmail.com"
          >
            <i className="fas fa-envelope mr-2"></i>zzfindonesia@gmail.com
          </a>
          <a className="text-white float-right" href="tel:+62818961343">
            <i className="fas fa-phone mr-2"></i>+62 818-961-343
          </a>
        </div>
      </div> */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light py-4">
        <div className="container">
          <Link href="/">
            <h6 className="font-weight-bold m-0 pointer text-dark">PT ZZF Industri Indonesia</h6>
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
            <ul className="navbar-nav mx-auto">
              <li className="nav-item">
                <Link href="/profil">
                  <a className="nav-link">Profile</a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/produk">
                  <a className="nav-link">Products</a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/kontak">
                  <a className="nav-link">Contact</a>
                </Link>
              </li>
            </ul>
            <ul className="navbar-nav">
              <li className="nav-item">
                <a
                  className="nav-link btn btn-danger py-2 px-4 text-white font-weight-bold"
                  href={`https://api.whatsapp.com/send?phone=62818961343&text=${"Halo , saya tertarik dengan tower crane yang bapak miliki http://zzf.co.id"}`}
                >
                  FREE Whatsapp
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navigation;
