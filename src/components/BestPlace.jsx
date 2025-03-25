import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Bg1 from "../assets/place1.png";
import Bg2 from "../assets/place2.png";
import "./BestPlace.css";
import { useNavigate } from "react-router-dom";

const BestPlace = () => {
  const navigate = useNavigate();

  const navigateContact = (e) => {
    e.preventDefault();
    navigate("/contact");
  };
  return (
    <div id="bestplace">
      <Container>
        <Row>
          <Col md={6} sm={12} xs={12} className="px-5">
            <div className="placeImageContainer position-relative">
              <img src={Bg1} alt="Image of Place" />
              <img src={Bg2} alt="Image of Places" />
            </div>
          </Col>
          <Col md={{ span: 5, offset: 1 }} sm={12} xs={12} className="px-5">
            <div className="h-100 d-flex flex-column justify-content-center">
              <div className="headerTitleRight">
                <span>RESTAURANT</span>
              </div>
              <p>Best place to find your taste</p>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Mollitia laudantium enim voluptatum culpa ipsum. Laboriosam
                officia rem voluptatum nostrum non molestiae libero explicabo
                sed deserunt, asperiores mollitia quia distinctio qui officiis
                minima ducimus similique quaerat incidunt? Praesentium, soluta
                temporibus. Consequatur?
              </p>
              <button onClick={navigateContact}>Make a reservation</button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default BestPlace;
