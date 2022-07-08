import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Header() {
  const { selectedType } = useSelector((state) => state.auth);
  return (
    <div>
      <Navbar bg="light" expand="lg" className="shadow" >
        <Link className="logo" to="/">LLC</Link>
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

            {selectedType === "pool" || selectedType === "participant" ? (
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
                <Link to="/order" className="nav-link">
                  Order
                </Link>
                <Link to="/escrow" className="nav-link">
                  Escrow
                </Link>
                <Link to="/escrow_account" className="nav-link">
                  Escrow account status
                </Link>
                <Link to="/pool_participant" className="nav-link">
                  Pool and Participants
                </Link>
                <Link to="/" type="button" className="btn btn-dark m_l_" onClick={() => {
                  localStorage.removeItem("temitope");
                }} >
                  Sign Out
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
