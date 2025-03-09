import React from "react";
import { useEffect } from "react";
import Hero from "../assets/hero.png";
import Menu from "../components/Menu";
import MainStarter from "../mainmenu/MainStarter";
import "./MainMenu.css";

const MainMenu = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div id="mainMenu">
      <div className="heroContainer">
        <img src={Hero} alt="hero image" />
        <p>Menu</p>
      </div>
      <Menu />
      <MainStarter />
    </div>
  );
};

export default MainMenu;
