import React from "react";
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import Logo from "../assets/logo.png";
import "./Restonavbar.css";

const Restonavbar = () => {
  const [navCss, setNavCss] = useState(false);
  const [active, setActive] = useState("Home");
  const navigate = useNavigate();
  const location = useLocation();

  const changeColor = () => {
    if (window.scrollY >= 70) {
      setNavCss(true);
    } else {
      setNavCss(false);
    }
  };
  window.addEventListener("scroll", changeColor);

  const navLink = ["Home", "Menu", "About Us", "Contact Us"];

  const pathMap = {
    Home: "/",
    Menu: "/menu",
    "About Us": "/about",
    "Contact Us": "/contact",
  };

  const handleNav = (item) => {
    navigate(pathMap[item]);
  };

  const home = (e) => {
    e.preventDefault();
    setActive("Home");
    navigate("/");
  };
  return (
    <div
      className={
        navCss ? "navbarContainer navbarContainerScroll" : "navbarContainer"
      }
    >
      <Navbar expand="xxl">
        <Container fluid>
          <Navbar.Brand>
            <img src={Logo} alt="eula logo" onClick={home} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="offcanvasNavbar-expand-xxl" />
          <Navbar.Offcanvas
            id="offcanvasNavbar-expand-xxl"
            aria-labelledby="offcanvasNavbarLabel-expand-xxl"
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id="offcanvasNavbarLabel-expand-xxl">
                <img src={Logo} alt="eula logo" />
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3 gap-5">
                {navLink.map((item, i) => (
                  <li
                    key={i}
                    className={`${
                      location.pathname === pathMap[item] ? "active" : ""
                    }`}
                    onClick={() => handleNav(item)}
                  >
                    {item}
                  </li>
                ))}
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </div>
  );
};

export default Restonavbar;
