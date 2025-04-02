import { NextSeo } from "next-seo";
import { clientAxios, baseURL } from "../../../client";
import ProductList from "components/ProductList";
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

function Kategori({ distributor, product }) {
  const deskripsi = `Distributor resmi ${distributor.nama}. Menjual ${distributor.deskripsi_singkat}`;
  const SEO = {
    title: `PT Kasih Karunia Kekal | ${distributor.nama}`,
    description: deskripsi,

    openGraph: {
      title: `PT Kasih Karunia Kekal | ${distributor.nama}`,
      description: deskripsi
    }
  };
  console.log(distributor, product);


  return (
    <>
      <NextSeo {...SEO} />
      <main>
        <div className="jumbotron jumbotron-fluid mb-0 index-page">
          <div className="container">
            <h1>{distributor.nama}</h1>
            <p className="lead">{distributor.deskripsi_singkat}</p>
          </div>
        </div>

        <div className="container py-5">
          <h3 className="mb-4">Brand Produk : {distributor.nama}</h3>
          <div className="row">
            {product
              ? product.map((product) => {
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
  const distributor = await clientAxios(`/distributors?filters[slug][$eq]=${slug}&populate=*`)
  const res = await clientAxios(`/products?filters[product_brand][slug][$eq]=${slug}&populate=*`);

  return {
    props: {
      distributor: distributor.data?.[0],
      product: res.data || null
    }
  };
}

export default Kategori;
