import { clientAxios, baseURL } from "../client";
import ProductList from "components/ProductList";
import Link from "next/link";

export default function Profil({ page, offices }) {
  return (
    <main>
      <div className="jumbotron jumbotron-fluid mb-0 profil-page">
        <div className="container">
          <h1>{page.judul_halaman}</h1>
        </div>
      </div>

      <div className="container">
        <blockquote className="blockquote text-center py-5">
          <i className="fas fa-quote-left h3 mb-4"></i>
          <p className="mb-0">{page.deskripsi_halaman}</p>
          <footer className="blockquote-footer">
            Direktur PT Kasih Karunia Kekal{" "}
            <cite title="Source Title">Frans Limantoni</cite>
          </footer>
        </blockquote>
      </div>

      <section>
        <div className="container my-4">
          <div className="row">
            <div className="col-md-12">
              <h3 className="mb-4">Office Kami</h3>
              <div className="row">
                {offices.map((office) => {
                  return (
                    <div className="col-md-4 mb-4" key={office.id}>
                      <div
                        id={`carousel${office.id}`}
                        className="carousel slide"
                        data-ride="carousel"
                      >
                        <div className="carousel-inner">
                          {office.galeri.map((galeri, idx) => {
                            return (
                              <div
                                className={
                                  idx == 0
                                    ? "carousel-item active"
                                    : "carousel-item"
                                }
                                key={galeri.id}
                              >
                                <img
                                  src={baseURL + galeri.url}
                                  className="d-block w-100 square-img"
                                  alt={galeri.name}
                                />
                                <div className="carousel-caption d-none d-md-block">
                                  <h5>{office.kota}</h5>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                        <a
                          class="carousel-control-prev"
                          href={`#carousel${office.id}`}
                          role="button"
                          data-slide="prev"
                        >
                          <span
                            class="carousel-control-prev-icon"
                            aria-hidden="true"
                          ></span>
                          <span class="sr-only">Previous</span>
                        </a>
                        <a
                          class="carousel-control-next"
                          href={`#carousel${office.id}`}
                          role="button"
                          data-slide="next"
                        >
                          <span
                            class="carousel-control-next-icon"
                            aria-hidden="true"
                          ></span>
                          <span class="sr-only">Next</span>
                        </a>
                      </div>
                      <ul className="list-group list-group">
                        <li className="list-group-item">
                          <i className="fas fa-map-marker-alt mr-4"></i>
                          {office.alamat}
                        </li>
                        <li className="list-group-item">
                          <i className="fas fa-city mr-4"></i>
                          {office.kota}
                        </li>
                        <li className="list-group-item">
                          <i className="fas fa-mail-bulk mr-4"></i>
                          {office.kode_pos}
                        </li>
                        <li className="list-group-item">
                          <i className="fas fa-phone mr-4"></i>
                          {office.telepon}
                        </li>
                        <li className="list-group-item">
                          <i className="fas fa-fax mr-4"></i>
                          {office.fax}
                        </li>
                      </ul>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export async function getServerSideProps() {
  const offices = await clientAxios("/offices?_sort=created_at:DESC");
  const page = await clientAxios("/pages?halaman=profil");

  return {
    props: {
      page: page.data[0],
      offices: offices.data,
    },
  };
}
