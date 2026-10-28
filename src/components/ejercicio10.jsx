import React from 'react'
import { useState } from 'react'


const ejercicio10 = () => {
  const[tareas, setTareas] = useState([])
  function agregarTarea(){
    const id = tareas.length + 1
    setTareas([...tareas,{id, titulo: "Tarea "+id, hecha:false}])
  }
  function completarTarea(id){
    setTareas(tareas.map(t =>t.id === id ? {...t, hecha:true}: t));
  }
  return (
    <div>
      <h2>Ejercicio 10</h2>
      <button onClick={agregarTarea}>Agregar Tarea</button>
      <ul>
        {tareas.map((tarea) => (
          <li key={tarea.id}>
            {tarea.titulo} - {tarea.hecha ? "Completada" : "Pendiente"}
            {!tarea.hecha && (
              <button onClick={() => completarTarea(tarea.id)}>Completar</button>
            )}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ejercicio10