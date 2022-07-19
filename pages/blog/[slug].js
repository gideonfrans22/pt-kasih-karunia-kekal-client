import { NextSeo } from "next-seo";
import { clientAxios, baseURL } from "../../client";
import Lightbox from "react-image-lightbox";
import { useState } from "react";
import Link from "next/link";
const ReactMarkdown = require("react-markdown");
const numeral = require("numeral");
const moment = require("moment");
require("moment/locale/id");
moment.locale("id");
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

function Movie({ blog, offices }) {
  const SEO = {
    title: `PT Kasih Karunia Kekal | ${blog.judul}`,
    description: blog.deskripsi_singkat,

    openGraph: {
      title: `PT Kasih Karunia Kekal | ${blog.judul}`,
      description: blog.deskripsi_singkat,
    },
  };

  const [photoIndex, setPhotoIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <NextSeo {...SEO} />
      <div
        className="jumbotron jumbotron-fluid mb-0 d-flex align-items-center"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(76, 175, 80, 0.7), rgba(114, 199, 117, 0.4)), url(${baseURL}${blog.thumbnail.url})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          minHeight: 300,
        }}
      >
        <div className="text-white container text-center">
          <h1 className="font-weight-bold">{blog.judul}</h1>
          <p className="lead m-0">
            Diposting {moment(blog.created_at).fromNow()}
          </p>
          <small>{moment(blog.created_at).format("dddd, d MMMM YYYY")}</small>
        </div>
      </div>
      <div className="container py-5">
        <ReactMarkdown
          source={blog.konten.replace(
            "/uploads",
            "https://admin.kasihkaruniakekalpt.com/uploads"
          )}
        />
      </div>
    </>
  );
}

export async function getServerSideProps({ query: { slug } }) {
  const res = await clientAxios(`/blogs?slug=${slug}`);

  return {
    props: {
      blog: res.data[0] || null,
    },
  };
}

export default Movie;
