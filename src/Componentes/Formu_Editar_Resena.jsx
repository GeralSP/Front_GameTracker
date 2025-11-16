import React, { useEffect, useState } from "react";
import '../Componentes/css/Formu_Editar_Resena.css'
import { useNavigate, useParams } from "react-router-dom";

const Formu_Editar_Resena = () => {

    const navigate = useNavigate()

    const id_resena = useParams().id_resena

    const [nombre_autor, setNombre_autor] = useState('')
    const [descripcion, setDescripcion] = useState('')
    const [id_juego, setId_juego] = useState('')

    // ----------- funcion para obtener los datos de una reseña apenas se cargue la pagina -----------
    useEffect(() => {
        const Obtener_Resena = async () => {
            try{
                const res = await fetch('http://localhost:3001/obtener_resena_id', {
                    method: 'POST',
                    headers: {
                        'Content-type': 'application/json'
                    },
                    body: JSON.stringify({id_resena})
                })

                const datos = await res.json()

                setId_juego(datos.data.id_juego._id)
                setDescripcion(datos.data.descripcion)
                setNombre_autor(datos.data.nombre_autor)
            }
            catch(error){
                console.error('Error: ' + error)
            }
        }

        Obtener_Resena()
    }, [])

    // ----------- funcion para editar la reseña -----------
    const Editar_Resena = async (e) => {
        e.preventDefault()

        try{
            const res = await fetch('http://localhost:3001/editar_resena', {
                method: 'PUt',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({nombre_autor, id_resena, descripcion})
            })

            const respuesta = await res.json()

            if(!respuesta.success){
                alert('No se pudo editar la reserva')
            }

            alert('Reseña Editada')
            navigate(`/Juego/${id_juego}`)
        }
        catch(error){
            console.error('Error: ' + error)
        }
    }

    return(
        <form action="" className="contenedor_formu_editar_resena" onSubmit={Editar_Resena}>

            <h1>Editar Reseña</h1>

            <div>
                <label htmlFor="">Nombre Autor</label>
                <input type="text" value={nombre_autor} onChange={(e) => setNombre_autor(e.target.value)}/>
            </div>

            <div>
                <label htmlFor="">Reseña</label>
                <textarea name="" id="" value={descripcion} onChange={(e) => setDescripcion(e.target.value)}></textarea>
            </div>

            <div>
                <button type="submit">Editar</button>
            </div>
        </form>
    )
}

export default Formu_Editar_Resena