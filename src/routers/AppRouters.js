import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Detalle from '../components/Detalle';
import Inicio from '../containers/Inicio';

function AppRouters() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Inicio />}></Route>        
        <Route path="/detalle/:id" element={<Detalle />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouters;
