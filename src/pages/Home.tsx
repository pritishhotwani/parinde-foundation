import { Link } from "react-router-dom";
import logo from "../assets/Logo.png";
import firstSession from "../assets/first-session.jpg";
import menstrual from "../assets/Menstrual-drive.jpg";

export default function Home() {
  return (
    <>
      {/* HERO */}

      <section className="hero">
        <div className="container">

          <img
            src={logo}
            alt="Parinde Foundation"
          />

          <span className="hero-badge">
            🕊️ Youth-Led NGO
          </span>

          <h1>
            Every Child Deserves
            The Opportunity
            To Learn, Grow
            And Dream
          </h1>

          <p>
            Parinde Foundation is a youth-led initiative
            empowering underserved children through
            education, mentorship, community engagement,
            menstrual hygiene awareness and meaningful
            opportunities.
          </p>

          <div className="hero-buttons">
            <Link
              to="/volunteer"
              className="btn btn-primary"
            >
              Become a Volunteer
            </Link>

            <Link
              to="/donate"
              className="btn btn-secondary"
            >
              Donate Now
            </Link>
          </div>

        </div>
      </section>

      {/* IMPACT */}

      <section className="section">
        <div className="container">

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

</div>
        </div>
      </section>

      {/* VISION */}

      <section className="section">
        <div className="container">

          <div className="card">

            <h2
              style={{
                textAlign: "center",
                marginBottom: "20px"
              }}
            >
              Our Vision
            </h2>

            <p
              style={{
                textAlign: "center",
                maxWidth: "800px",
                margin: "0 auto",
                lineHeight: "1.9"
              }}
            >
              “A future where every child gets the chance
              to learn. Together we can change lives through
              education.”
            </p>

            <p
              style={{
                textAlign: "center",
                marginTop: "20px",
                color: "#8a6b72"
              }}
            >
              — Diva Jain & Palak Agarwal
            </p>

          </div>

        </div>
      </section>

      {/* FIRST SESSION */}

      <section className="section">
        <div className="container">

          <div className="card">

            <img
              src={firstSession}
              alt="First Session"
              style={{
                width: "100%",
                borderRadius: "30px",
                marginBottom: "25px"
              }}
            />

            <h2>Our First Session</h2>

            <p
              style={{
                marginTop: "15px",
                lineHeight: "1.8"
              }}
            >
              The beginning of Parinde's journey.
              A single teaching session sparked a mission
              that continues to impact children across
              multiple communities today.
            </p>

            <a
              href="https://www.instagram.com/p/DWEP7_OCewI/"
              target="_blank"
              rel="noreferrer"
              className="btn btn-secondary"
              style={{ marginTop: "20px" }}
            >
              View Story
            </a>

          </div>

        </div>
      </section>

      {/* MENSTRUAL DRIVE */}

      <section className="section">
        <div className="container">

          <div className="card">

            <img
              src={menstrual}
              alt="Menstrual Drive"
              style={{
                width: "100%",
                borderRadius: "30px",
                marginBottom: "25px"
              }}
            />

            <h2>Menstrual Hygiene Drive</h2>

            <p
              style={{
                marginTop: "15px",
                lineHeight: "1.8"
              }}
            >
              Through awareness and community support,
              Parinde distributed over 600+ sanitary pads,
              helping promote dignity, health and education
              among young girls.
            </p>

            <div
              style={{
                display: "flex",
                gap: "15px",
                flexWrap: "wrap",
                marginTop: "25px"
              }}
            >

              <a
                href="https://www.instagram.com/p/DW1s_huCSiE/"
                target="_blank"
                rel="noreferrer"
                className="btn btn-secondary"
              >
                Part 1
              </a>

              <a
                href="https://www.instagram.com/p/DW6hv-TEzyI/"
                target="_blank"
                rel="noreferrer"
                className="btn btn-primary"
              >
                Part 2
              </a>

            </div>

          </div>

        </div>
      </section>

      {/* COMMUNITIES */}

      <section className="section">
        <div className="container">

          <h2
            style={{
              textAlign: "center",
              marginBottom: "40px"
            }}
          >
            Communities We Reach
          </h2>

          <div className="stats">

            <div className="card">
              📍 Mansarovar
            </div>

            <div className="card">
              📍 Mansarovar VT Road
            </div>

            <div className="card">
              📍 Malviya Nagar
            </div>

            <div className="card">
              📍 VDN
            </div>

          </div>

        </div>
      </section>

      {/* FEATURED ARTICLE */}

      <section className="section">
        <div className="container">

          <div className="liquid-card">

            <h2
              style={{
                textAlign: "center",
                marginBottom: "20px"
              }}
            >
              Featured Article
            </h2>

            <p
              style={{
                textAlign: "center",
                maxWidth: "700px",
                margin: "0 auto 30px",
                lineHeight: "1.8"
              }}
            >
              “Not all birds fly — but they still deserve wings.”
            </p>

            <div
              style={{
                display: "flex",
                justifyContent: "center"
              }}
            >
              <a
                href="https://www.instagram.com/p/DXlpYpGk_5V/"
                target="_blank"
                rel="noreferrer"
                className="btn btn-primary"
              >
                Read Article
              </a>
            </div>

          </div>

        </div>
      </section>

      {/* CTA */}

      <section className="section">
        <div className="container">

          <div className="liquid-card">

            <h2
              style={{
                textAlign: "center",
                marginBottom: "20px"
              }}
            >
              Join The Movement
            </h2>

            <p
              style={{
                textAlign: "center",
                maxWidth: "700px",
                margin: "0 auto 30px"
              }}
            >
              Whether through volunteering,
              donations or partnerships,
              every contribution helps create
              opportunities for children.
            </p>

            <div
              style={{
                display: "flex",
                justifyContent: "center",
                gap: "20px",
                flexWrap: "wrap"
              }}
            >

              <Link
                to="/volunteer"
                className="btn btn-primary"
              >
                Volunteer
              </Link>

              <Link
                to="/donate"
                className="btn btn-secondary"
              >
                Donate
              </Link>

            </div>

          </div>

        </div>
      </section>
    </>
  );
}