import React from "react";
import { Link } from "react-router-dom";
import Encabezado from '../Componentes/Encabezado'
import Formu_Editar_Resena from "../Componentes/Formu_Editar_Resena";

const Editar_Resena = () => {

    return(
        <div className="contenedor_juego_info">
            <Encabezado/>

            <Link to={'/Biblioteca'}>Regresar</Link>

           <div>
                <Formu_Editar_Resena/>
           </div>
        </div>
    )
}

export default Editar_Resena