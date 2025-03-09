import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Calendar } from "primereact/calendar";
import { Dropdown } from "primereact/dropdown";
import { InputOtp } from "primereact/inputotp";
import { Dialog } from "primereact/dialog";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShield, faCheck } from "@fortawesome/free-solid-svg-icons";
import { Spin } from "antd";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Logo from "../assets/logo3.png";
import "primereact/resources/themes/lara-light-cyan/theme.css";
import "primeicons/primeicons.css";
import "./Hero.css";

const Hero = () => {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [selectedNumber, setSelectedNumber] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState();
  const [token, setTokens] = useState();
  const [visibleDialog, setVisibleDialog] = useState(false);
  const [visibleOTP, setVisibleOTP] = useState(false);
  const [visibleOTPconfirmation, setVisibleOTPconfirmation] = useState(false);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const bookedDate = new Date(date);
  const formattedDate = bookedDate.toDateString();

  const numbers = [
    { count: 1 },
    { count: 2 },
    { count: 3 },
    { count: 4 },
    { count: 5 },
  ];

  const times = [
    { time: "10:00 - 12:00 PM" },
    { time: "12:00 - 2:00 PM" },
    { time: "2:00 - 4:00 PM" },
    { time: "4:00 - 6:00 PM" },
    { time: "6:00 - 8:00 PM" },
  ];

  const handleBooking = (e) => {
    e.preventDefault();

    const fields = [
      { id: "bookingName", value: name },
      { id: "bookingDate", value: date },
      { id: "bookingTime", value: time },
      { id: "bookingNumber", value: selectedNumber },
    ];

    let allFieldsValue = true;

    fields.forEach(({ id, value }) => {
      const element = document.getElementById(id);
      if (!value) {
        element.classList.add("error");
        allFieldsValue = false;
      } else {
        element.classList.remove("error");
      }
    });

    if (allFieldsValue) {
      setVisibleDialog(true);
    }
  };

  const dialogHeader = (
    <div>
      <div className="d-flex justify-content-center align-items-center gap-2 mb-3">
        <img src={Logo} alt="Logo" id="dialogLogo" />
        <h4 className="text-center fw-bold fs-2 m-0">Eula Restaurant</h4>
      </div>

      <div className="d-flex justify-content-between">
        <div className="headerDiv">
          <p className="fw-normal m-0">dipologcity</p>
          <p className="fw-normal m-0">09972677080</p>
        </div>
        <div className="headerDiv">
          <p className="fw-normal m-0"> eularestaurant@gmail.com</p>
          <p className="fw-normal m-0">eularestaurant.com</p>
        </div>
      </div>
    </div>
  );
  const dialogOTP = (
    <div className="p-3 position-relative">
      <FontAwesomeIcon
        icon={faShield}
        style={{ fontSize: "100px", color: "#349705" }}
        className="mb-3"
      />
      <FontAwesomeIcon
        icon={faCheck}
        style={{ fontSize: "50px", color: "#ffffff", top: "35%" }}
        className="mb-3 position-absolute start-50 translate-middle"
      />
      <p className="fw-bold fs-3" style={{ fontFamily: "Inter" }}>
        Enter OTP Code
      </p>
    </div>
  );
  const confirmOTP = (
    <div className="d-flex justify-content-center align-items-center gap-2 mb-3">
      <img src={Logo} alt="" style={{ height: "30px" }} />
      <p className="m-0 fs-2">OTP Confirmation</p>
    </div>
  );

  const handleOTPConfirmation = () => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setVisibleDialog(false);
      setVisibleOTP(true);
    }, 2000);
  };

  const verifyOTP = () => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setVisibleOTP(false);
      setVisibleOTPconfirmation(true);
    }, 2000);
  };

  const handleReference = () => {
    setName("");
    setDate("");
    setTime("");
    setSelectedNumber("");
    setVisibleOTPconfirmation(false);
  };

  return (
    <div className="hero">
      <Container>
        <Row className="h-100 d-flex align-items-stretch">
          <Col xs={12} sm={12} md={8}>
            <div className="heroText">
              <p>Best place to find your food love</p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
                perspiciatis odit quos, corrupti doloribus labore ipsa est
                dolorem iste mollitia optio praesentium temporibus qui
                voluptatem alias ab? Asperiores, aut accusamus accusantium
                tempore omnis ipsa facere consequuntur harum ex velit, placeat,
                modi perspiciatis distinctio sit perferendis nulla dolorem
                architecto quia. Ratione?
              </p>
              <div className="d-flex gap-4 heroBtnContainer">
                <button onClick={() => navigate("/menu")}>Main menu</button>
                <button>Seasonal menu</button>
              </div>
            </div>
          </Col>
          <Col xs={12} sm={12} md={4} className="h-100">
            <form onSubmit={handleBooking}>
              <div>
                <p>RESERVATION</p>
                <p>Book a table</p>
              </div>
              <div className="mb-3">
                <p className="inter">Your name</p>
                <input
                  type="text"
                  placeholder="Your Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  id="bookingName"
                />
              </div>
              <div className="mb-3 position-relative">
                <p className="inter">Select date</p>
                <Calendar
                  value={date}
                  onChange={(e) => setDate(e.value)}
                  dateFormat="dd/mm/yy"
                  placeholder="Select Date"
                  id="bookingDate"
                />
                <i className="pi pi-calendar"></i>
              </div>
              <div className="mb-3 position-relative">
                <p className="inter">Select Time</p>
                <Dropdown
                  value={time}
                  onChange={(e) => setTime(e.value)}
                  options={times}
                  optionLabel="time"
                  placeholder="Select time"
                  className="w-full md:w-14rem"
                  id="bookingTime"
                />
              </div>
              <div className="mb-5">
                <p className="inter">Number of persons</p>
                <Dropdown
                  value={selectedNumber}
                  onChange={(e) => setSelectedNumber(e.value)}
                  options={numbers}
                  optionLabel="count"
                  placeholder="Select number of persons"
                  className="w-full md:w-14rem"
                  id="bookingNumber"
                />
              </div>
              <button type="submit">Book now</button>
            </form>
          </Col>
        </Row>
        <Row className="w-100 mt-5">
          <Col>
            <div className="w-100 d-flex flex-column align-items-end heroContact">
              <div className="d-flex gap-3">
                <p>Book a table by phone</p>
                <p>(+63)976-267-7080</p>
              </div>
              <p className="bookText">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
                eos ullam dolore dolorum harum nemo ipsam laboriosam ratione
                omnis possimus!
              </p>
            </div>
          </Col>
        </Row>
      </Container>

      <Dialog
        header={dialogHeader}
        visible={visibleDialog}
        onHide={() => {
          if (!visibleDialog) return;
          setVisibleDialog(false);
        }}
        style={{ width: "50vw" }}
        breakpoints={{ "960px": "75vw", "641px": "90vw" }}
      >
        <Row>
          <Col md={6} sm={12} xs={12} className="mb-5">
            <p className="m-0 fs-5 fw-bold pb-2">Booking Details:</p>
            <div className="dialogDetails">
              <div className="d-flex gap-3">
                <label htmlFor="tableDate">Booking Date:</label>
                <input
                  type="text"
                  readOnly
                  value={formattedDate}
                  style={{
                    fontFamily: "Inter",
                    paddingLeft: "1rem",
                  }}
                  className="no-border"
                />
              </div>
              <div className="d-flex gap-3">
                <label htmlFor="tableDate">Selected Time:</label>
                <input
                  type="text"
                  readOnly
                  value={time.time}
                  style={{
                    fontFamily: "Inter",
                    paddingLeft: "1rem",
                  }}
                  className="no-border"
                />
              </div>
              <div className="d-flex gap-3">
                <label htmlFor="tableDate">Number of persons:</label>
                <input
                  type="text"
                  readOnly
                  value={selectedNumber.count}
                  style={{
                    fontFamily: "Inter",
                    paddingLeft: "1rem",
                  }}
                  className="no-border"
                />
              </div>
            </div>
            <p className="m-0 fs-5 fw-bold pb-2 mt-5">Booked by:</p>
            <div>
              <div className="d-flex gap-3">
                <label htmlFor="tableDate">Client Name:</label>
                <input
                  type="text"
                  readOnly
                  value={name}
                  style={{
                    fontFamily: "Inter",
                    paddingLeft: "1rem",
                  }}
                  className="no-border"
                />
              </div>
              <div className="d-flex gap-3">
                <label htmlFor="tableDate">Email address:</label>
                <input
                  type="text"
                  placeholder="OTP will be sent to this email"
                  className="responsiveInput"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  style={{
                    fontFamily: "Inter",
                    paddingLeft: "1rem",
                    marginBottom: ".5rem",
                  }}
                />
              </div>
              <div className="d-flex gap-3">
                <label htmlFor="tableDate">Contact Number:</label>
                <input
                  type="text"
                  maxLength="11"
                  value={contact}
                  onChange={(e) => setContact(e.target.value)}
                  style={{
                    fontFamily: "Inter",
                    paddingLeft: "1rem",
                  }}
                />
              </div>
            </div>
          </Col>
          <Col
            md={6}
            sm={12}
            xs={12}
            className="hv-100 d-flex align-items-center justify-content-center"
          >
            <p
              style={{ fontFamily: "Inter" }}
              className="fw-bold fs-1 text-center"
            >
              BOOKING
            </p>
          </Col>
        </Row>
        <Row>
          <Col sm={12} className="mt-3">
            <Spin spinning={loading}>
              <button
                id="bookingBtn"
                onClick={handleOTPConfirmation}
                disabled={loading}
              >
                {loading ? "Loading..." : "Confirm"}
              </button>
            </Spin>
          </Col>
        </Row>
      </Dialog>
      <Dialog
        header={dialogOTP}
        visible={visibleOTP}
        onHide={() => {
          if (!visibleOTP) return;
          setVisibleOTP(false);
        }}
        style={{ width: "20vw" }}
        breakpoints={{ "960px": "50vw", "641px": "90vw" }}
      >
        <InputOtp />
        <Spin spinning={loading}>
          <button id="verifyOTP" onClick={verifyOTP} disabled={loading}>
            {loading ? "Loading..." : "Verify OTP"}
          </button>
        </Spin>
      </Dialog>
      <Dialog
        header={confirmOTP}
        visible={visibleOTPconfirmation}
        onHide={() => {
          if (!visibleOTPconfirmation) return;
          setVisibleOTPconfirmation(false);
        }}
        style={{ width: "25vw", fontFamily: "Inter" }}
        breakpoints={{ "960px": "50vw", "641px": "90vw" }}
      >
        <p className="fs-3" style={{ fontFamily: "Inter" }}>
          Thank you!
        </p>
        <label htmlFor="referenceNumber">Here's your reference number</label>
        <input
          type="text"
          value="0123456789"
          className="no-border fw-bold"
          id="referenceNumber"
          readOnly
        />
        <button className="mt-4" id="verifyOTP" onClick={handleReference}>
          Okay
        </button>
      </Dialog>
    </div>
  );
};

export default Hero;
