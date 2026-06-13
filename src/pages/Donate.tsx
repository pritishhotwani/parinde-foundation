import qr from "../assets/donate-qr.jpg";

export default function Donate() {
  return (
    <section className="page-section">
      <div className="container">

        <h1 className="page-title">
          Support A Child's Future
        </h1>

        <p className="page-subtitle">
          Every contribution helps us bring education,
          mentorship, dignity and opportunity to children
          who deserve the chance to learn and dream.
        </p>

        {/* MAIN DONATION SECTION */}

        <div
          style={{
            marginTop: "70px",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "40px",
            alignItems: "center"
          }}
          className="donation-grid"
        >

          {/* LEFT */}

          <div className="liquid-card">

            <h2
              style={{
                marginBottom: "25px"
              }}
            >
              Your Donation Creates Impact
            </h2>

            <div
              style={{
                display: "grid",
                gap: "18px",
                lineHeight: "1.8"
              }}
            >

              <p>📚 Educational resources for children</p>

              <p>🎒 Learning materials and supplies</p>

              <p>👩‍🏫 Community teaching sessions</p>

              <p>🩷 Menstrual hygiene awareness drives</p>

              <p>🌱 Long-term educational opportunities</p>

              <p>🕊️ Support for underserved communities</p>

            </div>

          </div>

          {/* RIGHT */}

          <div className="card">

            <img
              src={qr}
              alt="Donate QR Code"
              style={{
                width: "100%",
                maxWidth: "350px",
                display: "block",
                margin: "0 auto",
                borderRadius: "30px"
              }}
            />

            <h2
              style={{
                textAlign: "center",
                marginTop: "25px"
              }}
            >
              Scan To Donate
            </h2>

            <p
              style={{
                textAlign: "center",
                marginTop: "15px",
                color: "#7a6a66"
              }}
            >
              Every contribution, big or small,
              helps create opportunities for children.
            </p>

          </div>

        </div>

        {/* IMPACT SECTION */}

        <div
          style={{
            marginTop: "90px"
          }}
        >

          <div className="card">

            <h2
              style={{
                textAlign: "center",
                marginBottom: "40px"
              }}
            >
              What Your Support Helps Achieve
            </h2>

            <div className="stats">

              <div className="card">
                <h2>25+</h2>
                <p>Teaching Sessions</p>
              </div>

              <div className="card">
                <h2>45+</h2>
                <p>Children Engaged</p>
              </div>

              <div className="card">
                <h2>4</h2>
                <p>Communities Reached</p>
              </div>

              <div className="card">
                <h2>600+</h2>
                <p>Pads Distributed</p>
              </div>

            </div>

          </div>

        </div>

        {/* MESSAGE */}

        <div
          style={{
            marginTop: "80px"
          }}
        >

          <div className="liquid-card">

            <h2
              style={{
                textAlign: "center",
                marginBottom: "25px"
              }}
            >
              Every Child Deserves A Chance
            </h2>

            <p
              style={{
                textAlign: "center",
                maxWidth: "800px",
                margin: "0 auto",
                lineHeight: "2"
              }}
            >
              Your generosity helps us continue our mission
              of providing education, mentorship and support
              to children who need it most. Together, we can
              build a future where every child has the
              opportunity to learn, grow and dream.
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}