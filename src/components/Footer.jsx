import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Logo from "../assets/logo.png";
import "./Footer.css";

const Footer = () => {
  return (
    <div id="footer">
      <div className="d-flex w-100 justify-content-center align-items-end gap-3 py-5 ">
        <img src={Logo} alt="" />
        <p>Restaurant</p>
      </div>
      <Container>
        <Row>
          <Col
            md={4}
            sm={12}
            xs={12}
            className="d-flex flex-column align-items-center mb-5"
          >
            <h5>Opening Hours</h5>
            <p>Monday - Sunday</p>
            <p>10AM - 10PM</p>
          </Col>
          <Col
            md={4}
            sm={12}
            xs={12}
            className="d-flex flex-column align-items-center mb-5"
          >
            <h5>Book a Table</h5>
            <p className="mb-4 text-center">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum,
              in?
            </p>
            <h3>(+63)997-267-7080</h3>
          </Col>
          <Col
            md={4}
            sm={12}
            xs={12}
            className="d-flex flex-column align-items-center mb-5"
          >
            <h5>Our Address</h5>
            <p>Dipolog City</p>
            <p>Philippines</p>
          </Col>
        </Row>
        <Row>
          <Col xs={12} sm={12} className="w-100 py-5 text-center">
            <p>&copy; Eula Restaurant 2024. Design by Euladev</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
