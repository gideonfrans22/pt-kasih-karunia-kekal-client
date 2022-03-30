import { clientAxios, baseURL } from "../../client";
import ProductList from "components/ProductList";
import Link from "next/link";
import { useState } from "react";
import { FaTimesCircle, FaCheckCircle } from "react-icons/fa";

const index = ({ page, products, categories }) => {
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
    <main>
      <div className="jumbotron jumbotron-fluid mb-0 produk-page">
        <div className="container">
          <h1 className="font-weight-bold text-dark">
            Integrity for your Business
          </h1>
          <p className="lead">
            Not only best products we have, but also integrity in our services
          </p>
        </div>
      </div>

      <div className="container py-5">
        <h3 className="text-dark"> Search Mail Number</h3>
        <form onClick={handleSubmit}>
          <label class="sr-only" for="search">
            Search Products
          </label>
          <div className="d-flex mb-4">
            <div class="input-group">
              <input
                type="text"
                class="form-control"
                id="search"
                onChange={(e) => searchProduct(e.target.value)}
              />
              <button className="btn btn-danger">Search</button>
            </div>
          </div>
        </form>

        <div className="row justify-content-center">
          <div className="col-12">
            <div
              className="w-100 p-4 bg-soft-danger color-danger d-flex align-items-center mb-4"
              style={{
                background: "#FCEAE9",
                borderRadius: "10px",
                color: "#FC544B",
              }}
            >
              <FaTimesCircle className="mr-2 fs-5" />{" "}
              <h6 className="fw-semibold mb-0">Verified Mail</h6>
            </div>
          </div>
          <div className="col-12">
            <div
              className="w-100 p-4 bg-soft-danger color-danger d-flex align-items-center mb-4"
              style={{
                background: "#EFFDF1",
                borderRadius: "10px",
                color: "#52AB61",
              }}
            >
              <FaCheckCircle className="mr-2 fs-5" />{" "}
              <h6 className="fw-semibold mb-0">Unverified Mail</h6>
            </div>
          </div>
          <div className="col-md-3 col-6">
            <img
              src="/img/empty-state-surat.png"
              alt=""
              className="img-fluid mb-4"
            />
          </div>
          <div className="col-12 text-center">
            <h4
              className="color-dark fw-black mb-0"
              style={{ fontWeight: "700", color: "var(--dark)" }}
            >
              No Mail Data
            </h4>
          </div>
        </div>
      </div>
    </main>
  );
};

export async function getServerSideProps() {
  const products = await clientAxios("/zzf-produks?_sort=created_at:ASC");
  const categories = await clientAxios(`/zzf-produk-kategoris`);
  // const page = await clientAxios("/pages/4");

  return {
    props: {
      products: products.data,
      categories: categories.data,
      // page: page.data,
    },
  };
}

export default index;
