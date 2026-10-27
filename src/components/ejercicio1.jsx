import React from 'react'
import { useState } from "react";

const ejercicio1 = () => {
    const [nombre, setNombre] = useState("")
    function cambiarNombre() {
        setNombre("Yaneth");
}
  return (
    <div>
        <h2>Ejercicio 1</h2>
        <button onClick={cambiarNombre}>Cambiar nombre</button>
        <p>{nombre}</p>
    </div>
  )
}

export default ejercicio1;