import React from "react";
import { Link } from "react-router-dom";

const Encabezado = () => {
    return(
        <div>
            <img src="" alt="" />
            <Link to={'/'}>Inicio</Link>
            <Link to={'/Biblioteca'}>Biblioteca</Link>
        </div>
    )
}

export default Encabezado