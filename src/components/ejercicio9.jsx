import React from 'react'
import { useState } from 'react'

const ejercicio9 = () => {
    
    const [producto, setProducto]=useState({nombre:"Café de Caldas", precio:12000, disponible:true})
    function subirPrecio() {
        setProducto({...producto, precio:producto.precio+1000})
}
    function agotar() {
        setProducto({...producto, disponible:false})
}
    return (
        <div>
            <h2>Ejercicio9</h2>
            <button onClick={subirPrecio}>Subir Precio</button>
            <button onClick={agotar}>Agotar</button>
            <p>{producto.nombre}: ${producto.precio}</p>
            <p>{producto.disponible ? "Disponible" : "Agotado"}</p>
        </div>
  )
}

export default ejercicio9