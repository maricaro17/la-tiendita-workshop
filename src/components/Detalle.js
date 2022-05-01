import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Contador from './Contador';
import '../styles/Styles.css'
import { url } from '../helpers/url';
import axios from 'axios';

const Detalle = () => {
    const [productos, setProductos] = useState([]);
    const { id } = useParams();

    const getData = async () => {
        await axios.get(url + id)
            .then((res) => {
                console.log(res.data);
                setProductos(res.data[0]);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    useEffect(() => {
        getData();
    }, []);

    return (
        <div>
            <div>
                <img
                    src={productos.Img} alt="imagen" />
                <div>
                    <h4 >{productos.name}</h4>
                    <p>
                        {productos.detalle}</p>
                    <h6 >Precio: {productos.Precio}</h6>
                    <p>Precios con IVA incluidos</p>
                    <span>Selecciona la madurez que desees</span><br />
                    <select name="valor">
                        <option value="1">Maduro (Para Hoy)</option>
                        <option value="2">Normal (3-5 días) </option>
                        <option value="3">Verde (7 días)</option>
                    </select>
                    <Contador />
                    <button >Agregar</button>
                </div>
            </div>
        </div>
    );
}


export default Detalle;