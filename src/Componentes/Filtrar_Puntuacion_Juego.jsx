import React, { useEffect, useState } from "react";
import '../Componentes/css/Filtros.css'

const Filtrar_Puntuacion_Juego = ({setJuegos}) => {

    const [puntuacion, setPuntuacion] = useState('')

    const Filtrar_Puntuacion = async (e) => {
        e.preventDefault()
        
        try{
            const res = await fetch('http://localhost:3001/filtrar_puntuacion', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({puntuacion})
            })

            const respuesta = await res.json()
            
            if(respuesta.data.length === 0){
                return alert('No hay Juegos con esta puntuacion')
            }

            const juegos_detalles = respuesta.data.map(j => ({
                juego: j.juego,
                tipos_juego: j.tipos
            }))

            setJuegos(juegos_detalles)
        }
        catch(error){
            console.error('Error: ' + error)
        }
    }


    return(
        <form action="" onSubmit={Filtrar_Puntuacion} className="contenedor_filtro">
            <select name="" id="" value={puntuacion} onChange={(e) => setPuntuacion(e.target.value)}>
                <option value="" hidden>Puntuacion Juego</option>
                <option value="1">1 estrella</option>
                <option value="2">2 estrella</option>
                <option value="3">3 estrella</option>
                <option value="4">4 estrella</option>
                <option value="5">5 estrella</option>
            </select>
            <button type="submit">Filtrar</button>
        </form>
    )
}

export default Filtrar_Puntuacion_Juego