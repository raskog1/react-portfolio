import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function Navbar() {
  const Name = () => {
    if (window.location.pathname === "/") {
      return <h1>Ryan Skog</h1>;
    } else {
      return (
        <Link to="/">
          <h1 className="name-hover">Ryan Skog</h1>
        </Link>
      );
    }
  };

  return (
    <header className="bg-dark">
      <nav className="navbar navbar-expand-md bg-dark navbar-dark">
        <Name />

        {/* Toggler/collapsibe Button */}
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#collapsibleNavbar"
          aria-controls="#collapsibleNavbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        {/* Navbar links */}
        <div className="collapse navbar-collapse" id="collapsibleNavbar">
          <ul className="navbar-nav">
            {/* LinkedIn Icon */}
            <li>
              <a
                className="header-icons"
                href="https://www.linkedin.com/in/ryan-skog-b4b6411aa/"
                rel="noopener noreferrer"
                target="_blank"
              >
                <i className="fa fa-linkedin fa-2x" aria-hidden="true" />
              </a>
            </li>

            {/* Github Icon */}
            <li>
              <a
                className="header-icons"
                href="https://github.com/raskog1"
                rel="noopener noreferrer"
                target="_blank"
              >
                <i className="fa fa-github fa-2x" aria-hidden="true" />
              </a>
            </li>

            <li className="nav-item">
              <Link to="/resume" className="nav-link">
                Resume
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/projects" className="nav-link">
                Projects
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="nav-link">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
