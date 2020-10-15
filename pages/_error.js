const { default: Link } = require("next/link");

const _error = () => {
  return (
    <div className="text-center vh-80">
      <div>
        <img
          src="/img/undraw_medical_care_movn.png"
          alt="medical"
          height="400px"
        />
        <h1 className="text-primary font-weight-bold">Kamu hilang arah?</h1>
        <Link href="/produk">
          <a className="btn orange text-white btn-lg rounded-pill px-5 mb-5">
            Lihat Produk
          </a>
        </Link>
      </div>
    </div>
  );
};

export default _error;
