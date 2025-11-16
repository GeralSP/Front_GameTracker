import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Tarjeta_Juego from "../Componentes/Tarjeta_Juego";
import Encabezado from "../Componentes/Encabezado";
import '../Paginas/css/General.css'
import Carrusel from "../Componentes/Carrusel";
import '../Paginas/css/Inicio.css'
import Barra_Busqueda from "../Componentes/Barra_Busqueda";

const Inicio = () => {

    const [juegos_cargados, setJuegos_cargados] = useState([])

    // ----------- funcion para obtener 3 juegos aleatorias apenas se cargue la pagina -----------
    useEffect(() => {
        const Obtener_Juegos = async () => {
            try{
                const res = await fetch('http://localhost:3001/obtener_juegos')
                const datos = await res.json()

                let cantidad = datos.data.length

                if(cantidad.length === 0) return

                let indices_random = []

                while (indices_random.length < 3) {
                    const random = Math.floor(Math.random() * cantidad)
                    if (!indices_random.includes(random)) {
                        indices_random.push(random)
                    }
                }

                const juegos_random = indices_random.map(r => ({
                    juego: datos.data[r].juego,
                    tipos_juego: datos.data[r].tipos
                }))
        
                setJuegos_cargados(juegos_random)
            }
            catch(error){
                console.error('Error: ' + error)
            }
        }

        Obtener_Juegos()
    }, [])

    //Resultados de la barra de busqueda
    const [juegos, setJuegos] = useState([])

    return(
        <div className="contenedor_inicio">
            <Encabezado/>
            <div>
                <Carrusel/>

                <Barra_Busqueda
                    setJuegos={setJuegos}
                />

                <Link to={'/Biblioteca'}>Explorar Mas</Link>
                <div>
                    {/* --- Mapear los juegos --- */}
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
                                    id_juego={j.juego._id}
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
                                    id_juego={j.juego._id}
                                />
                            ))}
                        </>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Inicio