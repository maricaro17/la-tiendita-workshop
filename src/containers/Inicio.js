import React from 'react'
import "bootstrap/dist/css/bootstrap.css";
import BtnCarrito from '../components/BtnCarrito'
import '../styles/Styles.css'
import Ubicacion from '../components/Ubicacion'


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
            <section className="ofertas" id="productOferta">
              
            </section>            
            <h2>Los más populares</h2>
            <section classname="populares" id="productPopular">
            </section>
      </div>
    </main>

  )
}

export default Inicio