import React, { useState } from "react";
import '../Componentes/css/Formu_Resenas.css'
import { useNavigate } from "react-router-dom";

const Formu_Resenas = ({id_juego}) => {

    const navigate = useNavigate()

    const [nombre_autor, setNombre_autor] = useState('Autor_Anonimo')
    const [descripcion, setDescripcion] = useState('')

    // ----------- funcion para subir una reseña -----------
    const Subir_Resena = async (e) => {
        e.preventDefault()

        try{
            const res = await fetch('http://localhost:3001/agregar_resena', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({nombre_autor, descripcion, id_juego})
            })

            const respuesta = await res.json()

            console.log(respuesta)

            if(!respuesta.success){
                return alert('No se pudo subir la reseña')
            }
            else{
                alert('¡Reseña Publicada!')
                navigate(0)
            }
        }
        catch(error){
            console.error('Error: ' + error)
        }
    }

    return(
        <form action="" className="contenedor_formu_resenas" onSubmit={Subir_Resena}>
            <div>
                <label htmlFor="">Nombre Autor</label>
                <input type="text" value={nombre_autor} onChange={(e) => setNombre_autor(e.target.value)} required/>
            </div>
            
            <div>
                <label htmlFor="">Reseña</label>
                <textarea name="" id="" value={descripcion} onChange={(e) => setDescripcion(e.target.value)} required></textarea>
            </div>

            <button type="submit">Subir</button>
        </form>
    )
}

export default Formu_Resenas