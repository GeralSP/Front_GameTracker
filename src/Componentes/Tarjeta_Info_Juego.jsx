import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom";
import '../Componentes/css/Tarjeta_Info_Juego.css'

const Tarjeta_Info_Juego = ({info_juego}) => {

    return(
        <div className="contenedor_tarjeta_info_juego">
            {info_juego && (
                <>
                    <div key={info_juego.juego._id}>
                        <img src={info_juego.juego.imagen_url} alt="" />

                        <div>
                            <h1>{info_juego.juego.nombre}</h1>
                            
                            <div>
                                <p>
                                    {"★".repeat(Number(info_juego.juego.puntuacion))}
                                    {"☆".repeat(5 - Number(info_juego.juego.puntuacion))}
                                </p>
                                <p>{info_juego.juego.estado}</p>
                                <p>{info_juego.juego.horas_jugadas} Horas</p>
                            </div>

                            <div>
                                {info_juego.tipos.map((t) => (
                                    <p key={t._id}>{t.id_tipo_juego.nombre_tipo}</p>
                                ))}
                            </div>
                        </div>
                    </div>

                    <Link>Editar Informacion</Link>
                </>
            )}
        </div>
    )
}

export default Tarjeta_Info_Juego