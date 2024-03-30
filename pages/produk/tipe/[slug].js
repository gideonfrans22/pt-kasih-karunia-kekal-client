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

function Kategori({ product }) {
  const deskripsi = `Distributor resmi ${product.nama}. Menjual ${product.deskripsi_singkat}`;
  const SEO = {
    title: `PT Kasih Karunia Kekal | ${product.nama}`,
    description: deskripsi,

    openGraph: {
      title: `PT Kasih Karunia Kekal | ${product.nama}`,
      description: deskripsi
    }
  };

  return (
    <>
      <NextSeo {...SEO} />
      <main>
        <div className="jumbotron jumbotron-fluid mb-0 index-page">
          <div className="container">
            <h1>{product?.tipe}</h1>
            <p className="lead">{product.deskripsi_singkat}</p>
          </div>
        </div>

        <div className="container py-5">
          <h3 className="mb-4">Tipe Produk : {product?.tipe}</h3>
          {product?.products?.length ? (
            product.products.map((product) => {
              return (
                <div className="row">
                  <ProductList key={product.id} product={product} />;
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
  const res = await clientAxios(`/product-types?tipe=${slug}`);

  console.log(res);

  return {
    props: {
      product: res.data[0] || null
    }
  };
}

export default Kategori;
