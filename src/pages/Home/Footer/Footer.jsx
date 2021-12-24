import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import * as BsFacebook from "react-icons/bs";
import * as GrInstagram from "react-icons/gr";
import * as BsLinkedin from "react-icons/bs";
import * as FiDribbble from "react-icons/fi";

const Footer = () => {
  return (
    <div className="mt-5">
      <footer class="footer">
        <div class="container">
          <div class="row">
            <div class="footer-col">
              <h4>company</h4>
              <ul>
                <li>
                  <a href="#about">About Us</a>
                </li>
                <li>
                  <a href="#designs">Designs</a>
                </li>
                <li>
                  <Link to="#">Privacy Policy</Link>
                </li>
              </ul>
            </div>
            <div class="footer-col">
              <h4>get in Touch</h4>
              <ul>
                <li>
                  <Link to="#">FAQ</Link>
                </li>
                <li>
                  <Link to="/learndesign">Learn with us</Link>
                </li>
                <li>
                  <Link to="#">Payment Options</Link>
                </li>
              </ul>
            </div>
            <div class="footer-col">
              <h4>Navigate</h4>
              <ul>
                <li>
                  <Link to="/explore">Explore</Link>
                </li>
                <li>
                  <Link to="/findwork">Find Work</Link>
                </li>
                <li>
                  <Link to="/registration">Register</Link>
                </li>
              </ul>
            </div>
            <div class="footer-col">
              <h4>follow us</h4>
              <div class="social-links">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.facebook.com/debojoti.chowdhury99"
                >
                  <BsFacebook.BsFacebook className="social-main" />
                </a>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://dribbble.com/debojoti_mu"
                >
                  <FiDribbble.FiDribbble className="social-main" />
                </a>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.instagram.com/debojoti.chowdhury99/"
                >
                  <GrInstagram.GrInstagram className="social-main" />
                </a>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.linkedin.com/in/debojotiapurba99/"
                >
                  <BsLinkedin.BsLinkedin className="social-main" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
