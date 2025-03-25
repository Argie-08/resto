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

const Review = () => {
  const [clients, setClients] = useState([]);

  useEffect(() => {
    const fetchClient = async () => {
      try {
        const response = await fetch("/data.json");
        const jsonData = await response.json();
        const filterClients = jsonData.filter(
          (item) => item.category === "Client"
        );
        setClients(filterClients);
      } catch (error) {
        console.error("Error fetching JSON:", error);
      }
    };
    fetchClient();
  }, []);

  return (
    <div id="review">
      <Container>
        <Row className="w-100">
          <Col sm={12} xs={12}>
            <FontAwesomeIcon icon={faQuoteLeft} />
            <p>What our clients say about us</p>
            <div></div>
          </Col>
          <Col sm={12} xs={12}>
            <Carousel>
              {clients.map((client, index) => (
                <Carousel.Item key={index}>
                  <img src={carouselBg} alt="Transparent Background" />
                  <Carousel.Caption>
                    <img
                      src={client.image}
                      alt="Reviewer Image"
                      id="reviewer"
                    />
                    <div>
                      <h3>{client.name}</h3>
                      <p>{client.category}</p>
                    </div>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Iste, voluptatibus!
                    </p>
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
