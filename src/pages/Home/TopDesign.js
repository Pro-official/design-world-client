import React from "react";
import { Container } from "react-bootstrap";
import "./topdesign.css";
// import gallery from "./pricing.json"

const TopDesign = () => {
  return (
    <Container className="text-center top-container">
      <hr />
      <div>
        <h1 className="top-title">Our Top Designs</h1>
        <p className="top-para">
          Our most loved picture gallery is here<span>...</span>
        </p>
      </div>
      <article
        data-aos="fade-right"
        data-aos-duration="3000"
        data-aos-easing="ease-in-out"
        className="gallery-design"
      >
        <div class="container-gallery">
          <div class="row g-0">
            <div class="col-lg-6 col-md-6 col-sm-12 top-img">
              <img src="https://i.imgur.com/9UL1AEq.jpg" alt="" />
            </div>
            <div class="col-lg-3 col-md-6 col-sm-12 top-img">
              <img src="https://i.imgur.com/CdtnbvS.jpg" alt="" />
            </div>
            <div class="col-lg-3 col-md-6 col-sm-12 top-img">
              <img src="https://i.imgur.com/RRnoB6g.jpg" alt="" />
            </div>
          </div>
          <div class="row g-0">
            <div class="col-lg-4 col-md-6 col-sm-12 top-img">
              <img src="https://i.imgur.com/DqOEt9L.jpg" alt="" />
            </div>
            <div class="col-lg-5 col-md-6 col-sm-12 top-img">
              <img src="https://i.imgur.com/w7SBbG4.jpg" alt="" />
            </div>
            <div class="col-lg-3 col-md-6 col-sm-12 top-img">
              <img src="https://i.imgur.com/dSf8rCY.jpg" alt="" />
            </div>
          </div>
        </div>
        <hr />
      </article>
    </Container>
  );
};

export default TopDesign;
