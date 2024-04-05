import { clientAxios, baseURL } from "../client";
import ProductList from "components/ProductList";
import Link from "next/link";
import _ from "lodash";
import { NextSeo } from "next-seo";
const videoExtensions = ["mp4", "m4v"];

export default function Home({
  page,
  products,
  blogs,
  blogCategories,
  officeCount,
  distributors,
  SEO
}) {
  return (
    <>
      <NextSeo {...SEO} />
      <main>
        <div className="d-none d-lg-block">
          <div className="jumbotron jumbotron-fluid mb-0 index-page">
            <div className="container">
              <h1>{page.judul_halaman}</h1>
              <p className="lead">{page.deskripsi_halaman}</p>
            </div>
          </div>

          <section className="pt-4 bg-light">
            <div className="container">
              <div className="row">
                <div className="col-sm-6 col-md-3 mb-4">
                  <div
                    className="shadow-sm p-3 bg-white rounded"
                    style={{ minHeight: 120 }}
                  >
                    <div className="row">
                      <div className="col-12 text-center">
                        <i className="fas fa-syringe h2 text-info"></i>
                      </div>
                      <div className="col-12 text-center">
                        Distributor Alat Kesehatan Terpercaya Sejak 1999
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-md-3 mb-4">
                  <div
                    className="shadow-sm p-3 bg-white rounded"
                    style={{ minHeight: 120 }}
                  >
                    <div className="row">
                      <div className="col-12 text-center">
                        <i className="fab fa-whatsapp h2 text-primary"></i>
                      </div>
                      <div className="col-12 text-center">
                        Konsultasi 24/7 via Whatsapp
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-md-3 mb-4">
                  <div
                    className="shadow-sm p-3 bg-white rounded"
                    style={{ minHeight: 120 }}
                  >
                    <div className="row">
                      <div className="col-12 text-center">
                        <i className="fas fa-city h2 text-warning"></i>
                      </div>
                      <div className="col-12 text-center">
                        {officeCount} kantor tersebar di seluruh Indonesia
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-md-3 mb-4">
                  <div
                    className="shadow-sm p-3 bg-white rounded"
                    style={{ minHeight: 120 }}
                  >
                    <div className="row">
                      <div className="col-12 text-center">
                        <i className="fas fa-heart text-danger h2"></i>
                      </div>
                      <div className="col-12 text-center">
                        Kepuasan pelanggan adalah No.1 untuk kami
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        <div className="container py-5">
          <h3 className="mb-4">Produk Telah diregistrasi oleh Kemenkes</h3>
          <div className="row">
            {products.length
              ? products
                  .sort((current, next) => {
                    const currentExtension = current?.gallery[0]?.url
                      .split(".")
                      .pop()
                      .toLowerCase();
                    const nextExtension = next?.gallery[0]?.url
                      .split(".")
                      .pop()
                      .toLowerCase();
                    if (
                      videoExtensions.includes(currentExtension) &&
                      !videoExtensions?.includes(nextExtension)
                    ) {
                      return -1;
                    }
                    if (
                      !videoExtensions.includes(currentExtension) &&
                      videoExtensions?.includes(nextExtension)
                    ) {
                      return 1;
                    }
                    return 0;
                  })
                  .map((product) => {
                    return <ProductList key={product.id} product={product} />;
                  })
              : "Tidak ada data"}
          </div>

          <div className="container mt-4">
            <h3>Our Brand Partners</h3>
            <div className="row">
              {distributors.map((distributor) => {
                return (
                  <div
                    className="col-md-2 mb-4"
                    key={`distributor-${distributor.id}`}
                  >
                    <img
                      src={`${baseURL + distributor.logo?.url}`}
                      alt={distributor.nama}
                      title={distributor.nama}
                      width="100%"
                      height="100px"
                      style={{ objectFit: "contain" }}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="d-block d-lg-none">
          <div className="d-none d-md-block jumbotron jumbotron-fluid mb-0 index-page">
            <div className="container">
              <h1>{page.judul_halaman}</h1>
              <p className="lead">{page.deskripsi_halaman}</p>
            </div>
          </div>

          <section className="pt-4 bg-light mb-4">
            <div className="container">
              <div className="row">
                <div className="col-sm-6 col-md-3 mb-4">
                  <div
                    className="shadow-sm p-3 bg-white rounded"
                    style={{ minHeight: 120 }}
                  >
                    <div className="row">
                      <div className="col-12 text-center">
                        <i className="fas fa-syringe h2 text-info"></i>
                      </div>
                      <div className="col-12 text-center">
                        Distributor Alat Kesehatan Terpercaya Sejak 1999
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-md-3 mb-4">
                  <div
                    className="shadow-sm p-3 bg-white rounded"
                    style={{ minHeight: 120 }}
                  >
                    <div className="row">
                      <div className="col-12 text-center">
                        <i className="fab fa-whatsapp h2 text-primary"></i>
                      </div>
                      <div className="col-12 text-center">
                        Konsultasi 24/7 via Whatsapp
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-md-3 mb-4">
                  <div
                    className="shadow-sm p-3 bg-white rounded"
                    style={{ minHeight: 120 }}
                  >
                    <div className="row">
                      <div className="col-12 text-center">
                        <i className="fas fa-city h2 text-warning"></i>
                      </div>
                      <div className="col-12 text-center">
                        {officeCount} Kantor Tersebar di Seluruh Indonesia
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-md-3 mb-4">
                  <div
                    className="shadow-sm p-3 bg-white rounded"
                    style={{ minHeight: 120 }}
                  >
                    <div className="row">
                      <div className="col-12 text-center">
                        <i className="fas fa-heart text-danger h2"></i>
                      </div>
                      <div className="col-12 text-center">
                        Kepuasan Pelanggan adalah No.1 untuk Kami
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        <section>
          <div className="container">
            <h3 className="mb-4">Artikel terkini untuk anda</h3>
            <p>Pilih berdasarkan kategori dibawah.</p>
          </div>
          <div className="container">
            {blogCategories.map((category) => {
              return (
                <Link href="fasdf" key={category.id}>
                  <a className="btn text-white orange btn-sm mr-3 d-inline-block">
                    {category.nama}
                  </a>
                </Link>
              );
            })}
          </div>

          <div className="container my-4">
            <div className="row">
              {blogs.map((blog) => {
                return (
                  <div className="col-md-6" key={blog.id}>
                    <div className="row mb-4">
                      <div className="col-md-6">
                        <div className="relative">
                          <Link href="/blog/[slug]" as={`/blog/${blog.slug}`}>
                            <a className="hover-overflow">
                              <img
                                src={baseURL + blog.thumbnail.url}
                                alt={blog.judul}
                                className="square-img rounded shadow hover-zoom"
                              />
                            </a>
                          </Link>
                          <div className="category">
                            {blog.blog_categories.map((category) => {
                              return (
                                <Link href="/lagi" key={category.id}>
                                  <a className="badge badge-success mr-1">
                                    {category.nama}
                                  </a>
                                </Link>
                              );
                            })}
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="d-flex flex-column justify-content-center h-100">
                          <Link href="/blog/[slug]" as={`/blog/${blog.slug}`}>
                            <a className="text-body">
                              <h4 className="font-weight-bold">
                                {blog.judul.length <= 30
                                  ? blog.judul
                                  : blog.judul.substr(0, 30) + "..."}
                              </h4>
                            </a>
                          </Link>
                          <p className="text-secondary">
                            {blog.konten.length <= 60
                              ? blog.konten
                              : blog.konten.substr(0, 60) + "..."}
                            <Link href="/blog/[slug]" as={`/blog/${blog.slug}`}>
                              <a className="text-primary">Selengkapnya</a>
                            </Link>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export async function getServerSideProps() {
  const products = await clientAxios(
    "/products?_sort=prioritas_tampil:DESC&_limit=8"
  );
  const blogCategories = await clientAxios("/blog-categories");
  const blogs = await clientAxios("/blogs?_sort=created_at:DESC");
  const page = await clientAxios("/pages?halaman=home");
  const officeCount = await clientAxios("/offices/count");
  const distributors = await clientAxios("/distributors");

  const deskripsi =
    page.data[0]?.deskripsi_halaman +
    `. Mendistribusikan alat ${distributors?.data
      ?.map((category) => category?.nama)
      ?.join(" | ")}`;
  const SEO = {
    title: "PT Kasih Karunia Kekal",
    description: deskripsi || "Distributor alat kesehatan sejak 1999",
    canonical: "https://kasihkaruniakekalpt.com/",
    openGraph: {
      type: "website",
      locale: "en_IE",
      url: "https://kasihkaruniakekalpt.com",
      site_name: "PT Kasih Karunia Kekal"
    }
  };

  return {
    props: {
      products: products.data,
      officeCount: officeCount.data,
      page: page.data[0],
      blogs: blogs.data,
      blogCategories: blogCategories.data,
      distributors: distributors.data,
      SEO: SEO
    }
  };
}
