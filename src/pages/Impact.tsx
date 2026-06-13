export default function Impact() {
  const stories = [
    {
      title: "Our First Session",
      text: "The beginning of Parinde's journey towards educational impact.",
      link: "https://www.instagram.com/p/DWEP7_OCewI/"
    },
    {
      title: "One Session Can't Make A Difference. But Many Can.",
      text: "Consistent efforts create lasting change in children's lives.",
      link: "https://www.instagram.com/p/DWOuPPlCaP3/"
    },
    {
      title: "Menstrual Drive",
      text: "Promoting dignity, awareness and health through menstrual education.",
      link: "https://www.instagram.com/p/DW1s_huCSiE/"
    },
    {
      title: "Menstrual Drive Part 2",
      text: "Over 600+ sanitary pads distributed to support young girls.",
      link: "https://www.instagram.com/p/DW6hv-TEzyI/"
    },
    {
      title: "Featured Article",
      text: "Not all birds fly — but they still deserve wings.",
      link: "https://www.instagram.com/p/DXlpYpGk_5V/"
    },
    {
      title: "Mansarovar Session",
      text: "Taking education directly into the community.",
      link: "https://www.instagram.com/p/DYZ2CN2mPwy/"
    }
  ];

  return (
    <section className="page-section">
      <div className="container">

        <h1 className="page-title">
          Our Impact
        </h1>

        <p className="page-subtitle">
          Every session, every volunteer and every child
          represents a step toward a more equitable future.
        </p>

        <div
          style={{
            marginTop: "70px"
          }}
          className="stats"
        >

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

        <div
          style={{
            marginTop: "80px",
            display: "grid",
            gap: "30px"
          }}
        >

          {stories.map((story) => (
            <div
              key={story.title}
              className="card"
            >

              <h2>{story.title}</h2>

              <p
                style={{
                  marginTop: "15px",
                  lineHeight: "1.8"
                }}
              >
                {story.text}
              </p>

              <a
                href={story.link}
                target="_blank"
                rel="noreferrer"
                className="btn btn-secondary"
                style={{
                  marginTop: "20px"
                }}
              >
                View Story
              </a>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}