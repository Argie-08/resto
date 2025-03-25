import { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Salad from "../assets/salad.png";
import Siamas from "../assets/Siamas.png";
import "./OrderOnline.css";

const OrderOnline = () => {
  const [salad, setSalad] = useState([]);
  const [mainCourse, setMainCourse] = useState([]);
  const [pizzas, setPizzas] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/data.json");
        const jsonData = await response.json();
        const filterSalad = jsonData.filter(
          (item) => item.category === "salad"
        );
        const filterMain = jsonData.filter(
          (item) => item.category === "main-menu"
        );
        const filterPizza = jsonData.filter(
          (item) => item.category === "pizza"
        );
        setSalad(filterSalad);
        setMainCourse(filterMain);
        setPizzas(filterPizza);
      } catch (error) {
        console.error("Error fetching JSON:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div id="orderOnline" className="w-100">
      <Container className="w-100 ">
        <Row className="w-100 ">
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
        <Row className="mt-5 w-100 ">
          <Col md={6} xs={12} sm={12} style={{ height: "100%" }}>
            <div className="menuContainer w-100 ">
              <div className="d-flex gap-4 align-items-center">
                <h2>Salads</h2>
                <p className="m-0">more...</p>
              </div>
              <ul className="menu-list w-100">
                {salad.map((item, i) => (
                  <li className="w-100 " key={i}>
                    <img src={item.image} alt="Greek Salad" />
                    <div className="w-100">
                      <div className="w-100">
                        <span className="item-name">{item.name} Salad</span>
                        <span className="dots"></span>
                        <span className="item-price">${item.price}</span>
                      </div>
                      <p className="m-0">Lorem ipsum dolor sit amet.</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="menuContainer w-100">
              <div className="d-flex gap-4 align-items-center">
                <h2>Main Course</h2>
                <p className="m-0">more...</p>
              </div>
              <ul className="menu-list w-100">
                {mainCourse.map((item, i) => (
                  <li className="w-100 " key={i}>
                    <img src={item.image} alt="Greek Salad" />
                    <div className="w-100">
                      <div className="w-100">
                        <span className="item-name">{item.name} Recipe</span>
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
          <Col md={6} xs={12} sm={12} style={{ height: "100%" }}>
            <div className="menuContainer w-100">
              <div className="d-flex gap-4 align-items-center">
                <h2>Pizzas</h2>
                <p className="m-0">more...</p>
              </div>
              <ul className="menu-list w-100">
                {pizzas.map((item, i) => (
                  <li className="w-100 " key={i}>
                    <img src={item.image} alt="Greek Salad" />
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
      </Container>
    </div>
  );
};

export default OrderOnline;
