import React from "react";
import '../Componentes/css/Tarjeta_Resena.css'
import { useNavigate } from "react-router-dom";

const Tarjeta_Resena = ({info_juego}) => {

    const navigate = useNavigate()

    if (!info_juego || !info_juego.resenas) {
        return <h2>Cargando reseñas...</h2>
    }

    if (info_juego.resenas.length === 0) {
        return <h2>No hay reseñas</h2>
    }

    const Eliminar_Reserva = async (id_resena) => {
        const confirmar = confirm('¿De verdad quieres eliminar esta reseña?')
        if(!confirmar) return
        
        try{
            const res = await fetch('http://localhost:3001/eliminar_resena', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({id_resena})
            })

            const respuesta = await res.json()

            if(!respuesta.success){
                return alert('No se pudo aliminar la reseña')
            }

            alert('Reseña Eliminada')
            navigate(0)
        }
        catch(error){
            console.error('Error: ' + error)
        }
    }

    return(
        <>
            {info_juego.resenas.map((r) => (
                <div className="contenedor_tarjeta_resena" key={r._id}>
                    <div>

                        <div>
                            <h1>{r.nombre_autor}</h1>
                            <p>{r.createdAt}</p>
                        </div>

                        <p>{r.descripcion}</p>
                    </div>

                    <div>
                        <button>Editar</button>
                        <button onClick={() => Eliminar_Reserva(r._id)}>Eliminar</button>
                    </div>
                </div>
            ))}
        </>
    )
}

export default Tarjeta_Resena