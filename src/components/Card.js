import React from "react";
import { Card as CardBootstrap, Button } from "react-bootstrap";


const Card = ({productos}) => {
  return (
    <div>
        {productos.map((elem) => (
          <CardBootstrap key={elem.id} style={{ width: "14rem" }}>
            <CardBootstrap.Img src={elem.img} />
            <CardBootstrap.Body>
              <CardBootstrap.Title>{elem.name}</CardBootstrap.Title>
              <CardBootstrap.Text>{elem.detalle}</CardBootstrap.Text>
              <div>$ {elem.precio}/kg</div>
            </CardBootstrap.Body>
            <Button >Agregar</Button>
          </CardBootstrap>
        ))}

    </div>
  )
}

export default Card