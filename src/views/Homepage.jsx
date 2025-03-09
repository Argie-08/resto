import React from "react";
import { useEffect } from "react";
import Hero from "../components/Hero";
import Menu from "../components/Menu";
import BestPlace from "../components/BestPlace";
import PopularDishes from "../components/PopularDishes";
import Gallery from "../components/Gallery";
import OrderOnline from "../components/OrderOnline";
import Review from "../components/Review";
import ChefVideo from "../components/ChefVideo";
import "./Homepage.css";

const Homepage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="homepage">
      <Hero />
      <Menu />
      <BestPlace />
      <PopularDishes />
      <Gallery />
      <OrderOnline />
      <Review />
      <ChefVideo />
    </div>
  );
};

export default Homepage;
