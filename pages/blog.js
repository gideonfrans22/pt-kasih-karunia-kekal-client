import { clientAxios, mediaURL } from "../client";
import Link from "next/link";

const blog = ({ page, blogs, blogCategories }) => {
  return (
    <main>
      <div className="jumbotron jumbotron-fluid mb-0 index-page">
        <div className="container">
          <h1>{page.judul_halaman}</h1>
          <p className="lead">{page.deskripsi_halaman}</p>
        </div>
      </div>

      <section className="my-4">
        <div className="container">
          <p>Pilih berdasarkan kategori dibawah.</p>
        </div>
        <div className="container">
          {blogCategories.map((category) => {
            return (
              <Link href="/blog/[slug]" key={category.id}>
                <a className="btn text-white orange btn-sm mr-3 d-inline-block">
                  {category.nama}
                </a>
              </Link>
            );
          })}
        </div>

        <div className="container mt-4">
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
                              src={mediaURL + blog.thumbnail.url}
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
                          {blog.deskripsi.length <= 60
                            ? blog.deskripsi
                            : blog.deskripsi.substr(0, 60) + "..."}
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
  );
};

export async function getServerSideProps() {
  const blogCategories = await clientAxios("/blog-categories");
  const blogs = await clientAxios("/blogs?_sort=created_at:DESC&populate=*");
  const page = await clientAxios("/pages?halaman=blog");

  return {
    props: {
      page: page.data[0],
      blogs: blogs.data,
      blogCategories: blogCategories.data,
    },
  };
}

export default blog;
