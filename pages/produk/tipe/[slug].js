import { NextSeo } from "next-seo";
import { clientAxios, baseURL } from "../../../client";
import ProductList from "components/ProductList";
import Link from "next/link";
const numeral = require("numeral");
try {
  numeral.register("locale", "id", {
    delimiters: {
      thousands: ".",
      decimal: ","
    },
    abbreviations: {
      thousand: "ribu",
      million: "juta",
      billion: "miliar",
      trillion: "triliun"
    },
    currency: {
      symbol: "Rp"
    }
  });

  numeral.locale("id");
} catch (err) {
  console.log(err);
}

function Kategori({ productType, product }) {

  const deskripsi = `Distributor resmi ${productType?.nama}. Menjual ${productType?.deskripsi_singkat}`;
  const SEO = {
    title: `PT Kasih Karunia Kekal | ${productType?.nama}`,
    description: deskripsi,

    openGraph: {
      title: `PT Kasih Karunia Kekal | ${productType?.nama}`,
      description: deskripsi
    }
  };

  return (
    <>
      <NextSeo {...SEO} />
      <main>
        <div className="jumbotron jumbotron-fluid mb-0 index-page">
          <div className="container">
            <h1>{productType?.nama}</h1>
            <p className="lead">{productType?.deskripsi_singkat}</p>
          </div>
        </div>

        <div className="container py-5">
          <h3 className="mb-4">Tipe Produk : {productType?.nama}</h3>
          {product?.length ? (
            product.map((product) => {
              return (
                <div className="row">
                  <ProductList key={product.id} product={product} />
                </div>
              );
            })
          ) : (
            <div className="text-center">
              <h4 className="mb-4 ">
                Produk bertipe {product?.tipe} sedang tidak tersedia
              </h4>
              <Link href="/produk?">
                <a className="btn orange text-white btn-lg rounded-pill px-5 mb-5">
                  Lihat produk
                </a>
              </Link>
            </div>
          )}
        </div>
      </main>
    </>
  );
}

export async function getServerSideProps({ query: { slug } }) {
  const productType = await clientAxios(`/product-types?filters[slug][$eq]=${slug}&populate=*`)
  const res = await clientAxios(`/products?filters[product_types][slug][$eq]=${slug}&populate=*`);

  return {
    props: {
      productType: productType.data[0] || null,
      product: res.data || []
    }
  };
}

export default Kategori;
