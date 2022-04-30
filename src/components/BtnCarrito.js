import React from 'react'
import { useNavigate } from 'react-router-dom'
import '../styles/Styles.css'

const BtnCarrito = () => {
    const irCarrito = () => {
    navigate("/cart")
}
const navigate = useNavigate()
  return (
    <button className='bnt-cart' onClick={irCarrito}><img src='https://i.imgur.com/tJmHEZX.png' alt='carrito' /></button>
  )
}

export default BtnCarrito