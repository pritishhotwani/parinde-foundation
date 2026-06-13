export default function Footer() {
  return (
    <footer className="footer">

      <div className="container">

        <div className="footer-grid">

          <div>
            <h3>🕊️ Parinde Foundation</h3>

            <p>
              Empowering children through education,
              opportunity and community impact.
            </p>
          </div>

          <div>
            <h3>Quick Links</h3>

            <a href="/">Home</a>
            <a href="/about">About</a>
            <a href="/impact">Impact</a>
            <a href="/volunteer">Volunteer</a>
          </div>

          <div>
            <h3>Connect</h3>

            <a
              href="mailto:parindefoundation11@gmail.com"
            >
              Email Us
            </a>

            <a
              href="https://www.instagram.com/parinde.foundation/"
              target="_blank"
              rel="noreferrer"
            >
              Instagram
            </a>
          </div>

        </div>

        <div className="footer-quote">

          <p>
            “A future where every child gets the chance
            to learn. Together we can change lives
            through education.”
          </p>

          <span>
            — Diva Jain & Palak Agarwal
          </span>

        </div>

        <div className="footer-bottom">

          <p>
            © {new Date().getFullYear()} Parinde Foundation.
            All Rights Reserved.
          </p>

          <p>
            Website created by
            {" "}
            <strong>
              Pritish Rajkumar Hotwani
            </strong>
          </p>

        </div>

      </div>

    </footer>
  );
}