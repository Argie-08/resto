import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Sweets from "../assets/sweets.png";
import Coffee from "../assets/coffee.png";
import Breakfast from "../assets/breakfast.png";
import Cocktail from "../assets/cocktail.png";
import "./Menu.css";

const Menu = () => {
  const images = [
    { image: Sweets, title: "Sweet Desserts" },
    { image: Coffee, title: "Amazing Coffee" },
    { image: Breakfast, title: "Best Breakfasts" },
    { image: Cocktail, title: "Great Cocktails" },
  ];

  return (
    <div className="splendidMenu">
      <div className="d-flex flex-column align-items-center mb-5">
        <div className="menuTitle">
          <span>RESTAURANT</span>
        </div>
        <p className="m-0">Explore our splendid menu</p>
      </div>
      <Container>
        <Row>
          {images.map((image, i) => (
            <Col md={3} sm={6} xs={12} key={i}>
              <Card className="mb-4 position-relative">
                <Card.Img variant="top" src={image.image} />
                <div className="w-100 position-absolute">
                  <p>{image.title}</p>
                  <button>View menu</button>
                </div>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Menu;
