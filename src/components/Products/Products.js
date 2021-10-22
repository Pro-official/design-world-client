import React from "react";
import "./Products.css";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import pd1 from "../../images/pd1.png";
import pd2 from "../../images/pd2.png";
import pd3 from "../../images/pd3.png";
import pd4 from "../../images/pd4.png";

const Products = () => {
  return (
    <div className="products bg-black p-5 ">
      <div className="text-center text-white mb-5">
        <h1 className="section-title">Protein Products</h1>
        <p>
          We provide the best protein products according to your physical
          condition. They are only given after prescribed by the instructor.
        </p>
      </div>
      <div>
        <Row xs={1} sm={1} md={4} className="g-4 product-img">
          <Col className="text-center text-white">
            <img className="mb-4" src={pd1} alt="" />
            <h1 className="fs-4">Protein 100% Raw</h1>
            <p>$80</p>
          </Col>
          <Col className="text-center text-white">
            <img className="mb-4" src={pd2} alt="" />
            <h1 className="fs-4">Weight Gainer</h1>
            <p>$85</p>
          </Col>
          <Col className="text-center text-white">
            <img className="mb-4" src={pd3} alt="" />
            <h1 className="fs-4">Gold Standard Whey</h1>
            <p>$90</p>
          </Col>
          <Col className="text-center text-white">
            <img className="mb-4" src={pd4} alt="" />
            <h1 className="fs-4">Serious Mass</h1>
            <p>$100</p>
          </Col>
        </Row>
      </div>
      <hr />
    </div>
  );
};

export default Products;
