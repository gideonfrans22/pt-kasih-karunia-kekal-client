import { clientAxios, baseURL } from "../../client";
import ProductList from "components/ProductList";
import Link from "next/link";
import { useState } from "react";

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
          <h1 className="font-weight-bold text-dark">Our Products</h1>
          <p className="lead">We provide the best products</p>
        </div>
      </div>

      <div className="container py-5">
        <h3 className="text-dark"> Search Products</h3>
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
        <div className="mb-4">
          <h3 className="text-dark">Product Categories</h3>
          {categories?.map((category) => {
            return (
              <Link
                href="/produk/kategori/[id]"
                as={`/produk/kategori/${category.slug}`}
                key={category.id}
              >
                <a>
                  <h4 className="badge badge-secondary mr-1">
                    {category.nama}
                  </h4>
                </a>
              </Link>
            );
          })}
        </div>
        <div className="row">
          {filterProduct.length
            ? filterProduct?.map((product) => {
                return <ProductList key={product.id} product={product} />;
              })
            : products.map((product) => {
                return <ProductList key={product.id} product={product} />;
              })}
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
