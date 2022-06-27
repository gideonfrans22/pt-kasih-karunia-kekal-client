import { clientAxios, baseURL } from "../client";
import ProductList from "components/ProductList";
import Link from "next/link";
import { useState } from "react";
import { NextSeo } from "next-seo";

export default function Kontak({ page, offices, SEO }) {
  const initialState = { nama: "", email: "", pesan: "" };

  const [stateForm, setStateForm] = useState(initialState);

  const handleChange = (e) => {
    setStateForm({ ...stateForm, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <NextSeo {...SEO} />
      <main>
        <div className="jumbotron jumbotron-fluid mb-0 produk-page">
          <div className="container">
            <h1>{page.judul_halaman}</h1>
            <p className="lead">{page.deskripsi_halaman}</p>
          </div>
        </div>

        <div className="container py-5">
          <div className="row">
            <div className="col-md-6">
              <h3 className="mb-4">Kami siap melayani anda</h3>
              <div class="form-group">
                <label for="nama">Nama</label>
                <input
                  type="text"
                  class="form-control"
                  id="nama"
                  onChange={(e) => handleChange(e)}
                />
              </div>
              <div class="form-group">
                <label for="email">Alamat Email</label>
                <input
                  type="email"
                  class="form-control"
                  id="email"
                  onChange={(e) => handleChange(e)}
                />
              </div>
              <div class="form-group">
                <label for="pesan">Pesan</label>
                <textarea
                  class="form-control"
                  id="pesan"
                  rows="5"
                  onChange={(e) => handleChange(e)}
                ></textarea>
              </div>
              <a
                target="_blank"
                href={`https://api.whatsapp.com/send?phone=628121103829&text=${stateForm.nama}%0A${stateForm.email}%0A%0APesan:%0A${stateForm.pesan}`}
                type="submit"
                class="btn btn-primary"
              >
                Submit
              </a>
            </div>
            <div className="col-md-6">
              <h3 className="mb-4">Office Pusat</h3>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.734888806025!2d106.8719315153467!3d-6.166246262148849!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f5010970eee9%3A0xf9dd2148b5e84264!2sPT%20Kasih%20Karunia%20Kekal%20Jakarta!5e0!3m2!1sen!2sid!4v1597245681688!5m2!1sen!2sid"
                width="100%"
                height="400"
                frameborder="0"
                allowFullScreen=""
                aria-hidden="false"
                tabIndex="0"
              ></iframe>
            </div>
          </div>
        </div>

        <section>
          <div className="container my-4">
            <div className="row">
              <div className="col-md-12">
                <h3 className="mb-4">Office Kami</h3>
                <div className="row">
                  {offices.map((office) => {
                    return (
                      <div className="col-md-6 mb-4" key={office.id}>
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
                          {office.telepon ? (
                            <li className="list-group-item">
                              <i className="fas fa-phone mr-4"></i>
                              {office.telepon}
                            </li>
                          ) : null}

                          {office.fax ? (
                            <li className="list-group-item">
                              <i className="fas fa-fax mr-4"></i>
                              {office.fax}
                            </li>
                          ) : null}
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
    </>
  );
}

export async function getServerSideProps() {
  const offices = await clientAxios("/offices?_sort=created_at:DESC");
  const page = await clientAxios("/pages?halaman=kontak");

  const deskripsi = `Hubungi kami, kami siap melayani anda melalui kontak. Whatsapp: +62 812-1103-829. email: info@kasihkaruniakekalpt.com. Fax/telp: +62 21 42879525`;
  const SEO = {
    title: "Kontak",
    description:
      deskripsi ||
      "pulse Oximeter, pulse Oxymeter, meja Operasi, Instrumen Bedah, Oxygen generator",
    canonical: "https://www.kasihkaruniakekalpt.com/kontak",
    openGraph: {
      type: "website",
      locale: "en_IE",
      url: "https://kasihkaruniakekalpt.com/kontak",
      site_name: "PT Kasih Karunia Kekal",
    },
  };

  return {
    props: {
      page: page.data[0],
      offices: offices.data,
      SEO,
    },
  };
}
