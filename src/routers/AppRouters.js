import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Inicio from '../containers/Inicio';


function AppRouters() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Inicio />}></Route>
        <Route path="/" element={<Inicio />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouters;
