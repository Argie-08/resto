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
import { AppContext } from "./AppContext";
import "./App.css";

const App = () => {
  const [show, setShow] = useState(false);
  const [modalTitle, setModalTitle] = useState("");
  const [modalVariance, setModalVariance] = useState("");
  const [modalData, setModalData] = useState([]);

  const handleClose = () => setShow(false);
  const handleShow = async (data) => {
    try {
      const response = await fetch("/data.json");
      const jsonData = await response.json();
      const filterData = jsonData.filter((item) => item.category === data);
      setModalData(filterData);
    } catch (error) {
      console.log(error);
    }

    if (data === "desserts") {
      setModalTitle("Sweet Desserts");
      setModalVariance("Desserts");
    }
    if (data === "coffee") {
      setModalTitle("Amazing Coffee");
      setModalVariance("Coffee");
    }
    if (data === "main-menu") {
      setModalTitle("Best Breakfasts");
      setModalVariance("Menu");
    } else {
      setModalTitle("Great Cocktails");
      setModalVariance("Drinks");
    }

    setShow(true);
  };

  return (
    <>
      <AppContext.Provider
        value={{
          handleClose,
          handleShow,
          show,
          modalTitle,
          modalData,
          modalVariance,
        }}
      >
        <Restonavbar />
        <Routes>
          <Route path="/" element={<Homepage />}></Route>
          <Route path="/menuView" element={<MenuView />}></Route>
          <Route path="/menu" element={<MainMenu />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
        </Routes>
        <Footer />
      </AppContext.Provider>
    </>
  );
};

export default App;
