import React, { Component } from "react";
import { Link } from "react-router-dom";
import { url } from "../helpers/url";

let contador = 1;
export default class Carrito extends Component {
    constructor() {
        super();
        this.state = {
            tienda: [],

        };
    }

    async componentDidMount() {
        const resp = await fetch(url);
        const data = await resp.json();
        this.setState({ articulos: data });
        console.log(this.state.articulos);
    }


    render() {
        return (
            <div>{
                contador == 0
                    ?
                    <div>
                        <h1>Tu canasta esta vacía</h1>
                        <img
                            src="https://i.imgur.com/Mw44uMw.png"
                            alt="cartvacio"
                        />
                    </div>
                    :
                    <div>
                        <h1>Su carrito contiene </h1>
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>Imagen</th>
                                    <th>Producto</th>
                                    <th>Precio</th>
                                    <th>Cantidad</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.articulos.map((carrito) => {
                                    return (
                                        <tr key={carrito.id}>
                                            <td>
                                                <td>{carrito.id}</td>
                                                <td><img src={carrito.img} width="40px" height="50px" alt="" /></td>
                                            </td>
                                            <td>{carrito.name}</td>
                                            <td>{carrito.Precio}</td>                                            
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>
            }
                <Link to={"/pagar"}><button >Pagar</button></Link>
            </div>
        )
    }
}