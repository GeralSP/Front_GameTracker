import React from "react";
import { Link } from "react-router-dom";
import '../Componentes/css/Encabezado.css'

const Encabezado = () => {
    return(
        <div className="contenedor_encabezado">
            <p>GameTracker</p>
            
            <div>
                <Link to={'/'}>Inicio</Link>
                <Link to={'/Biblioteca'}>Biblioteca</Link>
            </div>
        </div>
    )
}

export default Encabezado