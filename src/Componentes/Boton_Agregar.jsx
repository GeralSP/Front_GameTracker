import React from "react";
import '../Componentes/css/Boton_Agregar.css'
import { Link } from "react-router-dom";

const Boton_Agregar = () => {
    return(
        <div className="contenedor_boton_agregar">
            <Link to={'/Agregar_Juego'}>
                <p>+</p>
            </Link>
        </div>
    )
}

export default Boton_Agregar