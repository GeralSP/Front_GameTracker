import React, { useEffect, useState } from "react";
import Encabezado from "../Componentes/Encabezado";
import Tarjeta_Info_Juego from "../Componentes/Tarjeta_Info_Juego";
import { Link, useParams } from "react-router-dom";
import '../Paginas/css/Juego_Info.css'
import Formu_Resenas from "../Componentes/Formu_Resenas";
import Tarjeta_Resena from "../Componentes/Tarjeta_Resena";

const Juego_Info = () => {

    const id_juego = useParams().id_juego

    const [info_juego, setInfo_juego] = useState('')

    // ----------- funcion para obtener la informacion de un juego por su id -----------
    useEffect(() => {
        const Obtener_Juego_Id = async () => {
            try{
                const res = await fetch('http://localhost:3001/obtener_juego_id', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({id_juego })
                })

                const datos = await res.json()
  
                setInfo_juego(datos.data)
            }
            catch(error){
                console.error('Error: ' + error)
            }
        }

        Obtener_Juego_Id()
    }, [])


    const [ver_resenas, setVer_resenas] = useState(false)

    const Mostrar_Resenas = () => {
        if(ver_resenas === false){
            setVer_resenas(true)
        }
        else{
            setVer_resenas(false)
        }
    }

    return(
        <div className="contenedor_juego_info">
            <Encabezado/>

            <Link to={'/Biblioteca'}>Regresar</Link>

            <div>
                <Tarjeta_Info_Juego
                    info_juego={info_juego}
                />

                <h1>Reseñas</h1>

                <Formu_Resenas
                    id_juego={id_juego}
                />

                <h3 onClick={Mostrar_Resenas}>{ver_resenas === false ? ('Ver') : ('Ocultar')}</h3>

                {ver_resenas === false ? 
                (
                    null
                ) : 
                (
                    <Tarjeta_Resena
                        info_juego={info_juego}
                    />
                )}
            </div>
        </div>
    )
}

export default Juego_Info