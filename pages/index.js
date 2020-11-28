import { clientAxios, baseURL } from "../client";
import ProductList from "components/ProductList";
import Link from "next/link";
import _ from "lodash";

export default function Home({
  page,
  products,
  blogs,
  blogCategories,
  officeCount,
  distributors,
}) {
  return (
    <main>
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
                    Distributor alat kesehatan terpercaya sejak 1999
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
                    Free Konsultasi 24/7 via Whatsapp
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

      <div className="container py-5">
        <h3 className="mb-4">Produk Telah diregistrasi oleh Kemenkes</h3>
        <div className="row">
          {products.length
            ? products.map((product) => {
                return <ProductList key={product.id} product={product} />;
              })
            : "Tidak ada data"}
        </div>
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

        <div className="container mt-4">
          <h3>Distributor Kami</h3>
          <div className="row">
            {distributors.map((distributor) => {
              return (
                <div className="col-md-2 mb-4">
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
      </section>
    </main>
  );
}

export async function getServerSideProps() {
  const products = await clientAxios(
    "/products?id_in=26&id_in=18&id_in=15&id_in=14&id_in=13&id_in=10&id_in=7&id_in=9"
  );
  const blogCategories = await clientAxios("/blog-categories");
  const blogs = await clientAxios("/blogs?_sort=created_at:DESC");
  const page = await clientAxios("/pages?halaman=home");
  const officeCount = await clientAxios("/offices/count");
  const distributors = await clientAxios("/distributors");

  return {
    props: {
      products: products.data,
      officeCount: officeCount.data,
      page: page.data[0],
      blogs: blogs.data,
      blogCategories: blogCategories.data,
      distributors: distributors.data,
    },
  };
}
