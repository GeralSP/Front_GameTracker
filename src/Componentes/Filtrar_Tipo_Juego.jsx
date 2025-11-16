import React, { useEffect, useState } from "react";
import '../Componentes/css/Filtros.css'

const Filtrar_Tipo_Juego = ({setJuegos}) => {

    const [id_tipo_juego, setId_tipo_juego] = useState('')

    // ----------- funcion para buscar un juego por su tipo de juego -----------
    const Filtrar_Tipo = async (e) => {
        e.preventDefault()

        try{
            const res = await fetch('http://localhost:3001/filtrar_tipo_juego', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({id_tipo_juego})
            })

            const respuesta = await res.json()
            
            if(respuesta.data.length === 0){
                return alert('No hay Juegos en esta Categoria')
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

    const [tipo_juego, setTipo_juego] = useState([])

    //Traer tips de juegos
    useEffect(() => {
        const Obtener_Tipo_Juego = async () => {
            try{
                const res = await fetch('http://localhost:3001/obtener_tipos_juegos')
                const datos = await res.json()
                
                setTipo_juego(datos.data)
            }
            catch(error){
                console.error('Error: ' + error)
            }
        }

        Obtener_Tipo_Juego()
    }, [])


    return(
        <form action="" onSubmit={Filtrar_Tipo} className="contenedor_filtro">
            <select name="" id="" value={id_tipo_juego} onChange={(e) => setId_tipo_juego(e.target.value)}>
                <option value="" hidden>Tipo de Juego</option>
                {tipo_juego.map((t) => (
                    <option key={t._id} value={t._id}>{t.nombre_tipo}</option>
                ))}
            </select>

            <button type="submit">Filtrar</button>
        </form>
    )
}

export default Filtrar_Tipo_Juego