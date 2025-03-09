import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Salad from "../assets/salad.png";
import Siamas from "../assets/Siamas.png";
import "./OrderOnline.css";

const OrderOnline = () => {
  return (
    <div id="orderOnline" className=" w-100">
      <Container>
        <Row>
          <Col xs={12}>
            <div className="headerTitleCenter">
              <span>RESTAURANT</span>
            </div>
            <p className="onlineTitle">Order online</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Doloremque, cumque.
            </p>
          </Col>
        </Row>
        <Row className="mt-5">
          <Col md={6} xs={12} sm={12} style={{ height: "100%" }}>
            <div className="menuContainer">
              <div className="d-flex gap-4 align-items-center">
                <h2>Salads</h2>
                <p className="m-0">more...</p>
              </div>
              <ul className="menu-list">
                <li>
                  <img src={Salad} alt="" />
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
                  <img src={Siamas} alt="" />
                  <div className="w-100">
                    <div className="w-100">
                      <span className="item-name">Siamas Salad</span>
                      <span className="dots"></span>
                      <span className="item-price">$10</span>
                    </div>
                    <p className="m-0">
                      Lorem ipsum dolor sit amet consectetur.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="menuContainer">
              <div className="d-flex gap-4 align-items-center">
                <h2>Main Course</h2>
                <p className="m-0">more...</p>
              </div>
              <ul className="menu-list">
                <li>
                  <img src={Salad} alt="" />
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
                  <img src={Siamas} alt="" />
                  <div className="w-100">
                    <div className="w-100">
                      <span className="item-name">Siamas Salad</span>
                      <span className="dots"></span>
                      <span className="item-price">$10</span>
                    </div>
                    <p className="m-0">
                      Lorem ipsum dolor sit amet consectetur.
                    </p>
                  </div>
                </li>
                <li>
                  <img src={Siamas} alt="" />
                  <div className="w-100">
                    <div className="w-100">
                      <span className="item-name">Siamas Salad</span>
                      <span className="dots"></span>
                      <span className="item-price">$10</span>
                    </div>
                    <p className="m-0">
                      Lorem ipsum dolor sit amet consectetur.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </Col>
          <Col md={6} xs={12} style={{ height: "100%" }}>
            <div className="menuContainer">
              <div className="d-flex gap-4 align-items-center">
                <h2>Pizzas</h2>
                <p className="m-0">more...</p>
              </div>
              <ul className="menu-list">
                <li>
                  <img src={Salad} alt="" />
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
                  <img src={Siamas} alt="" />
                  <div className="w-100">
                    <div className="w-100">
                      <span className="item-name">Siamas Salad</span>
                      <span className="dots"></span>
                      <span className="item-price">$10</span>
                    </div>
                    <p className="m-0">
                      Lorem ipsum dolor sit amet consectetur.
                    </p>
                  </div>
                </li>
                <li>
                  <img src={Siamas} alt="" />
                  <div className="w-100">
                    <div className="w-100">
                      <span className="item-name">Siamas Salad</span>
                      <span className="dots"></span>
                      <span className="item-price">$10</span>
                    </div>
                    <p className="m-0">
                      Lorem ipsum dolor sit amet consectetur.
                    </p>
                  </div>
                </li>
                <li>
                  <img src={Salad} alt="" />
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
                  <img src={Siamas} alt="" />
                  <div className="w-100">
                    <div className="w-100">
                      <span className="item-name">Siamas Salad</span>
                      <span className="dots"></span>
                      <span className="item-price">$10</span>
                    </div>
                    <p className="m-0">
                      Lorem ipsum dolor sit amet consectetur.
                    </p>
                  </div>
                </li>
                <li>
                  <img src={Siamas} alt="" />
                  <div className="w-100">
                    <div className="w-100">
                      <span className="item-name">Siamas Salad</span>
                      <span className="dots"></span>
                      <span className="item-price">$10</span>
                    </div>
                    <p className="m-0">
                      Lorem ipsum dolor sit amet consectetur.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default OrderOnline;
