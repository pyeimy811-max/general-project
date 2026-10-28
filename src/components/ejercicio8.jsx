import React from 'react'
import { useState } from 'react'


const ejercicio8 = () => {
  const[estudiante, setEstudiante] = useState({nombre:"", semestre:0})
  function llenarDatos(){
    setEstudiante({nombre:"Yeimy", semestre:4});
  }
  return (
    <div>
      <h2>Ejercicio 8</h2>
      <button onClick={llenarDatos}>Llenar Datos</button>
      <p>Nombre: {estudiante.nombre}</p>
      <p>Semestre: {estudiante.semestre}</p>
    </div>
  )
}

export default ejercicio8