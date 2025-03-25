import { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Starters from "/images/menu/starters/salmon.jpg";
import MainCourse from "/images/imported/fish-main.jpg";
import Pizza from "/images/imported/peperoni-pizza.jpg";
import Beverages from "/images/menu/beverages/Strawberry-Lemonade.jpg";
import { useNavigate } from "react-router-dom";
import "./MainStarter.css";

const MainStarter = () => {
  const [starters, setStarters] = useState([]);
  const [main, setMain] = useState([]);
  const [pizza, setPizza] = useState([]);
  const [beverages, setBeverages] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchMenu = async () => {
      try {
        const response = await fetch("/data.json");
        const jsonData = await response.json();
        const filterStaters = jsonData.filter(
          (item) => item.category === "starters"
        );
        const filterMain = jsonData.filter(
          (item) => item.category === "main-menu"
        );
        const filterBeverages = jsonData.filter(
          (item) => item.category === "beverages"
        );
        const filterPizza = jsonData
          .filter((item) => item.category === "pizza")
          .sort(() => Math.random() - 0.5)
          .slice(0, 3);

        setStarters(filterStaters);
        setMain(filterMain);
        setPizza(filterPizza);
        setBeverages(filterBeverages);
      } catch (error) {
        console.log(error);
      }
    };
    fetchMenu();
  }, []);

  const navigateContact = (e) => {
    e.preventDefault();
    navigate("/contact");
  };

  return (
    <div>
      <div id="mainstarter">
        <Container>
          <Row className="mb-5">
            <Col
              sm={12}
              xs={12}
              lg={6}
              className="d-flex justify-content-center mb-5"
            >
              <img src={Starters} alt="main starter image" />
            </Col>
            <Col sm={12} xs={12} lg={6}>
              <div className="d-flex flex-column justify-content-center w-100">
                <h4>STARTERS</h4>
                <ul className="menu-list">
                  {starters.map((item, i) => (
                    <li key={i}>
                      <div className="w-100">
                        <div className="w-100">
                          <span className="item-name">{item.name} Menu</span>
                          <span className="dots"></span>
                          <span className="item-price">${item.price}</span>
                        </div>
                        <p className="m-0">Lorem ipsum dolor sit amet.</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </Col>
          </Row>
          <Row>
            <Col
              sm={12}
              xs={12}
              lg={6}
              className="d-flex justify-content-center mb-5 phoneviewleft"
            >
              <img src={MainCourse} alt="main starter image" />
            </Col>
            <Col sm={12} xs={12} lg={6} className="">
              <div className="d-flex flex-column justify-content-center w-100">
                <h4>MAIN COURSE</h4>
                <ul className="menu-list">
                  {main.map((item, i) => (
                    <li key={i}>
                      <div className="w-100">
                        <div className="w-100">
                          <span className="item-name">{item.name}</span>
                          <span className="dots"></span>
                          <span className="item-price">${item.price}</span>
                        </div>
                        <p className="m-0">Lorem ipsum dolor sit amet.</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </Col>
            <Col
              sm={12}
              xs={12}
              lg={6}
              className="d-flex justify-content-center mb-5 phoneviewright"
            >
              <img src={MainCourse} alt="main starter image" />
            </Col>
          </Row>
          <Row className="mb-5">
            <Col
              sm={12}
              xs={12}
              lg={6}
              className="d-flex justify-content-center mb-5"
            >
              <img src={Pizza} alt="main starter image" />
            </Col>
            <Col sm={12} xs={12} lg={6}>
              <div className="d-flex flex-column justify-content-center w-100">
                <h4>PIZZA</h4>
                <ul className="menu-list">
                  {pizza.map((item, i) => (
                    <li key={i}>
                      <div className="w-100">
                        <div className="w-100">
                          <span className="item-name">{item.name} Pizza</span>
                          <span className="dots"></span>
                          <span className="item-price">${item.price}</span>
                        </div>
                        <p className="m-0">Lorem ipsum dolor sit amet.</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </Col>
          </Row>
          <Row>
            <Col
              sm={12}
              xs={12}
              lg={6}
              className="d-flex justify-content-center mb-5 phoneviewleft"
            >
              <img src={Starters} alt="main starter image" />
            </Col>
            <Col sm={12} xs={12} lg={6} className="">
              <div className="d-flex flex-column justify-content-center w-100">
                <h4>BEVERAGES</h4>
                <ul className="menu-list">
                  {beverages.map((item, i) => (
                    <li key={i}>
                      <div className="w-100">
                        <div className="w-100">
                          <span className="item-name">{item.name}</span>
                          <span className="dots"></span>
                          <span className="item-price">${item.price}</span>
                        </div>
                        <p className="m-0">Lorem ipsum dolor sit amet.</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </Col>
            <Col
              sm={12}
              xs={12}
              lg={6}
              className="d-flex justify-content-center mb-5 phoneviewright"
            >
              <img src={Beverages} alt="main starter image" />
            </Col>
          </Row>
        </Container>
      </div>
      <div id="banner">
        <img className="bannerImg" alt="" />
        <div className="d-flex flex-column align-items-center gap-4">
          <div className="w-100 d-flex flex-column justify-content-center align-items-center">
            <div className="headerTitleCenter mb-2">
              <span>RESTAURANT</span>
            </div>
            <p>Book a Table</p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione
              ex temporibus reprehenderit corrupti odit eius sit accusantium
              sunt expedita commodi.
            </p>
          </div>
          <button onClick={navigateContact}>Make a reservation</button>
        </div>
      </div>
    </div>
  );
};

export default MainStarter;
