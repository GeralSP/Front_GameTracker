import React from "react";
import Encabezado from "../Componentes/Encabezado";
import { Link } from "react-router-dom";
import Formu_Editar_Juego from "../Componentes/Formu_Editar_Juego";

const Editar_Juego = () => {
    return(
        <div className="contenedor_juego_info">
            <Encabezado/>

            <Link to={'/Biblioteca'}>Regresar</Link>

           <div>
                <Formu_Editar_Juego/>
           </div>
        </div>
    )
}

export default Editar_Juego