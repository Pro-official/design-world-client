import React from "react";
import { Container } from "react-bootstrap";
import "./topdesign.css";

const TopDesign = () => {
  return (
    <Container className="text-center top-container">
      <hr />
      <div>
        <h1 className="top-title">Our Top Design</h1>
        <p className="top-para">
          Our most Loved design award goes to<span>...</span>
        </p>
      </div>
      <article className="top-design">
        <div className="top-img">
          <img src="https://i.imgur.com/w7SBbG4.jpg" alt="" />
        </div>
        {/* <div className="top-description text-start ps-4">
          <h2>Name: Hospitality</h2>
          <h4>Author: Debojoti Apurba</h4>
        </div> */}
      </article>
    </Container>
  );
};

export default TopDesign;
