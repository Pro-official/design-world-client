import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import "./Pricing.css";

const Pricing = () => {
  return (
    <div className="pricing">
      <div className="container">
        <Row xs={1} md={3} className="g-4">
          <Col>
            <Card className="text-white pricing-card text-center">
              <Card.Body className="p-4">
                <Card.Title className="fw-bold pricing-title">$40</Card.Title>
                <hr />
                <Card.Text>Quarterly Plan</Card.Text>
                <hr />
                <Card.Text>Quarterly Plan</Card.Text>
                <hr />
                <Card.Text>Quarterly Plan</Card.Text>
                <hr />
                <Card.Text>Quarterly Plan</Card.Text>
                <Card.Text>Quarterly Plan</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Img variant="top" src="holder.js/100px160" />
              <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Pricing;
