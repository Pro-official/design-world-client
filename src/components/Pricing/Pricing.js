import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import IndividualPricing from "./IndividualPricing";
import "./Pricing.css";

const Pricing = () => {
  const [pricings, setPricings] = useState([]);

  useEffect(() => {
    const pricings = "pricing.json";
    fetch(pricings)
      .then((res) => res.json())
      .then((data) => setPricings(data));
  }, []);

  return (
    <div className="pricing">
      <div className="container mb-4 text-center  text-white">
        <h1 className="section-name">Choose Your Plan</h1>
        <p>
          Choose the right plan for your body and mind and get our best support.
        </p>
      </div>
      <div className="container">
        <Row xs={1} md={3} className="g-4">
          {pricings.map((pricing) => (
            <IndividualPricing
              key={pricing.id}
              pricing={pricing}
            ></IndividualPricing>
          ))}
        </Row>
      </div>
      <hr />
    </div>
  );
};

export default Pricing;
