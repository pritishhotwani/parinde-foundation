export default function Volunteer() {
  return (
    <section className="page-section">
      <div className="container">

        <h1 className="page-title">
          Become A Volunteer
        </h1>

        <p className="page-subtitle">
          Join a passionate team of young changemakers
          working to make education more accessible for
          children across communities.
        </p>

        {/* HERO CARD */}

        <div
          style={{
            marginTop: "70px"
          }}
        >

          <div className="liquid-card">

            <h2
              style={{
                textAlign: "center",
                marginBottom: "25px"
              }}
            >
              Why Volunteer With Parinde?
            </h2>

            <div
              style={{
                maxWidth: "800px",
                margin: "0 auto",
                lineHeight: "2"
              }}
            >

              <p>📚 Help children learn and grow</p>

              <p>🤝 Work with a passionate youth-led team</p>

              <p>🌱 Create meaningful community impact</p>

              <p>🎯 Develop leadership and communication skills</p>

              <p>🕊️ Become part of a mission bigger than yourself</p>

            </div>

          </div>

        </div>

        {/* ROLES */}

        <div
          style={{
            marginTop: "80px"
          }}
          className="story-grid"
        >

          <div className="card">
            <h2>📚 Teaching</h2>

            <p
              style={{
                marginTop: "15px",
                lineHeight: "1.8"
              }}
            >
              Conduct engaging educational sessions and
              support children in their learning journey.
            </p>
          </div>

          <div className="card">
            <h2>📱 Content & Media</h2>

            <p
              style={{
                marginTop: "15px",
                lineHeight: "1.8"
              }}
            >
              Help document impact stories, create content
              and spread awareness through social media.
            </p>
          </div>

          <div className="card">
            <h2>🤝 Outreach</h2>

            <p
              style={{
                marginTop: "15px",
                lineHeight: "1.8"
              }}
            >
              Build partnerships, connect with supporters
              and help expand Parinde's reach.
            </p>
          </div>

        </div>

        {/* FORM CTA */}

        <div
          style={{
            marginTop: "90px"
          }}
        >

          <div className="card">

            <h2
              style={{
                textAlign: "center",
                marginBottom: "20px"
              }}
            >
              Ready To Join Us?
            </h2>

            <p
              style={{
                textAlign: "center",
                maxWidth: "700px",
                margin: "0 auto 35px",
                lineHeight: "1.9"
              }}
            >
              Fill out our volunteer application form and
              become part of a movement dedicated to
              education, opportunity and hope.
            </p>

            <div
              style={{
                display: "flex",
                justifyContent: "center"
              }}
            >

              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSdb1KO3aN13ultFeF752_qkujx-AEVXSyfh0JHwk00HxKu4rw/viewform"
                target="_blank"
                rel="noreferrer"
                className="btn btn-primary"
              >
                Apply Now
              </a>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}