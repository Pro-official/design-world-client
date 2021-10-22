import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Nav, Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import {
  faFacebookSquare,
  faGithubSquare,
  faInstagramSquare,
  faTwitterSquare,
} from "@fortawesome/free-brands-svg-icons";
import {
  faMailBulk,
  faMapMarker,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <div className="footer text-white">
      <div className="container">
        <Row xs={1} sm={1} md={3} className="">
          <Col>
            <div className="f-container container">
              <div className="aboutus">
                <h2>About Us</h2>
                <p>
                  This is Gym for Pro. We are always focused in the quality of
                  our service. We always prefer quality over quantity. This is
                  one of the reason that, people believe in us. Our instructors
                  are the choosen from the highest band of instructors. Our diet
                  is followed by the professional bodybuilders worldwide.
                </p>
              </div>
              <div className="social">
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.facebook.com/great.promise00/"
                >
                  <FontAwesomeIcon className="icon" icon={faFacebookSquare} />
                </a>

                <Link to="">
                  <FontAwesomeIcon className="icon" icon={faTwitterSquare} />
                </Link>

                <Link to="">
                  <FontAwesomeIcon className="icon" icon={faInstagramSquare} />
                </Link>

                <Link to="">
                  <FontAwesomeIcon className="icon" icon={faGithubSquare} />
                </Link>
              </div>
            </div>
          </Col>
          <Col>
            <div className="f-container container">
              <h2>Internal Links</h2>
              <Nav className="d-flex flex-column">
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
            </div>
          </Col>
          <Col>
            <div className="container">
              <h2>Contact Us</h2>
              <p>
                <FontAwesomeIcon className="me-2" icon={faMapMarker} />
                61/1 Chayataru, Lamabazar, Sylhet.
              </p>
              <p>
                <FontAwesomeIcon className="me-2" icon={faPhone} /> +88
                01750041145
              </p>
              <p>
                <FontAwesomeIcon className="me-2" icon={faMailBulk} />{" "}
                promise.iam00@gmail.com
              </p>
            </div>
          </Col>
        </Row>
      </div>
      <hr />
      <p className="copyright">Copyright &copy; 2021, All Rights Reserved</p>
    </div>
  );
};

export default Footer;
