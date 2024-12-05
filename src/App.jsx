import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
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

  return (
    <div>
      <h1>JSON Data</h1>
      <ul>
        {data.map((item, index) => (
          <li key={index}>
            <h2>{item.name}</h2>
            <p>Category: {item.category}</p>
            <p>Price: ${item.price.toFixed(2)}</p>
            <img
              src={item.image.desktop}
              alt={`${item.name} thumbnail`}
              style={{ width: "100px" }}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
