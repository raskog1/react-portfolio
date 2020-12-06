import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Nav, Navbar } from "react-bootstrap";
import "./style.css";

function RespNavbar() {
  const [expanded, setExpanded] = useState(false);

  // Allows name as a link only if not on home page
  const Name = () => {
    if (window.location.pathname === "/") {
      return <h1>Ryan Skog</h1>;
    } else {
      return (
        <Nav.Link as={Link} to="/">
          <h1 className="name-hover">Ryan Skog</h1>
        </Nav.Link>
      );
    }
  };

  const outsideClick = (e) => {
    const dropdown = document.getElementById("dropdown");
    if (e.target !== dropdown && !dropdown.contains(e.target)) {
      console.log("clicked out");
      closeAndDelete();
    }
  };

  const clickOut = () => {
    if (expanded) {
      closeAndDelete();
    } else {
      document.addEventListener("click", outsideClick);
    }
    setExpanded(!expanded);
  };

  const removeClickListener = () => {
    document.removeEventListener("click", outsideClick);
  };

  const closeAndDelete = () => {
    setExpanded(false);
    removeClickListener();
  };

  return (
    <div id="dropdown">
      <header className="bg-dark">
        <Navbar
          // collapseOnSelect
          expanded={expanded}
          bg="dark"
          variant="dark"
          expand="md"
        >
          <Name />
          <Navbar.Toggle aria-controls="collapsibleNavbar" onClick={clickOut} />
          <Navbar.Collapse id="collapsibleNavbar">
            {/* Navbar links */}
            <Nav className="folio-pages">
              <Nav.Link
                href="https://www.linkedin.com/in/ryan-skog-b4b6411aa/"
                className="header-icons"
                rel="noopener noreferrer"
                target="_blank"
              >
                <i className="fa fa-linkedin fa-2x" aria-hidden="true" />
              </Nav.Link>
              <Nav.Link
                href="https://github.com/raskog1"
                className="header-icons"
                rel="noopener noreferrer"
                target="_blank"
              >
                <i className="fa fa-github fa-2x" aria-hidden="true" />
              </Nav.Link>
              <Nav.Link as={Link} to="/" onClick={closeAndDelete}>
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/resume" onClick={closeAndDelete}>
                Resume
              </Nav.Link>
              <Nav.Link as={Link} to="/projects" onClick={closeAndDelete}>
                Projects
              </Nav.Link>
              <Nav.Link as={Link} to="/contact" onClick={closeAndDelete}>
                Contact
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </header>
    </div>
  );
}

export default RespNavbar;
