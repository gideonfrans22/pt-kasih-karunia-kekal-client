import Link from "next/link";
import { useEffect, useState } from "react";

const Navigation = () => {
  const [menuAktif, setMenuAktif] = useState("/");

  useEffect(() => {
    setMenuAktif(window.location.pathname);
  }, [menuAktif]);

  const headerMenus = [
    {
      isDropdown: false,
      text: "Profile",
      url: `/profil`,
    },
    {
      isDropdown: false,
      text: "Products",
      url: `/produk`,
    },
    {
      isDropdown: false,
      text: "Contact",
      url: `/kontak`,
    },
    {
      isDropdown: false,
      text: "Verification",
      url: `/verification`,
    },
  ];

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
            <h6 className="font-weight-bold m-0 pointer text-dark">
              PT ZZF Industri Indonesia
            </h6>
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
              {headerMenus?.map((menu, idx) => {
                return (
                  <li
                    className="nav-item py-lg-1 py-2"
                    key={idx}
                    style={{ paddingLeft: "12px", paddingRight: "12px" }}
                  >
                    <Link href={menu.url}>
                      <a
                        {...(menuAktif == menu.url
                          ? {
                              className: "nav-link p-0 fw-bold active",
                              "aria-current": "page",
                            }
                          : { className: "nav-link p-0 fw-bold" })}
                        onClick={() => setMenuAktif(menu.url)}
                      >
                        {menu.text}
                      </a>
                    </Link>
                  </li>
                );
              })}
            </ul>
            <ul className="navbar-nav">
              <li className="nav-item">
                <a
                  className="btn btn-danger py-2 px-4 text-white font-weight-bold"
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
