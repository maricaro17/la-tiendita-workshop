import React, { Component } from 'react'
import { Card, Button } from "react-bootstrap";
import { Link } from 'react-router-dom';

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
                    <Link to={`/detalle/${id}`}>
                        <Button >Agregar</Button>
                    </Link>
                </Card>
            </div>
        );
    }
}
