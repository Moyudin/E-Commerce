import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Badge, Container, Nav, Navbar, NavbarToggle } from "react-bootstrap";
import { FaShoppingCart, FaUser } from "react-icons/fa";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";

const Header = () => {
  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="/">Urbanshop</Navbar.Brand>
          <NavbarToggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="gap-4">
              <NavLink to="/Cart" className="img-fluid text-black">
                <FaShoppingCart />
                <sup>
                  <Badge bg="secondary">0</Badge>
                </sup>
              </NavLink>
              <NavLink
                to="/SignIN"
                className="img-fluid text-black text-decoration-none"
              >
                <FaUser />
                <span className="ms-1">Sign In</span>
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
