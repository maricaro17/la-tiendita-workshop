import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Carrito from '../components/Carrito';
import Detalle from '../components/Detalle';
import Gracias from '../components/Gracias';
import Pagar from '../components/Pagar';
import Inicio from '../containers/Inicio';

function AppRouters() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Inicio />}></Route>        
        <Route path="/detalle/:productos/:id" element={<Detalle />}/>
        <Route path="/pagar" element={<Pagar />}/>
        <Route path="/gracias" element={<Gracias />}/>
        <Route path="/cart" element={<Carrito />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouters;
