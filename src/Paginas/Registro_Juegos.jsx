import React from "react";
import Encabezado from "../Componentes/Encabezado";
import { Link } from "react-router-dom";
import Formu_Agregar_Juego from '../Componentes/Formu_Agregar_Juego'

const Registro_Juegos = () => {
    return(
        <div className="contenedor_juego_info">
            <Encabezado/>

            <Link to={'/Biblioteca'}>Regresar</Link>

            <div>
                <Formu_Agregar_Juego/>
            </div>
        </div>
    )
}

export default Registro_Juegos