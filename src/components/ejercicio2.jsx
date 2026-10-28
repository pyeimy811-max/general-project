import React from 'react'
import { useState } from 'react'


const ejercicio2 = () => {
    const[ciudad, setCiudad]= useState("Manizales")
    function viajarBogota() {
        setCiudad("Bogotá");
    }
    function volverACasa() {
        setCiudad("Manizales");
    }
  return (
    <div>
        <h2>Ejercicio 2</h2>
        <button onClick={viajarBogota}>Viajar a Bogotá</button>
        <button onClick={volverACasa}>Volver a casa</button>
        <p>Estoy en: {ciudad}</p>
    </div>
  )
}

export default ejercicio2