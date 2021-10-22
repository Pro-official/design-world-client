import Button from "@restart/ui/esm/Button";
import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import img from "../../../src/images/logo.png";
import "./Header.css";

const Header = () => {
  return (
    <div className="bar">
      <Navbar
        bg="black"
        variant="dark"
        collapseOnSelect
        expand="lg"
        fixed="top"
      >
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt="logo"
              src={img}
              width="50"
              height="50"
              className="d-inline-block align-top"
            />{" "}
          </Navbar.Brand>
          <Navbar.Toggle
            Navbar-light
            className="toggle"
            aria-controls="responsive-navbar-nav"
          />
          <Navbar.Collapse
            id="responsive-navbar-nav"
            className="justify-content-end"
          >
            <Nav className="me-auto">
              <Nav.Link className="link" as={Link} to="/home">
                Home
              </Nav.Link>
              <Nav.Link className="link" as={Link} to="/about">
                About
              </Nav.Link>
              <Nav.Link className="link" as={Link} to="/pricing">
                Pricing
              </Nav.Link>
              <Nav.Link className="link" as={Link} to="/login">
                Login
              </Nav.Link>
              <Nav.Link className="link" as={Link} to="/registration">
                Register
              </Nav.Link>
            </Nav>

            <Navbar.Text className="me-2 link">Mark Otto</Navbar.Text>
            <Link>
              <Button className="logout">Log Out</Button>
            </Link>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
