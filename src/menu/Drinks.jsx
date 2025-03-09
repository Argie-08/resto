import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Hero from "../assets/hero.png";
import "./Starters.css";

const Drinks = () => {
  return (
    <div id="starters">
      <div className="w-100 position-relative">
        <img src={Hero} alt="" />
        <p>DRINKS & COCKTAILS</p>
      </div>
      <Container className="mt-5">
        <Row>
          <Col md={6} sm={12} xs={12}>
            <ul className="menu-list">
              <li>
                <div className="w-100">
                  <div className="w-100">
                    <span className="item-name">Greek Salad</span>
                    <span className="dots"></span>
                    <span className="item-price">$6</span>
                  </div>
                  <p className="m-0">Lorem ipsum dolor sit amet.</p>
                </div>
              </li>
              <li>
                <div className="w-100">
                  <div className="w-100">
                    <span className="item-name">Siamas Salad</span>
                    <span className="dots"></span>
                    <span className="item-price">$10</span>
                  </div>
                  <p className="m-0">Lorem ipsum dolor sit amet consectetur.</p>
                </div>
              </li>
              <li>
                <div className="w-100">
                  <div className="w-100">
                    <span className="item-name">Siamas Salad</span>
                    <span className="dots"></span>
                    <span className="item-price">$10</span>
                  </div>
                  <p className="m-0">Lorem ipsum dolor sit amet consectetur.</p>
                </div>
              </li>
              <li>
                <div className="w-100">
                  <div className="w-100">
                    <span className="item-name">Siamas Salad</span>
                    <span className="dots"></span>
                    <span className="item-price">$10</span>
                  </div>
                  <p className="m-0">Lorem ipsum dolor sit amet consectetur.</p>
                </div>
              </li>
            </ul>
          </Col>
          <Col md={6} sm={12} xs={12}>
            <ul className="menu-list">
              <li>
                <div className="w-100">
                  <div className="w-100">
                    <span className="item-name">Greek Salad</span>
                    <span className="dots"></span>
                    <span className="item-price">$6</span>
                  </div>
                  <p className="m-0">Lorem ipsum dolor sit amet.</p>
                </div>
              </li>
              <li>
                <div className="w-100">
                  <div className="w-100">
                    <span className="item-name">Siamas Salad</span>
                    <span className="dots"></span>
                    <span className="item-price">$10</span>
                  </div>
                  <p className="m-0">Lorem ipsum dolor sit amet consectetur.</p>
                </div>
              </li>
              <li>
                <div className="w-100">
                  <div className="w-100">
                    <span className="item-name">Siamas Salad</span>
                    <span className="dots"></span>
                    <span className="item-price">$10</span>
                  </div>
                  <p className="m-0">Lorem ipsum dolor sit amet consectetur.</p>
                </div>
              </li>
              <li>
                <div className="w-100">
                  <div className="w-100">
                    <span className="item-name">Siamas Salad</span>
                    <span className="dots"></span>
                    <span className="item-price">$10</span>
                  </div>
                  <p className="m-0">Lorem ipsum dolor sit amet consectetur.</p>
                </div>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Drinks;
