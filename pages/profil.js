import { NextSeo } from "next-seo";
import { baseURL, clientAxios } from "../client";

export default function Profil({ page, offices, SEO }) {
  return (
    <>
      <NextSeo {...SEO} />
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
                        <div className="relative">
                          <a className="text-body">
                            <img
                              src={baseURL + office.galeri[0]?.url}
                              className="card-img-top square-img hover-zoom"
                              alt={office.galeri[0]?.nama}
                            />
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
  const page = await clientAxios("/pages?halaman=profil");

  const deskripsi =
    `${page.data[0]?.deskripsi_halaman} - Direktur PT Kasih Karunia Kekal Frans Limantoni. Office Kami: `.concat(
      offices.data?.map((office) => office.kota).toString()
    );
  const SEO = {
    title: "Profil",
    description: deskripsi || "Berdiri sejak 1999",
    canonical: "https://kasihkaruniakekalpt.com/profil",
    openGraph: {
      type: "website",
      locale: "en_IE",
      url: "https://kasihkaruniakekalpt.com/profil",
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
