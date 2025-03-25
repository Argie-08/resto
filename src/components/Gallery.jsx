import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Breakfast from "../assets/breakfast.png";
import Cocktail from "../assets/cocktail.png";
import "./Gallery.css";

const Gallery = () => {
  return (
    <div id="gallery" className="w-100 ">
      <Row className="h-100 w-100 ">
        <Col md={5} sm={12} xs={12} className="h-100">
          <div className="galleryImageContainer position-relative w-100">
            <img src={Breakfast} alt="breakfast image" />
            <div className="innerText w-100">
              <div className="headerTitleRight">
                <span>RESTAURANT</span>
              </div>
              <p className="w-100">New offers and promotions</p>
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
                <div className="innerContainer w-100">
                  <div className="headerTitleCenter">
                    <span>RESTAURANT</span>
                  </div>
                  <p className="">View Full Menu</p>
                  <button>Learn More</button>
                </div>
              </Col>
            </Row>
            <Row className="h-50 w-100">
              <Col xs={6} className="h-100">
                <div className="innerContainer innerLeft w-100 ">
                  <div className="headerTitleCenter">
                    <span>RESTAURANT</span>
                  </div>
                  <p className="">Daily Specials</p>
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
          <div className="galleryImageContainer position-relative w-100">
            <img src={Cocktail} alt="" />
            <div className="innerText centerText w-100">
              <div className="headerTitleCenter w-100">
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
