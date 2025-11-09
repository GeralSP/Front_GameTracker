import React, { useEffect, useState } from "react";
import Encabezado from "../Componentes/Encabezado";;
import Barra_Busqueda from "../Componentes/Barra_Busqueda";
import '../Paginas/css/Biblioteca.css'
import Tarjeta_Juego from "../Componentes/Tarjeta_Juego";
import Filtrar_Estado_Juego from "../Componentes/Filtrar_Estado_Juego";
import Filtrar_Tipo_Juego from "../Componentes/Filtrar_Tipo_Juego";
import Boton_Agregar from "../Componentes/Boton_Agregar";

const Biblioteca = () => {

    const [juegos_cargados, setJuegos_cargados] = useState([])

    //Traer todos los juegos
    useEffect(() => {
        const Obtener_Juegos = async () => {
            try{
                const res = await fetch('http://localhost:3001/obtener_juegos')
                const datos = await res.json()
        
               const detalles_juegos = datos.data.map(j => ({
                    juego: j.juego,
                    tipos_juego: j.tipos
               }))

               setJuegos_cargados(detalles_juegos)
            }
            catch(error){
                console.error('Error: ' + error)
            }
        }

        Obtener_Juegos()
    }, [])


    //Resultados de la busqueda o filtros
    const [juegos, setJuegos] = useState([])

    return(
        <div className="contenedor_biblioteca">
            
            <Boton_Agregar/>

            <Encabezado/>
            
            <div>
                <Barra_Busqueda
                    setJuegos={setJuegos}
                />

                <div>
                    <Filtrar_Estado_Juego
                        setJuegos={setJuegos}
                    />
                    <Filtrar_Tipo_Juego
                        setJuegos={setJuegos}
                    />
                </div>

                <div>
                    {juegos.length === 0 || !juegos ? 
                    (
                        <>
                            {juegos_cargados.map((j) => (
                                <Tarjeta_Juego
                                    key={j.juego._id}
                                    imagen={j.juego.imagen_url}
                                    nombre={j.juego.nombre}
                                    puntuacion={j.juego.puntuacion}
                                    estado={j.juego.estado}
                                    horas_jugadas={j.juego.horas_jugadas}
                                    tipos_juego={j.tipos_juego}
                                />
                            ))}
                        </>
                    ) : 
                    (
                        <>
                            {juegos.map((j) => (
                                <Tarjeta_Juego
                                    key={j.juego._id}
                                    imagen={j.juego.imagen_url}
                                    nombre={j.juego.nombre}
                                    puntuacion={j.juego.puntuacion}
                                    estado={j.juego.estado}
                                    horas_jugadas={j.juego.horas_jugadas}
                                    tipos_juego={j.tipos_juego}
                                />
                            ))}
                        </>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Biblioteca