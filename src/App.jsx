import { useTextos } from "./hooks/useTextos.js";
import Navbar from "./components/Navbar";
import './App.css'
import { useEffect, useState } from "react";
import Ejercicio1 from './components/ejercicio1.jsx';
import Ejercicio3 from './components/ejercicio3.jsx';
import Ejercicio5 from './components/ejercicio5.jsx';
import Ejercicio7 from "./components/ejercicio7.jsx";
import Ejercicio9 from "./components/ejercicio9.jsx";

function leerSeccion(){
    return window.location.hash.slice(1) || "inicio";
}

function App() {
    // Idioma por defecto español
    const [idioma, setIdioma] = useState("es");
    const [activo, setActivo] = useState(leerSeccion);
    const [consulta, setConsulta] = useState("");
    const [textoGrande, setTextoGrande] = useState(false);
    const datos = useTextos(idioma);
    console.log(datos);

    const ingles = idioma === "en"; 
    const titulo = activo === "favoritos"
     ? datos.textos?.navbar.botones.favoritos
     :datos.textos?.navbar.enlaces[activo];

     //va a sincronizar del estado del componente con el hash de la URL
     useEffect(() => {
        function actualizar(){
            setActivo(leerSeccion());
            setConsulta("");
        }
        window.addEventListener("hashchange", actualizar);
        return () => window.removeEventListener("hashchange", actualizar);
     }, []);

     useEffect(() => {
        document.documentElement.lang;
     }, [idioma]);

     useEffect(() => {
        document.documentElement.style.fontSize = textoGrande ? "112%" : "";
        return ()=> {
            document.documentElement.style.fontSize = "";
        }
     }, [textoGrande]);

     function buscar(valor){
        setConsulta(valor);
        setActivo("heroes");
        //window.history es el que da acceso al historial de la pestaña
        window.history.replaceState(null, "", "#heroes");
     }

    return (
        <>
            <Navbar
            {...datos} 
            idioma={idioma} 
            cambiarIdioma={setIdioma} 
            activo={activo}
            onBuscar={buscar}
            texto={textoGrande}
            alternarTexto={()=> setTextoGrande((valor) => !valor)}
            />
            <div><Ejercicio1 /></div>
            <div><Ejercicio3 /></div>
            <div><Ejercicio5 /></div>
            <div><Ejercicio7 /></div>
            <div><Ejercicio9/></div>
        </>
    );
}

export default App;