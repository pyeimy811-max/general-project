import React from 'react'
import { useState } from 'react'

const ejercicio3 = () => {
    const [edad, setEdad]=useState(0)
    function asignarEdad() {
        setEdad(19)
}
    return (
    <div>
        <h2>Ejercicio 3</h2>
        <button onClick={asignarEdad}>Asignar edad</button>
        <p>{edad}</p>
    </div>
  )
}

export default ejercicio3;