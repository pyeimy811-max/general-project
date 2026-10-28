import React from 'react'
import { useState } from 'react'

const ejercicio6 = () => {
  const[frutas, setFrutas] = useState([])
  function agregarFruta() {
     setFrutas([...frutas, "mango"]);
  } 
  return (
    <div>
      <h2>Ejercicio 6</h2>
      <button onClick={agregarFruta}>Agregar Fruta</button>
      <ul>
        {frutas.map((fruta, index) => (
          <li key={index}>{fruta}</li>
        ))}
      </ul>
    </div>
  )
}

export default ejercicio6