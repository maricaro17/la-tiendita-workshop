import React, { Component } from 'react'
import { Card, Button } from "react-bootstrap";
import { Link } from 'react-router-dom';

export default class Cards extends Component {
    render() {
        const { id, img, name, detalle, precio } = this.props.fruta;
        const key = this.key
        return (
            <div>
                <Card style={{ width: '22rem' }}>
                    <Card.Img src={img} />
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text>{detalle}</Card.Text>
                        <div>$ {precio}/kg</div>
                    </Card.Body>                    
                </Card>
            </div>
        );
    }
}
