import qr from "../assets/donate-qr.jpeg";

export default function Donate() {
  return (
    <section className="page-section">
      <div className="container">

        <h1
          className="page-title"
          style={{
            textAlign: "center",
            marginBottom: "40px"
          }}
        >
          Scan To Donate
        </h1>

        <div
          className="card"
          style={{
            maxWidth: "450px",
            margin: "0 auto",
            textAlign: "center"
          }}
        >
          <img
            src={qr}
            alt="Donate QR Code"
            style={{
              width: "100%",
              borderRadius: "30px"
            }}
          />
        </div>

      </div>
    </section>
  );
}
