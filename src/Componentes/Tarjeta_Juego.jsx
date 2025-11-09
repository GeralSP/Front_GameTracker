import React, { useState } from "react";
import '../Componentes/css/Tarjeta_Juego.css'
import { Link } from "react-router-dom";

const Tarjeta_Juego = ({imagen, nombre, puntuacion, estado,horas_jugadas, tipos_juego}) => {

    const [oculto, setOculto] = useState(false)

    const Mostrar_Tipos_Juego = () => {
        if(oculto === false){
            setOculto(true)
        }
        else{
            setOculto(false)
        }
    }

    return(
        <div className="contendor_tarjeta_juego">
            <div className="caja_tarjeta_juego">
                <img src={imagen} alt="" />
                <h1>{nombre}</h1>

                <div>
                    <p>
                        {"★".repeat(Number(puntuacion))}
                        {"☆".repeat(5 - Number(puntuacion))}
                    </p>
                    <p>{estado}</p>
                    <p>{horas_jugadas} Horas</p>
                </div>

                <p onClick={Mostrar_Tipos_Juego}>{oculto === false ? ("Ver") : ("Ocultar")}</p>

                {oculto === false ? 
                (
                    null
                ) :
                (
                    <div>
                        {tipos_juego.map((t, i) => (
                            <p key={i}>{t.id_tipo_juego?.nombre_tipo}</p> // 👈 usa el populate del backend
                        ))}
                    </div>
                )}
            </div>

            <Link>Ver más</Link>
        </div>
    )
}

export default Tarjeta_Juego