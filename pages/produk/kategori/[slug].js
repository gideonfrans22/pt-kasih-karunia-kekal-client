import { NextSeo } from "next-seo";
import { clientAxios, baseURL } from "../../../client";
import ProductList from "components/ProductList";
const numeral = require("numeral");
try {
  numeral.register("locale", "id", {
    delimiters: {
      thousands: ".",
      decimal: ",",
    },
    abbreviations: {
      thousand: "ribu",
      million: "juta",
      billion: "miliar",
      trillion: "triliun",
    },
    currency: {
      symbol: "Rp",
    },
  });

  numeral.locale("id");
} catch (err) {
  console.log(err);
}

function Kategori({ product }) {
  const SEO = {
    title: `PT. ZZF Industri Indonesia | ${product.nama}`,
    description: product.deskripsi_singkat,

    openGraph: {
      title: `PT. ZZF Industri Indonesia | ${product.nama}`,
      description: product.deskripsi_singkat,
    },
  };

  console.log(product)

  return (
    <>
      <NextSeo {...SEO} />
      <main>
        <div className="jumbotron jumbotron-fluid mb-0 index-page">
          <div className="container">
            <h1>{product.nama}</h1>
            <p className="lead">{product.deskripsi_singkat}</p>
          </div>
        </div>

        <div className="container py-5">
          <h3 className="mb-4">Kategori Produk : {product.nama}</h3>
          <div className="row">
            {product
              ? product.zzf_produks.map((product) => {
                  return <ProductList key={product.id} product={product} />;
                })
              : "Tidak ada data"}
          </div>
        </div>
      </main>
    </>
  );
}

export async function getServerSideProps({ query: { slug } }) {
  const res = await clientAxios(`/zzf-produk-kategoris?slug=${slug}`);

  return {
    props: {
      product: res.data[0] || null,
    },
  };
}

export default Kategori;
