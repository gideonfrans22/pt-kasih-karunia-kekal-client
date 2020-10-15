const Footer = () => {
  return (
    <footer>
      <div className="orange-light py-5">
        <div className="container text-center">
          <h3>Masih kesulitan dan membutuhkan bantuan Customer Service?</h3>
          <a
            href={`https://api.whatsapp.com/send?phone=628121103829&text=${"Halo Admin PT Kasih Karunia Kekal"}`}
            className="btn btn-lg orange text-white rounded-pill font-weight-bold px-5 mt-3"
          >
            WHATSAPP
          </a>
        </div>
      </div>
      <div className="container mt-4">
        <h4 className="font-weight-bold">PT KASIH KARUNIA KEKAL</h4>
        <p>
          Distributor resmi, toko spesialis jual alat kesehatan, alat
          kedokteran, dan alat medis standar rumah sakit yang menjual dengan
          harga murah dan bergaransi resmi
        </p>
      </div>
      <div className="container py-3 border-top">
        &copy; PT. KASIH KARUNIA KEKAL 1999 - {new Date().getFullYear()}. Hak
        Cipta dilindungi oleh Undang-undang.
      </div>
    </footer>
  );
};

export default Footer;
