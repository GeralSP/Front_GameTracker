import React from "react";
import '../Componentes/css/Tarjeta_Resena.css'

const Tarjeta_Resena = ({info_juego}) => {
    if (!info_juego || !info_juego.resenas) {
        return <h2>Cargando reseñas...</h2>
    }

    if (info_juego.resenas.length === 0) {
        return <h2>No hay reseñas</h2>
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
                        <button>Eliminar</button>
                    </div>
                </div>
            ))}
        </>
    )
}

export default Tarjeta_Resena