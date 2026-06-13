export default function Founders() {
  return (
    <section className="page-section">
      <div className="container">

        <h1 className="page-title">
          Meet Our Founders
        </h1>

        <p className="page-subtitle">
          Two young changemakers united by a shared vision:
          making education accessible to every child.
        </p>

        {/* Founders */}

        <div
          style={{
            marginTop: "70px",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))",
            gap: "30px"
          }}
        >

          <div className="liquid-card">
            <h2>Diva Jain</h2>

            <p
              style={{
                marginTop: "20px",
                lineHeight: "1.8"
              }}
            >
              Co-Founder of Parinde Foundation.
              Driven by the belief that education can
              transform lives, Diva has helped lead
              initiatives focused on teaching,
              community engagement and creating
              opportunities for children.
            </p>
          </div>

          <div className="liquid-card">
            <h2>Palak Agarwal</h2>

            <p
              style={{
                marginTop: "20px",
                lineHeight: "1.8"
              }}
            >
              Co-Founder of Parinde Foundation.
              Passionate about social impact and youth
              leadership, Palak has played a key role
              in building Parinde's vision and expanding
              its outreach to communities.
            </p>
          </div>

        </div>

        {/* Quote */}

        <div
          style={{
            marginTop: "80px"
          }}
        >

          <div className="card">

            <h2
              style={{
                textAlign: "center",
                marginBottom: "25px"
              }}
            >
              Founders' Vision
            </h2>

            <p
              style={{
                textAlign: "center",
                maxWidth: "800px",
                margin: "0 auto",
                fontSize: "1.15rem",
                lineHeight: "2"
              }}
            >
              “A future where every child gets the chance
              to learn. Together we can change lives
              through education.”
            </p>

            <p
              style={{
                textAlign: "center",
                marginTop: "25px",
                color: "#8a6b72"
              }}
            >
              — Diva Jain & Palak Agarwal
            </p>

          </div>

        </div>

        {/* Values */}

        <div
          style={{
            marginTop: "80px"
          }}
          className="stats"
        >

          <div className="card">
            <h2>📚</h2>
            <p>Education</p>
          </div>

          <div className="card">
            <h2>🤝</h2>
            <p>Community</p>
          </div>

          <div className="card">
            <h2>🌱</h2>
            <p>Growth</p>
          </div>

          <div className="card">
            <h2>🕊️</h2>
            <p>Opportunity</p>
          </div>

        </div>

      </div>
    </section>
  );
}