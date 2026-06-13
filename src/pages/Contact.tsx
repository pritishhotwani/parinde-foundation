export default function Contact() {
  return (
    <section className="page-section">
      <div className="container">

        <h1 className="page-title">
          Get In Touch
        </h1>

        <p className="page-subtitle">
          We'd love to hear from you. Whether you want
          to volunteer, partner with us, support our
          initiatives or simply learn more about Parinde.
        </p>

        <div
          className="story-grid"
          style={{
            marginTop: "70px"
          }}
        >

          <div className="liquid-card">
            <h2>📧 Email</h2>

            <p
              style={{
                marginTop: "20px",
                lineHeight: "1.8"
              }}
            >
              Reach out to us directly for volunteering,
              partnerships, donations or general inquiries.
            </p>

            <a
              href="mailto:parindefoundation11@gmail.com"
              className="btn btn-primary"
              style={{
                marginTop: "25px"
              }}
            >
              Send Email
            </a>

            <p
              style={{
                marginTop: "20px",
                color: "#7a6a66"
              }}
            >
              parindefoundation11@gmail.com
            </p>

          </div>

          <div className="liquid-card">
            <h2>📱 Instagram</h2>

            <p
              style={{
                marginTop: "20px",
                lineHeight: "1.8"
              }}
            >
              Follow our journey, community sessions,
              impact stories and latest initiatives.
            </p>

            <a
              href="https://www.instagram.com/parinde.foundation/"
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary"
              style={{
                marginTop: "25px"
              }}
            >
              Visit Instagram
            </a>

            <p
              style={{
                marginTop: "20px",
                color: "#7a6a66"
              }}
            >
              @parinde.foundation
            </p>

          </div>

        </div>

        <div
          style={{
            marginTop: "80px"
          }}
        >

          <div className="card">

            <h2
              style={{
                textAlign: "center",
                marginBottom: "20px"
              }}
            >
              Let's Create Change Together
            </h2>

            <p
              style={{
                textAlign: "center",
                maxWidth: "800px",
                margin: "0 auto",
                lineHeight: "2"
              }}
            >
              Every volunteer, donor and supporter
              helps bring us one step closer to a future
              where every child has access to education,
              opportunity and hope.
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}