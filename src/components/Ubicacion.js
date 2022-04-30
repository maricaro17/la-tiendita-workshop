import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import Modal from 'react-bootstrap/Modal'
import '../styles/Styles.css'

const Ubicacion = () =>{
     const [show, setShow] = useState(false);

     const handleClose = () => setShow(false);
     const handleShow = () => setShow(true);

     return(
         <>
       <FontAwesomeIcon icon={faLocationDot} style={{color:"var(--scarlet)"}} onClick={handleShow}/>   

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>¿Donde quieres recibir tu pedido?</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <p>Para poder ofrecerte productos dentro de tu área, necesitamos tu dirección</p>
              <Form.Control
                type="text"
                placeholder ="Mexico City Marriott Reforma Hotel"
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleClose} style={{width:"100%", "background":"#0AC763", "border": "1px solid #0AC763"}}>
            Buscar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
     
}

export default Ubicacion