import { clientAxios, baseURL } from "../../client";
import ProductList from "components/ProductList";
import Link from "next/link";
import { useState } from "react";
import { NextSeo } from "next-seo";

const index = ({ page, products, categories, SEO }) => {
  const [filterProduct, setFilterProduct] = useState([]);

  const searchProduct = (search) => {
    const nw = products.filter(
      (product) => product.nama.toLowerCase().indexOf(search.toLowerCase()) >= 0
    );

    setFilterProduct(nw);
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
          <h3>Cari Produk:</h3>
          <form onClick={handleSubmit}>
            <label class="sr-only" for="search">
              Cari Produk
            </label>
            <div className="d-flex mb-4">
              <div class="input-group">
                <input
                  type="text"
                  class="form-control"
                  id="search"
                  placeholder="150 Medical Oxygen"
                  onChange={(e) => searchProduct(e.target.value)}
                />
                <button className="btn btn-primary">Cari</button>
              </div>
            </div>
          </form>
          <div className="mb-4">
            <h4>Kategori Produk</h4>
            {categories.map((category) => {
              return (
                <Link
                  href="/produk/kategori/[id]"
                  as={`/produk/kategori/${category.slug}`}
                  key={category.id}
                >
                  <a>
                    <h4 className="badge badge-warning mr-1">
                      {category.nama}
                    </h4>
                  </a>
                </Link>
              );
            })}
          </div>
          <div className="row">
            {filterProduct.length
              ? filterProduct.map((product) => {
                  return <ProductList key={product.id} product={product} />;
                })
              : products.map((product) => {
                  return <ProductList key={product.id} product={product} />;
                })}
          </div>
        </div>
      </main>
    </>
  );
};

export async function getServerSideProps() {
  const products = await clientAxios("/products?_sort=created_at:ASC");
  const page = await clientAxios("/pages/4");
  const categories = await clientAxios(`/product-categories`);

  const deskripsi =
    `Produk-produk yang kami tawarkan: ` +
    products.data?.map((product) => product?.nama?.substring(0, 15)).toString();
  const SEO = {
    title: "Produk",
    description:
      deskripsi ||
      "pulse Oximeter, pulse Oxymeter, meja Operasi, Instrumen Bedah, Oxygen generator",
    canonical: "https://kasihkaruniakekalpt.com/produk",
    openGraph: {
      type: "website",
      locale: "en_IE",
      url: "https://kasihkaruniakekalpt.com/produk",
      site_name: "PT Kasih Karunia Kekal",
    },
  };

  const videoExtensions = ["mp4", "m4v"];

  return {
    props: {
      products: products.data.sort((current, next) => {
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
      }),
      page: page.data,
      categories: categories.data,
      SEO: SEO,
    },
  };
}

export default index;
