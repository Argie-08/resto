import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Salad from "../assets/salad.png";
import Seafood from "../assets/seafood.png";
import Siamas from "../assets/Siamas.png";
import Soya from "../assets/Soya.png";
import "./PopularDishes.css";

const PopularDishes = () => {
  const dishes = [
    {
      image: Salad,
      title: "Greek Salad",
      description:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum illum deleniti quae voluptate quia libero perferendis pariatur totam commodi provident",
    },
    {
      image: Seafood,
      title: "Spicy Seafood",
      description:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit  provident",
    },
    {
      image: Siamas,
      title: "Thai Siamas",
      description:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum illum deleniti quae voluptate quia libero perferendis pariatur ",
    },
    {
      image: Soya,
      title: "Soya",
      description: " Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
    },
  ];

  return (
    <div id="popDishes">
      <Container className="p-5 w-100">
        <Row className="w-100">
          <Col sm={12} className="w-100 mb-4">
            <div className="w-100 d-flex flex-column justify-content-center align-items-center">
              <div className="headerTitleCenter mb-2">
                <span>RESTAURANT</span>
              </div>
              <p>Most popular dishes</p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Corporis ipsam modi sit accusamus laboriosam eum porro
                voluptates esse, provident perferendis.
              </p>
            </div>
          </Col>
        </Row>
        <Row className="w-100">
          {dishes.map((dish, i) => (
            <Col md={3} sm={6} xs={6} key={i}>
              <Card>
                <Card.Img variant="top" src={dish.image} />
                <Card.Body>
                  <Card.Title>{dish.title}</Card.Title>
                  <Card.Text>{dish.description}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default PopularDishes;
