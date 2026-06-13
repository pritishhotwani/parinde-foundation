import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();

  const isActive = (path: string) =>
    location.pathname === path;

  return (
    <nav className="navbar">
      <div className="container nav-content">

        <Link
          to="/"
          className="logo-text"
        >
          🕊️ Parinde Foundation
        </Link>

        <div className="nav-links">

          <Link
            className={isActive("/") ? "active-link" : ""}
            to="/"
          >
            Home
          </Link>

          <Link
            className={isActive("/about") ? "active-link" : ""}
            to="/about"
          >
            About
          </Link>

          <Link
            className={isActive("/impact") ? "active-link" : ""}
            to="/impact"
          >
            Impact
          </Link>

          <Link
            className={isActive("/founders") ? "active-link" : ""}
            to="/founders"
          >
            Founders
          </Link>

          <Link
            className={isActive("/team") ? "active-link" : ""}
            to="/team"
          >
            Team
          </Link>

          <Link
            className={isActive("/volunteer") ? "active-link" : ""}
            to="/volunteer"
          >
            Volunteer
          </Link>

          <Link
            className={isActive("/contact") ? "active-link" : ""}
            to="/contact"
          >
            Contact
          </Link>

          <Link
            to="/donate"
            className="donate-btn"
          >
            Donate
          </Link>

        </div>
      </div>
    </nav>
  );
}