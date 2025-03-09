import React from "react";
import { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Carousel from "react-bootstrap/Carousel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
import Breakfast from "../assets/breakfast.png";
import Cocktail from "../assets/cocktail.png";
import Coffee from "../assets/coffee.png";
import carouselBg from "../assets/carouselBg.png";
import "./Review.css";
import "bootstrap/dist/css/bootstrap.min.css";

const contentStyle = {
  height: "50px",
  width: "100%",
  color: "#000000",
  lineHeight: "50px",
  textAlign: "center",
  background: "red",
  border: "1px solid black",
};

const Review = () => {
  const testimonials = [
    {
      image: Breakfast,
      name: "Dale Petersen",
      role: "Guest",
      feedback:
        "Cras morbi consectetur viverra eleifend pellentesque dui. Senectus commodo morbi aliquet eget quis.",
    },
    {
      image: Cocktail,
      name: "John Doe",
      role: "Customer",
      feedback:
        "Vel curabitur ut a id tempor. Vivamus non commodo vel ac aliquet.",
    },
    {
      image: Coffee,
      name: "Jane Smith",
      role: "Client",
      feedback:
        "Euismod tincidunt sed quam pharetra laoreet nisl mollis vitae.",
    },
  ];

  return (
    <div id="review">
      <Container>
        <Row>
          <Col sm={12} xs={12}>
            <FontAwesomeIcon icon={faQuoteLeft} />
            <p>What our clients say about us</p>
            <div></div>
          </Col>
          <Col sm={12} xs={12}>
            <Carousel>
              {testimonials.map((testimonial, index) => (
                <Carousel.Item key={index}>
                  <img src={carouselBg} alt="Transparent Background" />
                  <Carousel.Caption>
                    <img
                      src={testimonial.image}
                      alt="Reviewer Image"
                      id="reviewer"
                    />
                    <div>
                      <h3>{testimonial.name}</h3>
                      <p>{testimonial.role}</p>
                    </div>

                    <p>{testimonial.feedback}</p>
                  </Carousel.Caption>
                </Carousel.Item>
              ))}
            </Carousel>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Review;
