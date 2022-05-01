import React, { useCallback, useEffect, useState } from 'react'
import "bootstrap/dist/css/bootstrap.css";
import BtnCarrito from '../components/BtnCarrito'
import '../styles/Styles.css'
import Ubicacion from '../components/Ubicacion'
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { url } from '../helpers/url';


const Inicio = () => {
  
  return (
    <main>
      <div className='nabvar'>
        <span className="logo">Tiendita</span>
        <nav>
          <ul>         
            <li className='Ubicacion'><Ubicacion/>Ubicacion</li>
            <li><BtnCarrito /></li>
          </ul>
        </nav>
      </div>
      <img src='https://i.imgur.com/mta2sIh.png' alt='logo' />
      <div>
      <h2>Ofertas</h2>            
            <section class="ofertas" id="productOferta">
              <button onClick={() => {agregarLocal(); navigate("/cart")}}>Agregar</button>
            </section>            
            <h2>Los más populares</h2>
            <section class="populares" id="productPopular">
            </section>
      </div>
    </main>

  )
}

export default Inicio