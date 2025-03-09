import React from "react";
import { Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import Homepage from "./views/Homepage";
import MenuView from "./views/MenuView";
import MainMenu from "./views/MainMenu";
import About from "./views/About";
import Contact from "./views/Contact";
import Restonavbar from "./components/restonavbar";
import Footer from "./components/Footer";
import "./App.css";

const App = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("/data.json");
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error("Error fetching JSON:", error);
      }
    }
    fetchData();
  }, []);

  console.log(data);

  return (
    <div>
      <Restonavbar />
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/menuView" element={<MenuView />}></Route>
        <Route path="/menu" element={<MainMenu />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
