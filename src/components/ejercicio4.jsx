import React from 'react'
import { useState } from 'react'


const ejercicio4 = () => {
    const[contador, setContador] = useState(0) 
    function incrementar() {
        setContador(contador + 1);
    }
    function disminuir() {
        setContador(contador - 1);
    }
    function reiniciar() {
        setContador(0);
    }
  return (
    <div>
      <h2>Ejercicio 4</h2>
      <button onClick={incrementar}>Incrementar</button>
      <button onClick={disminuir}>Disminuir</button>
      <button onClick={reiniciar}>Reiniciar</button>
      <p>Contador: {contador}</p>
    </div>
  )
}

export default ejercicio4