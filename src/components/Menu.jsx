import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Sweets from "../assets/sweets.png";
import Coffee from "../assets/coffee.png";
import Breakfast from "../assets/breakfast.png";
import Cocktail from "../assets/cocktail.png";
import { useContext } from "react";
import { AppContext } from "../AppContext";
import Modaled from "./Modaled";
import "./Menu.css";

const Menu = () => {
  const { handleShow, handleClose } = useContext(AppContext);

  return (
    <div className="splendidMenu w-100">
      <div className="d-flex flex-column align-items-center mb-5 w-100">
        <div className="menuTitle w-100">
          <span>RESTAURANT</span>
        </div>
        <p className="m-0">Explore our splendid menu</p>
      </div>
      <Container>
        <Row>
          <Col md={3} sm={6} xs={12}>
            <Card className="mb-4 position-relative">
              <Card.Img variant="top" src={Sweets} />
              <div className="w-100 position-absolute">
                <p>Sweet Desserts</p>
                <button onClick={() => handleShow("desserts")}>
                  View menu
                </button>
              </div>
            </Card>
          </Col>
          <Col md={3} sm={6} xs={12}>
            <Card className="mb-4 position-relative">
              <Card.Img variant="top" src={Coffee} />
              <div className="w-100 position-absolute">
                <p>Amazing Coffee</p>
                <button onClick={() => handleShow("coffee")}>View menu</button>
              </div>
            </Card>
          </Col>
          <Col md={3} sm={6} xs={12}>
            <Card className="mb-4 position-relative">
              <Card.Img variant="top" src={Breakfast} />
              <div className="w-100 position-absolute">
                <p>Best Breakfasts</p>
                <button onClick={() => handleShow("main-menu")}>
                  View menu
                </button>
              </div>
            </Card>
          </Col>
          <Col md={3} sm={6} xs={12}>
            <Card className="mb-4 position-relative">
              <Card.Img variant="top" src={Cocktail} />
              <div className="w-100 position-absolute">
                <p>Great Cocktails</p>
                <button onClick={() => handleShow("beverages")}>
                  View menu
                </button>
              </div>
            </Card>
          </Col>
        </Row>
      </Container>
      <Modaled />
    </div>
  );
};

export default Menu;
