import React from "react";
import { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Calendar } from "primereact/calendar";
import { Dropdown } from "primereact/dropdown";
import Coffee from "../assets/coffee.png";
import "./Destination.css";

const Destination = () => {
  const [date, setDate] = useState(null);
  const [time, setTime] = useState(null);
  const [selectedNumber, setSelectedNumber] = useState(null);

  const numbers = [
    { name: 1 },
    { name: 2 },
    { name: 3 },
    { name: 4 },
    { name: 5 },
  ];
  return (
    <div id="destination">
      <Row>
        <Col md={5} sm={12} xs={12} className="position-relative">
          <img src={Coffee} alt="contact image1" />
          <form>
            <div>
              <p>RESERVATION</p>
              <p>Book a table</p>
            </div>
            <div className="mb-3">
              <p className="inter">Your name</p>
              <input type="text" placeholder="Your Name" />
            </div>
            <div className="mb-3 position-relative">
              <p className="inter">Select date</p>
              <Calendar
                value={date}
                onChange={(e) => setDate(e.value)}
                dateFormat="dd/mm/yy"
                placeholder="Select Date"
              />
              <i className="pi pi-calendar"></i>
            </div>
            <div className="mb-3 position-relative">
              <p className="inter">Select Time</p>
              <Calendar
                id="calendar-timeonly"
                value={time}
                onChange={(e) => setTime(e.value)}
                timeOnly
                placeholder="Select Time"
              />
              <i className="pi pi-clock"></i>
            </div>
            <div className="mb-5">
              <p className="inter">Number of persons</p>
              <Dropdown
                value={selectedNumber}
                onChange={(e) => setSelectedNumber(e.value)}
                options={numbers}
                optionLabel="name"
                placeholder="Select number of persons"
                className="w-full md:w-14rem"
              />
            </div>
            <button type="submit">Book now</button>
          </form>
        </Col>
        <Col
          md={{ span: 6, offset: 1 }}
          sm={12}
          xs={12}
          className="d-flex flex-column justify-content-center"
        >
          <div className="headerTitleRight mb-2">
            <span>RESTAURANT</span>
          </div>
          <h4>Your ultimate destination to get quality cuisines.</h4>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas,
            architecto eos. Veritatis totam ipsum modi rerum debitis quae. Quam,
            impedit.
          </p>
          <div className="d-flex flex-column" style={{ gap: "8px" }}>
            <div className="contactText">
              <p>Our Phone</p>
              <p>(+63)9972677080</p>
            </div>
            <div className="contactText">
              <p>Our Email</p>
              <p>eula@gmail.com</p>
            </div>
            <div className="contactText">
              <p>Our Address</p>
              <p>Dipolog City</p>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Destination;
