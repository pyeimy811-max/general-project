import React from 'react'
import { useState } from 'react'

const ejercicio5 = () => {
    const [precio, setPrecio]=useState(50000)
    function aplicarDescuento() {
        setPrecio(precio-(precio*0.10))
}
    return (
    <div>
        <h2>Ejercicio 5</h2>
        <button onClick={aplicarDescuento}>Aplicar descuento</button>
        <p>{precio}</p>
    </div>
  )
}

export default ejercicio5;