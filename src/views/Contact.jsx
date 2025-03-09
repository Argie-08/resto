import { useEffect } from "react";
import Hero from "../assets/hero.png";
import Destination from "../contact/Destination";
import Map from "../contact/Map";
import "./Contact.css";

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div id="contact">
      <div className="heroContainer">
        <img
          src={Hero}
          alt="hero image"
          className="w-100 h-100 object-fit-cover"
        />
        <p>Contact Us</p>
      </div>
      <Destination />
      <Map />
    </div>
  );
};

export default Contact;
