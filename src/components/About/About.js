import React from "react";
import { Col, Row } from "react-bootstrap";
import aboutImg from "../../images/about.jpg";
import "./About.css";

const About = () => {
  return (
    <div className="about bg-black text-white pt-5">
      <div className="text-center pb-5">
        <h1 className="title">About</h1>
        <p>Learn More about our prestigious institution..</p>
      </div>

      <Row
        xs={1}
        sm={1}
        md={2}
        className="d-flex about-banner justify-content-center align-items-center"
      >
        <Col>
          <div>
            <img className="about-img" src={aboutImg} alt="" />
          </div>
        </Col>
        <Col className="about-text text-center">
          <div>
            <h1>Built To Bring</h1>
            <h1>Best Results..</h1>
            <p className="about-para">
              Tune up your shoulders, legs and lower back. Choose a workout that
              can improve your balance, strength and overall condition. Our team
              of experts will follow you through the whole workout process. Your
              body will thank you.
            </p>
          </div>
        </Col>
        <hr />
      </Row>
    </div>
  );
};

export default About;
