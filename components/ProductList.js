import Link from "next/link";
import { baseURL } from "../client";
const numeral = require("numeral");
try {
  numeral.register("locale", "id", {
    delimiters: {
      thousands: " ",
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

const ProductList = ({ product }) => {
  return (
    <div
      className={
        product?.gallery[0]?.url?.includes(".mp4")
          ? "col-sm-12 col-md-8 col-lg-6 mb-4"
          : "col-sm-6 col-md-4 col-lg-3 mb-4"
      }
    >
      <div className="card h-100">
        <div className="relative">
          <Link href="/produk/[slug]" as={`/produk/${product.slug}`}>
            <a className="text-body">
              {product?.gallery[0]?.url?.includes(".mp4") ? (
                <video
                  src="https://admin.kasihkaruniakekalpt.com/uploads/Morning_Walk_fac2a4c913.mp4"
                  autoPlay
                  muted
                  loop
                  style={{ maxWidth: "100%" }}
                ></video>
              ) : (
                <img
                  src={baseURL + product?.gallery[0]?.url}
                  className="card-img-top square-img hover-zoom"
                  alt={product.nama}
                />
              )}
            </a>
          </Link>
          {typeof product.product_type === Object ? (
            <div className="category">
              <Link
                href="/produk/type/[id]"
                as={`/produk/type/${product?.product_type?.id}`}
              >
                <a className="badge badge-success">
                  Type: {product?.product_type?.tipe}
                </a>
              </Link>
            </div>
          ) : null}
        </div>
        <div className="card-body">
          <Link href="/produk/[slug]" as={`/produk/${product.slug}`}>
            <a className="text-body">
              <h6 className="card-title">
                {product.nama.substring(0, 40)}
                {product.nama.length <= 40 ? "" : "..."}
              </h6>
            </a>
          </Link>
          {/* {product.diskon ? (
            <>
              <h5>
                Rp
                {numeral(product.harga * ((100 - product.diskon) / 100)).format(
                  "a"
                )}
              </h5>
              <div>
                <del className="text-secondary">
                  {numeral(product.harga).format("a")}
                </del>{" "}
                <span className="text-danger">-{product.diskon}%</span>
              </div>
            </>
          ) : (
            <h5>Rp{numeral(product.harga).format("a")}</h5>
          )} */}
          {product.product_categories
            ? product.product_categories.map((category) => {
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
              })
            : null}
        </div>
      </div>
    </div>
  );
};

export default ProductList;
