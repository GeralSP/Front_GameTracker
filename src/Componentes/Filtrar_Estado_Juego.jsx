import React, { useEffect, useState } from "react";
import '../Componentes/css/Filtros.css'

const Filtrar_Estado_Juego = ({setJuegos}) => {

    const [estado, setEstado] = useState('')

    const Filtrar_Estado = async (e) => {
        e.preventDefault()
        try{
            const res = await fetch('http://localhost:3001/filtrar_estado', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({estado})
            })

            const respuesta = await res.json()

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
        <form action="" onSubmit={Filtrar_Estado} className="contenedor_filtro">
            <select name="" id="" value={estado} onChange={(e) => setEstado(e.target.value)}>
                <option value="" hidden>Estado</option>
                <option value="terminado">Terminados</option>
                <option value="no terminado">No Terminados</option>
            </select>

            <button type="submit">Filtrar</button>
        </form>
    )
}

export default Filtrar_Estado_Juego