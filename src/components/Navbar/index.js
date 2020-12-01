import React from "react";
import { Link } from "react-router-dom";
import { Nav, Navbar } from "react-bootstrap";
import "./style.css";

function RespNavbar() {
  // Allows name as a link only if not on home page
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
      <Navbar collapseOnSelect bg="dark" variant="dark" expand="md">
        <Name />

        <Navbar.Toggle aria-controls="collapsibleNavbar" />
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
            <Nav.Link as={Link} to="/resume">
              Resume
            </Nav.Link>
            <Nav.Link as={Link} to="/projects">
              Projects
            </Nav.Link>
            <Nav.Link as={Link} to="/contact">
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
}

export default RespNavbar;
