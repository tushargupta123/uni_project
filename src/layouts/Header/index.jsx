import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Header() {
  const { selectedType } = useSelector((state) => state.auth);
  return (
    <div>
      <Navbar bg="light" expand="lg" className="shadow">
        <Navbar.Brand className="m_l_" href="#home">LLC</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse
          id="basic-navbar-nav"
          className="d-flex flex-column flex-lg-row justify-content-between"
        >
          <Nav className="me-auto">
            <Link to="/" className="nav-link">
              Home
            </Link>
            <Link to="/about" className="nav-link">
              About
            </Link>

            {/* pool */}
            {selectedType === "pool" ? (
              <>
                <Link to="/api" className="nav-link">
                  API
                </Link>
                <Link to="/contact" className="nav-link">
                  Contact
                </Link>
                <Link to="/Dashboard" className="nav-link">
                  Dashboard
                </Link>
                <Link to="/payment" className="nav-link">
                  Payment
                </Link>
                <Link to="/escrow" className="nav-link">
                  Escrow
                </Link>
              </>
            ) : null}

            {/* participant */}
            {selectedType === "participant" ? (
              <>
                <Link to="/payment" className="nav-link">
                  Payment
                </Link>
                <Link to="/verification" className="nav-link">
                  Verification
                </Link>
                <Link to="/pool_articipant" className="nav-link">
                  Pools and Participants
                </Link>
                <Link to="/pleging" className="nav-link">
                  Pleging
                </Link>
              </>
            ) : null}
          </Nav>

          {/* accept */}
          {selectedType === "accept" ? (
            <Link to="/login" type="button" className="btn btn-dark m_r">
              Login
            </Link>
          ) : null}

          {/* decline */}
          {selectedType === "decline" ? (
            <Link to="/sign-up" type="button" className="btn btn-dark m_r">
              Let's Start
            </Link>
          ) : null}
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default Header;
