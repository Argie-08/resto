import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Breakfast from "../assets/breakfast.png";
import Cocktail from "../assets/cocktail.png";
import "./Gallery.css";

const Gallery = () => {
  return (
    <div id="gallery">
      <Row className="h-100">
        <Col md={5} sm={12} xs={12} className="h-100">
          <div className="galleryImageContainer position-relative">
            <img src={Breakfast} alt="" />
            <div className="innerText">
              <div className="headerTitleRight">
                <span>RESTAURANT</span>
              </div>
              <p>New offers and promotions</p>
              <button>Learn more</button>
            </div>
          </div>
        </Col>
        <Col md={5} sm={8} xs={8} className="h-100">
          <div className="galleryImageContainer">
            <Row className="h-50">
              <Col xs={6} className="h-100">
                <img src={Cocktail} alt="" />
              </Col>
              <Col xs={6} className="h-100">
                <div className="innerContainer">
                  <div className="headerTitleCenter">
                    <span>RESTAURANT</span>
                  </div>
                  <p>View Full Menu</p>
                  <button>Learn More</button>
                </div>
              </Col>
            </Row>
            <Row className="h-50">
              <Col xs={6} className="h-100">
                <div className="innerContainer innerLeft">
                  <div className="headerTitleCenter">
                    <span>RESTAURANT</span>
                  </div>
                  <p>Daily Specials</p>
                  <button>Learn More</button>
                </div>
              </Col>
              <Col xs={6} className="h-100">
                <img src={Breakfast} alt="" />
              </Col>
            </Row>
          </div>
        </Col>
        <Col md={2} sm={4} xs={4} className="h-100">
          <div className="galleryImageContainer position-relative">
            <img src={Cocktail} alt="" />
            <div className="innerText centerText">
              <div className="headerTitleCenter">
                <span>RESTAURANT</span>
              </div>
              <p>Wine list</p>
              <button>Learn more</button>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Gallery;
