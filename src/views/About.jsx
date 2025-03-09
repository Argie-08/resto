import { useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Hero from "../assets/hero.png";
import Card from "react-bootstrap/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import Coffee from "../assets/coffee.png";
import Chef3 from "../assets/chef3.png";
import Chef1 from "../assets/chef1.png";
import Chef2 from "../assets/chef2.png";
import Chef4 from "../assets/chef4.png";
import Logo from "../assets/logo2.png";
import "./About.css";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div id="about">
      <div className="heroContainer">
        <img
          src={Hero}
          alt="hero image"
          className="w-100 h-100 object-fit-cover"
        />
        <p>About Us</p>
      </div>
      <div className="creativeResto ">
        <div className="position-relative ">
          <img src={Hero} alt="first image" />
          <img src={Coffee} alt="second image" />
        </div>
        <div className="d-flex flex-column justify-content-center">
          <div className="d-flex align-items-end gap-1">
            <img src={Logo} alt="" id="logo" />
            <p className="m-0">Restaurant</p>
          </div>
          <p>Creativity is always on our menu.</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
            tempora inventore, aperiam delectus impedit neque exercitationem
            eaque nesciunt accusantium ad.
          </p>
        </div>
      </div>
      <div className="ourTeam">
        <div className="d-flex flex-column align-items-center">
          <div className="headerTitleCenter mb-2">
            <span>RESTAURANT</span>
          </div>
          <h3 className="text-center">The best chefs</h3>
        </div>
        <Row>
          <Col
            lg={8}
            sm={12}
            xs={12}
            className="d-flex flex-column align-items-end justify-content-center "
            style={{ paddingRight: "82px" }}
          >
            <h4>Your Event, Our Passion</h4>
            <p className="text-end">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Perspiciatis officiis aut minus adipisci nihil blanditiis quos
              odio, culpa illum? Deleniti!
            </p>
          </Col>
          <Col
            lg={4}
            sm={12}
            xs={12}
            className="position-relative"
            style={{ paddingLeft: "82px", height: "506px" }}
          >
            <div className="box"></div>
            <img src={Chef3} alt="chef1" id="chef1" />
            <div>
              <h4>Louise Harris</h4>
              <p>Chef</p>
            </div>
          </Col>
        </Row>
        <Row className="mt-5">
          <Col
            lg={4}
            sm={12}
            xs={12}
            className=" d-flex flex-column align-items-center mb-5"
          >
            <Card>
              <Card.Img variant="top" src={Chef1} />
              <Card.Body>
                <h5>Brodie Burgess</h5>
                <p className="m-0">Sous Chef</p>
                <div className="d-flex justify-content-center gap-3 mt-3">
                  <FontAwesomeIcon icon={faFacebook} />
                  <FontAwesomeIcon icon={faTwitter} />
                  <FontAwesomeIcon icon={faInstagram} />
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col
            lg={4}
            sm={12}
            xs={12}
            className="d-flex flex-column align-items-center mb-5"
          >
            <Card>
              <Card.Img variant="top" src={Chef2} />
              <Card.Body>
                <h5>Brodie Burgess</h5>
                <p className="m-0">Sous Chef</p>
                <div className="d-flex justify-content-center gap-3 mt-3">
                  <FontAwesomeIcon icon={faFacebook} />
                  <FontAwesomeIcon icon={faTwitter} />
                  <FontAwesomeIcon icon={faInstagram} />
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col
            lg={4}
            sm={12}
            xs={12}
            className="d-flex flex-column align-items-center"
          >
            <Card>
              <Card.Img variant="top" src={Chef4} />
              <Card.Body>
                <h5>Brodie Burgess</h5>
                <p className="m-0">Sous Chef</p>
                <div className="d-flex justify-content-center gap-3 mt-3">
                  <FontAwesomeIcon icon={faFacebook} />
                  <FontAwesomeIcon icon={faTwitter} />
                  <FontAwesomeIcon icon={faInstagram} />
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row style={{ padding: "0 72px" }} className="counter">
          <Col lg={4} sm={12} xs={12}>
            <img src={Coffee} alt="" />
          </Col>
          <Col
            lg={8}
            sm={12}
            xs={12}
            className="d-flex justify-content-center align-items-center"
          >
            <Row>
              <Col md={6} sm={12} xs={12}>
                <div className="d-flex flex-column columnbase align-items-center">
                  <div className="d-flex flex-column column1">
                    <p className="m-0">20</p>
                    <p className="m-0">Years of experience</p>
                    <p className="m-0">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                  </div>
                  <div className="d-flex flex-column column1">
                    <p className="m-0">320</p>
                    <p className="m-0">Dishes on the menu</p>
                    <p className="m-0">
                      Lorem ipsum dolor sit amet consectetur adipisicing.
                    </p>
                  </div>
                </div>
              </Col>
              <Col md={6} sm={12} xs={12}>
                <div className="d-flex flex-column columnbase align-items-center">
                  <div className="d-flex flex-column column1">
                    <p className="m-0">25K</p>
                    <p className="m-0">Happy Clients</p>
                    <p className="m-0">
                      Lorem ipsum dolor sit amet consectetur .
                    </p>
                  </div>
                  <div className="d-flex flex-column column1">
                    <p className="m-0">12</p>
                    <p className="m-0">Professional chefs</p>
                    <p className="m-0">
                      Lorem ipsum dolor sit amet consectetur adipisicing.
                    </p>
                  </div>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row className="news d-flex flex-column">
          <Col xs={12} className="d-flex flex-column align-items-center">
            <div className="headerTitleCenter mb-2">
              <span>OUR BLOG</span>
            </div>
            <h3 className="text-center">News, promotions and events</h3>
          </Col>
          <Col xs={12}>
            <Row>
              <Col lg={3} md={6} sm={12} xs={12}>
                <Card className="position-relative newsCard">
                  <Card.Img variant="top" src={Coffee} />
                  <div className="card-data">
                    <p className="text-start m-0">12.12.2024</p>
                    <p className="text-start m-0">New year with a new menu</p>
                    <p className="text-start m-0">News</p>
                  </div>
                </Card>
              </Col>
              <Col lg={3} md={6} sm={12} xs={12}>
                <Card className="position-relative newsCard">
                  <Card.Img variant="top" src={Coffee} />
                  <div className="card-data">
                    <p className="text-start m-0">12.12.2024</p>
                    <p className="text-start m-0">Master class from our chef</p>
                    <p className="text-start m-0">Events</p>
                  </div>
                </Card>
              </Col>
              <Col lg={3} md={6} sm={12} xs={12}>
                <Card className="position-relative newsCard">
                  <Card.Img variant="top" src={Coffee} />
                  <div className="card-data">
                    <p className="text-start m-0">12.12.2024</p>
                    <p className="text-start m-0">
                      Find out how to get a 20% discount
                    </p>
                    <p className="text-start m-0">Promotions</p>
                  </div>
                </Card>
              </Col>
              <Col lg={3} md={6} sm={12} xs={12}>
                <Card className="position-relative newsCard">
                  <Card.Img variant="top" src={Coffee} />
                  <div className="card-data">
                    <p className="text-start m-0">12.12.2024</p>
                    <p className="text-start m-0">
                      Working hours during winter holidays
                    </p>
                    <p className="text-start m-0">News</p>
                  </div>
                </Card>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default About;
