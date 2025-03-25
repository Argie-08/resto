import Modal from "react-bootstrap/Modal";
import { Container, Row, Col } from "react-bootstrap";
import { useContext } from "react";
import { AppContext } from "../AppContext";
import "./OrderOnline.css";

const Modaled = () => {
  const { show, handleClose, modalTitle, modalData, modalVariance } =
    useContext(AppContext);
  return (
    <Modal show={show} onHide={handleClose} size="lg" centered>
      <Modal.Header closeButton>
        <Modal.Title>{modalTitle}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div id="orderOnline" className="w-100">
          <Container className="w-100 ">
            <Row className="mt-5 w-100 ">
              <Col sm={12} style={{ height: "100%" }}>
                <div className="menuContainer w-100 ">
                  <ul className="menu-list w-100">
                    {modalData.map((item, i) => (
                      <li className="w-100 " key={i}>
                        <img src={item.image} alt="Greek Salad" />
                        <div className="w-100">
                          <div className="w-100">
                            <span className="item-name">
                              {item.name} {modalVariance}
                            </span>
                            <span className="dots"></span>
                            <span className="item-price">${item.price}</span>
                          </div>
                          <p className="m-0">Lorem ipsum dolor sit amet.</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default Modaled;
