import React, { Component } from 'react'
import { Card, Button } from "react-bootstrap";

export default class Cards extends Component {
    render() {
        const { img, name, detalle, precio } = this.props.producto;
        const id = this.key
        return (
            <div>
                <Card style={{ width: '22rem' }}>
                    <Card.Img src={img} />
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text>{detalle}</Card.Text>
                        <div>$ {precio}/kg</div>
                    </Card.Body>
                    <Button onClick={console.log(id)}>Agregar</Button>
                </Card>
            </div>
        );
    }
}
