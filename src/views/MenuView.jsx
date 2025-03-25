import React from "react";
import Hero from "../assets/hero.png";
import Starters from "../menu/Starters";
import MainCourse from "../menu/MainCourse";
import Pizza from "../menu/Pizza";
import Drinks from "../menu/Drinks";
import { useNavigate } from "react-router-dom";
import "./MenuView.css";

const MenuView = () => {
  const navigate = useNavigate();

  const navigateContact = (e) => {
    e.preventDefault();
    navigate("/contact");
  };

  return (
    <div id="menuView">
      <div className="heroContainer">
        <img src={Hero} alt="hero image" />
        <p>Menu</p>
      </div>
      <div className="pt-60 d-flex flex-column align-items-center">
        <div className="headerTitleCenter mb-2">
          <span>MENU</span>
        </div>
        <h3>Main Menu</h3>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam
          repudiandae eaque earum autem, ipsum modi minima cupiditate laborum
          ipsam quas.
        </p>
      </div>
      <Starters />
      <MainCourse />
      <Pizza />
      <Drinks />
      <div id="banner">
        <img src={Hero} alt="" />
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

export default MenuView;
