import React from 'react'

const Pagar = () => {
  return (
    <div>
        <form>
            <h1>Formulario de Pago</h1><br />
            <div>
                <h3>Correo Electronico</h3>
                <input type="text" name="emal" placeholder="Email"/> <br />
            </div>
            <div>
              <h3>Informacion de la Tarjeta</h3>
              <div>
                <input type="text" name="tarjeta"  placeholder="1234 1234 1234"/>
                <img src="https://i.imgur.com/CyvISpJ.png" />
              </div>
              <input type="text" placeholder="MM / YY " name="tarj"/><br />
            </div>
            <div>
              <h3>Nombre en la tarjeta</h3>
              <input type="text" name="name" placeholder="Nombre de la Tarjeta "/> <br />
            </div> 
            <button>Pagar</button>          
        </form>
    </div>
  )
}

export default Pagar