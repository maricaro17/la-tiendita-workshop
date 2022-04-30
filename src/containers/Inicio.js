import React from 'react'
import BtnCarrito from '../components/BtnCarrito'
import '../styles/Styles.css'

const Inicio = () => {
  return (
    <main>
      <div className='nabvar'>
        <span className="logo">Tiendita</span>
        <nav>
          <ul>
            <li><i class="Ubicacion"></i><span id="ubicación">Ubicación</span></li>
            <li><BtnCarrito /></li>            
          </ul>
        </nav>
      </div>
      <img src='https://i.imgur.com/mta2sIh.png' alt='logo' />
      <div>
      <h2>Ofertas</h2>            
            <section class="ofertas" id="productOferta">
            </section>            
            <h2>Los más populares</h2>
            <section class="populares" id="productPopular">
            </section>
      </div>
    </main>

  )
}

export default Inicio