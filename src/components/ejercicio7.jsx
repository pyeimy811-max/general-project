import React from 'react'
import { useState } from 'react'

const ejercicio7 = () => {
    
    const [colores, setColores]=useState(["rojo", "verde", "azul"])
    function quitarVerde() {
        setColores([...colores].filter((colores)=>colores!="verde"))
}
    function agregarAlInicio() {
        setColores(["negro" , ...colores])
}
    return (
    <div>
        <h2>Ejercicio 7</h2>
        <button onClick={quitarVerde}>Quitar verde</button>
        <button onClick={agregarAlInicio}>Agregar al inicio</button>
        <p>{colores.join(", ")}</p>
    </div>
  )
}

export default ejercicio7