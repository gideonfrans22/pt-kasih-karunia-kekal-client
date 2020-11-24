const Footer = () => {
  return (
    <footer>
      <div className="gray-light py-5">
        <div className="container text-center">
          <h3 className="text-dark font-weight-bold">Still Having Trouble and Need Customer Service ?</h3>
          <a
            href={`https://api.whatsapp.com/send?phone=62818961343&text=${"Halo , saya tertarik dengan tower crane yang bapak miliki http://zzf.co.id"}`}
            className="btn btn-lg btn-danger py-2 text-white font-weight-bold px-5 mt-3"
          >
            WHATSAPP
          </a>
        </div>
      </div>
      <div className="container mt-4">
        <h4 className="font-weight-bold text-dark">PT ZZF Industri Indonesia</h4>
        <p>
          ZZF Industri Indonesia that started operating on 2012 is one of an
          upgrowing company from CHINA ZZF INDUSRTRIAL Expanding project. This
          Company offers a lot of equipments especially in Costruction
          materials, such as Tower Crane, Batching Plants, and any others. We
          also guarantee that the products and materials that we provide is one
          of the best and qualifed product from China, with a great quality
          indeed.
        </p>
      </div>
      <div className="container py-3 border-top">
        &copy; ZZF INDUSTRI INDONESIA 2012 - {new Date().getFullYear()}. Hak
      </div>
    </footer>
  );
};

export default Footer;
