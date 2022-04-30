import React, { useState } from 'react'
import '../styles/Styles.css'

const Contador = (props) => {

    let conteo = props.conteo
    const[counter, setCounter] = useState(1);

    const handleRestar = () => {
        if(counter > 1 ) {
            setCounter(counter - 1)
        }
        conteo(counter)
    }

    const handleSumar = () => {
        setCounter(counter + 1)
        conteo(counter)
    }

    const handleContador = () => {
        
    }

  return (
    <div className='contenedor' onClick={() => handleContador}>
        <button className='btns' onClick={handleRestar}>-</button>
        <h2>{counter}</h2>
        <button className='btns' onClick={handleSumar}>+</button>
    </div>
  )
}

export default Contador