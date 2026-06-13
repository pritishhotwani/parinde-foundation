export default function About() {
  return (
    <section className="page-section">
      <div className="container">

        <h1 className="page-title">
          About Parinde Foundation
        </h1>

        <p className="page-subtitle">
          A youth-led initiative dedicated to creating
          educational opportunities, confidence and hope
          for underserved children.
        </p>

        <div
          style={{
            marginTop: "60px",
            display: "grid",
            gap: "30px"
          }}
        >

          <div className="card">
            <h2>Who We Are</h2>

            <p
              style={{
                marginTop: "20px",
                lineHeight: "1.9"
              }}
            >
              Parinde Foundation is a youth-driven NGO
              working to bridge educational gaps and
              create opportunities for children from
              underserved communities.

              Through teaching sessions, mentorship,
              awareness drives and community engagement,
              we strive to create meaningful and lasting
              impact.
            </p>
          </div>

          <div className="card">
            <h2>Our Vision</h2>

            <p
              style={{
                marginTop: "20px",
                lineHeight: "1.9"
              }}
            >
              A future where every child gets the chance
              to learn. Together we can change lives
              through education.
            </p>
          </div>

          <div className="card">
            <h2>Our Mission</h2>

            <p
              style={{
                marginTop: "20px",
                lineHeight: "1.9"
              }}
            >
              We aim to empower children through
              education, confidence-building,
              mentorship and opportunities that
              help them realize their full potential.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}