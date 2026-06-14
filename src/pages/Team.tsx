export default function Team() {
  const teamMembers = [
    {
      name: "Advika Maheshwari",
      role: "On Site Teaching Incharge",
      icon: "📚"
    },
    {
      name: "Pari Meheta",
      role: "On site Teaching Incharge",
      icon: "📚"
    },
    {
      name: "Himakshi Tak",
      role: "On Site Teaching Incharge",
      icon: "📚"
    },
    {
      name: "Naisha Chordia",
      role: "Social Media & Content Incharge",
      icon: "📱"
    },
    {
      name: "Araina Agarwal",
      role: "Social Media & Content Incharge",
      icon: "📱"
    },
    {
      name: "Devyansh Prajapati",
      role: "Outreach & Partnership Incharge",
      icon: "🤝"
    },
    {
      name: "Daksh Agarwal",
      role: "Outreach & Partnership Incharge",
      icon: "🤝"
    },
    {
      name:"Pritish Rajkumar Hotwani",
      role:"Web Developer & Technical Lead",
      icon:"💻"
    }
  ];

  return (
    <section className="page-section">
      <div className="container">

        <h1 className="page-title">
          Meet Our Team
        </h1>

        <p className="page-subtitle">
          Behind every session, every initiative and every
          success story is a passionate team committed to
          creating opportunities for children.
        </p>

        <div
          className="story-grid"
          style={{
            marginTop: "70px"
          }}
        >
          {teamMembers.map((member) => (
            <div
              key={member.name}
              className="liquid-card"
            >
              <div
                style={{
                  fontSize: "3rem",
                  marginBottom: "20px"
                }}
              >
                {member.icon}
              </div>

              <h2
                style={{
                  marginBottom: "15px"
                }}
              >
                {member.name}
              </h2>

              <p
                style={{
                  color: "#7a6a66",
                  lineHeight: "1.8"
                }}
              >
                {member.role}
              </p>
            </div>
          ))}
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
              Together We Create Impact
            </h2>

            <p
              style={{
                textAlign: "center",
                maxWidth: "800px",
                margin: "0 auto",
                lineHeight: "1.9"
              }}
            >
              Our team works across education,
              outreach, partnerships and content
              creation to ensure that every child
              receives the support, encouragement
              and opportunities they deserve.
            </p>

          </div>
        </div>

      </div>
    </section>
  );
}