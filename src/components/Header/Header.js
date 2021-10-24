import Button from "@restart/ui/esm/Button";
import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import img from "../../../src/images/logo.png";
import "./Header.css";
import useAuth from "./../../hooks/useAuth";

const Header = () => {
  const { user, logOut } = useAuth();

  return (
    <div className="bar">
      <Navbar
        bg="black"
        variant="dark"
        collapseOnSelect
        expand="lg"
        sticky="top"
      >
        <Container>
          <Navbar.Brand>
            <Link to="/">
              <img
                alt="logo"
                src={img}
                width="50"
                height="50"
                className="d-inline-block align-top"
              />
            </Link>
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
              <Nav.Link className="link" as={Link} to="/contactus">
                Contact Us
              </Nav.Link>
            </Nav>
            {!user.email ? (
              <Nav.Link className="link" as={Link} to="/registration">
                Register / Login
              </Nav.Link>
            ) : (
              <div>
                <Navbar.Text className="me-2 link">
                  {user?.displayName}
                </Navbar.Text>
                <Link to="">
                  <Button onClick={logOut} className="logout">
                    Log Out
                  </Button>
                </Link>
              </div>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
