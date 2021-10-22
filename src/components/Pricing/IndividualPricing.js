import React from "react";
import { Card, Col } from "react-bootstrap";

const IndividualPricing = (props) => {
  const { name, price, instructor, diet, wifi } = props.pricing;
  return (
    <div>
      <Col>
        <Card className="text-white pricing-card text-center">
          <Card.Body className="p-4">
            <Card.Title className="fw-bold pricing-title">${price}</Card.Title>
            <hr />
            <Card.Text>{name}</Card.Text>
            <hr />
            <Card.Text>{instructor}</Card.Text>
            <hr />
            <Card.Text>{diet}</Card.Text>
            <hr />
            <Card.Text>{wifi}</Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </div>
  );
};

export default IndividualPricing;
