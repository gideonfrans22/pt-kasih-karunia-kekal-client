import { clientAxios, baseURL } from "../client";
import ProductList from "components/ProductList";
import Link from "next/link";

export default function Profil({ page, offices }) {
  return (
    <main>
      <div className="jumbotron jumbotron-fluid mb-0 profil-page">
        <div className="container">
          <h1 className="font-weight-bold text-dark">
            Profile PT ZZF Industri Indonesia
          </h1>
        </div>
      </div>

      <section className="founder-section">
        <div className="container my-5">
          <div className="row justify-content-center">
            <div className="col-md-10">
              <h2 className="text-center font-weight-bold text-dark section-header">
                Founder and Owner of ZZF Group
              </h2>
            </div>
          </div>
          <div className="row justify-content-center align-items-center mt-5">
            <div className="col-md-10 d-flex justify-content-center">
              <div className="founder text-center mx-5 d-flex flex-column align-items-center">
                <div
                  className="relative object-fit-cover rounded-pill"
                  style={{
                    width: `150px`,
                    height: `150px`,
                  }}
                >
                  <img
                    src="/img/foto-pak-ginting.jpg"
                    alt="harmony-ginting"
                    className="rounded-circle object-fit-cover hover-zoom"
                    width="150"
                    height="150"
                  />
                </div>
                <h5 className=" mt-3 mb-0 font-weight-bold">
                  Harmony Ginting Ir, Msc.
                </h5>
                <p className="mt-3 mb-1 ">CEO & Founder</p>
                <p className="m-0">ZZF Industri Indonesia</p>
              </div>
              <div className="founder text-center mx-5 d-flex flex-column align-items-center">
                <div
                  className="relative object-fit-cover rounded-pill"
                  style={{
                    width: `150px`,
                    height: `150px`,
                  }}
                >
                  <img
                    src="/img/foto-pak-jack-xie.jpg"
                    alt="harmony-ginting"
                    className="rounded-circle object-fit-cover hover-zoom"
                    width="150"
                    height="150"
                  />
                </div>
                <h5 className=" mt-3 mb-0 font-weight-bold">Jack Xie, MBA.</h5>
                <p className="mt-3 mb-1 ">CEO & Founder</p>
                <p className="m-0">ZZF Group & PINETREE</p>
              </div>
            </div>
          </div>
          <div className="row justify-content-center mt-5">
            <div className="col-md-10">
              <p>
                Mr. Harmony Ginting has extra ordinary 36 years experience in
                Construction Industry, as well as in Indonesia and overseas. He
                earned his Master Degree in Structural Engineering from Fenn
                College of Engineering CSU Ohio after starting very early
                experience in PT Ciriajasa Total Engineering in 1979. One of his
                remarkable achievement out of many, his superb achievement in
                handling Public Work Office Project under PT Indonesia
                Construction Consortium Industries (ICCI) in 1981. In 2010 he
                starting exploring China Construction Industry and Heavy
                Equipment manufactures in many provinces as the life adventure,
                starting from Guangdong and Yunnan in the south to Heilongjiang
                in the north, Shandong and Zhejiang in the east to Tibet in the
                West. In Chinese New Year 2012, with encouragement and
                supporting Mr Jack Xie, a young and brave businessman from
                Sichuan China also a futuristic person hold Master Degree in
                Business Administration (MBA) from Webster University United
                States.
              </p>
              <p>
                Mr Ginting started PT ZZF Industri Indonesia with a big and
                futuristic vision of developing construction equipment industry
                in Indonesia with transfer knowledge and experience from the
                wonder China Construction Equipment Industry. With his long and
                broad experiences and knowledge in Construction Industry and
                after learning from the several China leading manufacturers, Mr
                Ginting easily bring new systems and developing ZZF its own
                system and become one of leading in the business. He aims ZZF is
                able to find the right solution for every Construction project
                unique needs, such Tower Crane Portable Foundation, Traveling
                System, Extra Free Standing etc. ZZF also capable developing the
                plan for complicated and sophisticated Construction Equipment
                System with supporting of ZZF Group Network. It’s realistic, ZZF
                has the right to claim as Provider: Integrated Construction
                Equipment.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="founder-section">
        <div className="container my-5">
          <div className="row justify-content-center">
            <div className="col-md-10">
                <h2 className="text-center font-weight-bold text-dark section-header">
                  About ZZF Industri Indonesia
                </h2>
            </div>
          </div>
          <div className="row justify-content-center align-items-center mt-3">
            <div className="col-md-10 d-flex justify-content-center">
              <ol>
                <li>
                  <b>Create Customers: </b>
                  By thoroughly understanding our Customer's needs, wants, and
                  realities, and crafting innovative services that respond to
                  those demands, we will diferentiate our company resulting in
                  creation of customers (growth of market share).
                </li>
                <li>
                  <b>Industry Leadership: </b>
                  To be an industry leader recognized for exceptional financial
                  and quality performance and no product liability claims.
                </li>
                <li>
                  <b>Stability and Longevity: </b>
                  Achieve annual growth and stability resulting in the Company's
                  ability to guarantee corporate obligations and flourish during
                  varied real estate cycles as measured by yearly growth of
                  annual revenues.
                </li>
                <li>
                  <b>Responsible Profitability: </b>
                  Maximize our return on investments to stockholders and
                  investors, while maintaining a balance of environmental
                  sensitivity and support for community and social needs.
                </li>
                <li>
                  <b>Clarity of Vision: </b>
                  Promote an environment that enables Cobalt's team to achieve
                  clearly stated results consistent with the Company's Purpose,
                  Mission, Goals, and Objectives and further dened by "Best in
                  Class" Practices and Product.
                </li>
                <li>
                  <b>Superior Corporate Decorum: </b>
                  Promote a corporate personality and culture emphasizing
                  Accuracy, Cooperation, Integrity, Responsibility, and Loyalty.
                </li>
                <li>
                  <b>Achieve "Best in Class" Practices and Product: </b>
                  Strive to attain "Best in Class" standards in all Company
                  activities and communications.
                </li>
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* 
      <div className="container">
        <blockquote className="blockquote text-center py-5">
          <i className="fas fa-quote-left h3 mb-4"></i>
          <p className="mb-0">{page.deskripsi_halaman}</p>
          <footer className="blockquote-footer">
            Direktur PT Kasih Karunia Kekal{" "}
            <cite title="Source Title">Frans Limantoni</cite>
          </footer>
        </blockquote>
      </div> */}

      {/* <section>
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
      </section> */}
    </main>
  );
}

// export async function getServerSideProps() {
//   const offices = await clientAxios("/offices?_sort=created_at:DESC");
//   const page = await clientAxios("/pages?halaman=profil");

//   return {
//     props: {
//       page: page.data[0],
//       offices: offices.data,
//     },
//   };
// }
