import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import Contador from './Contador';
import '../styles/Styles.css'

const Detalle = () => {
    const navigate = useNavigate()
    let getlocalstorage = JSON.parse(localStorage.getItem('Carrito'))
    const params = useParams()
    const { id } = params
    let productos = getlocalstorage.find(ele => ele.id == id)
    const [counter, conteo] = useState(productos.cantidad);
    const findInd = getlocalstorage.findIndex(ele => ele.id == id)
    const handleActualize = () => {
        getlocalstorage[findInd].cantidad = counter
        localStorage.setItem('Carrito', JSON.stringify(getlocalstorage))
    }

    return (
        <div>
            <h3 onClick={() => navigate("/cart")}>Cerrar</h3>
            <img src={productos.img} alt="imagen" />
            <div>
                <h4>{productos.name}</h4>
                <h6>Precio: 1000</h6>
                <p> {productos.detalle}
                </p>
                <select name="valor">
                    <option value="1">Maduro (Para Hoy)</option>
                    <option value="2">Normal (3-5 días) </option>
                    <option value="3">Verde (7 días)</option>
                </select>
                <div>
                    <Contador conteo={conteo} />
                    <button className='bnt-cart' onClick={() => { handleActualize(); navigate("/carrito") }}>Agregar</button>
                </div>
            </div>
        </div>
    )
}

export default Detalle;