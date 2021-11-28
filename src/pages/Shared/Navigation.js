import React from "react";
import logo from "../../images/Group.png";
import { Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const NavStyle = {
  backgroundColor: "#B22121",
  displau: "flex",
  alignItems: "center",
  //   margin: "0 30px",
};
const NavLinks = {
  marginTop: "8px",
  color: "white",
  textDecoration: "none",
  fontSize: "1rem",
  fontWeight: 600,
  marginRight: "20px",
};
const DashButton = {
  backgroundColor: "transparent",
  color: "white",
  fontWeight: 600,
  border: "1px solid white",
  padding: "0 10px",
  height: "40px",
  borderRadius: "15px",
  marginRight: "20px",
};
const LogButton = {
  backgroundColor: "white",
  color: "#B22121",
  fontWeight: 600,
  border: "1px solid white",
  padding: "0 15px",
  height: "40px",
  borderRadius: "15px",
  marginRight: "20px",
};

const Navigation = () => {
  return (
    <div style={NavStyle}>
      <Navbar collapseOnSelect expand="lg" className="ms-5 me-5">
        <NavLink to="/home">
          <Navbar.Brand className="text-white">
            <img
              src={logo}
              width="100"
              height="46"
              className="d-inline-block align-top"
              alt="logo"
            />
          </Navbar.Brand>
        </NavLink>
        <Navbar.Toggle
          className="text-white"
          aria-controls="responsive-navbar-nav"
        />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <NavLink style={NavLinks} to="/home">
              HOME
            </NavLink>
            <NavLink to="#">
              <button style={LogButton}>Logout</button>
            </NavLink>

            <NavLink style={NavLinks} to="/explore">
              EXPLORE
            </NavLink>
            <NavLink style={NavLinks} to="/findwork">
              FIND WORK
            </NavLink>
            <NavLink style={NavLinks} to="/learndesign">
              LEARN DESIGN
            </NavLink>
            <NavLink to="/dashboard">
              <button style={DashButton}>Dashboard</button>
            </NavLink>
            <NavLink to="/login">
              <button style={LogButton}>Login</button>
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Navigation;
