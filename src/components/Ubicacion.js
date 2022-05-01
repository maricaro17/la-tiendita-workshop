import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import Select from "react-select";

import "../styles/Styles.css";

const options = [
  {
    value: "mexico city marriot reforma hotel",
    label: "Mexico City Marriot Reforma Hotel",
  },
  {
    value: "mexico city international airport",
    label: "Mexico City International Airport",
  },
  { value: "mexico city mexico", label: "Mexico City Mexico" },
];

const Ubicacion = () => {
  const [show, setShow] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [location, setLocation] = useState("Ubicacion")
  const handleChange = (e) => {
    setSelectedOption(e.value);
    setLocation(e.value);
  };

  return (
    <>
      <FontAwesomeIcon
        icon={faLocationDot}
        style={{ color: "var(--scarlet)" }}
        onClick={handleShow}
      />
      {location}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>¿Donde quieres recibir tu pedido?</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <p>
                Para poder ofrecerte productos dentro de tu área, necesitamos tu
                dirección
              </p>
              <Select
                defaultValue={selectedOption}
                onChange={handleChange}
                options={options}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button
            onClick={handleClose}
            style={{
              width: "100%",
              background: "#0AC763",
              border: "1px solid #0AC763",
            }}
          >
            Buscar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Ubicacion;
