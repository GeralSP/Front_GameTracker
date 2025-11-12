import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Formu_Editar_Juego = () => {

    const navigate = useNavigate()

    const id_juego = useParams().id_juego
    
    const [imagen_url, setImagen_url] = useState('')
    const [nombre, setNombre] = useState('')
    const [estado, setEstado] = useState('')
    const [puntuacion, setPuntuacion] = useState(1)
    const [horas_jugadas, setHoras_jugadas] = useState('')
    const [id_tipo_juego, setId_tipo_juego] = useState('')
    const [tipo_juego, setTipo_juego] = useState([])
    const [tipo_juego_seleccionado, setTipo_juego_seleccionado] = useState([])

    useEffect(() => {
        //Obtener los datos a editar
        const Obtener_Juego_Id = async () => {
            try{
                const res = await fetch('http://localhost:3001/obtener_juego_id', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({id_juego})
                })

                const datos = await res.json()

                setImagen_url(datos.data.juego.imagen_url)
                setNombre(datos.data.juego.nombre)
                setEstado(datos.data.juego.estado)
                setPuntuacion(datos.data.juego.puntuacion)
                setHoras_jugadas(datos.data.juego.horas_jugadas)
                
                let array_tipo_juego = datos.data.tipos

                const tiposSeleccionados = array_tipo_juego.map(t => ({
                    id: t.id_tipo_juego._id,
                    nombre: t.id_tipo_juego.nombre_tipo
                }))
                setTipo_juego_seleccionado(tiposSeleccionados)
                setId_tipo_juego(tiposSeleccionados.map(t => t.id))
            }
            catch(error){
                console.error('Error: ' + error)
            }
        }
        Obtener_Juego_Id()

        //Obtener los tipos de juegos
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

    const Editar_Juego = async (e) => {
        e.preventDefault()

        const confirmar = confirm('¿Quieres editar este juego?')
        if(!confirmar) return

        try{
            const res = await fetch('http://localhost:3001/editar_juego', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({id_juego, imagen_url, nombre, estado, puntuacion, horas_jugadas, id_tipo_juego})
            })

            const respuesta = await res.json()

            if(!respuesta.success){
                alert('No se puedo editar el juego')
            }

            alert('Juego editado correctamente')
            navigate(`/Juego/${id_juego}`)

        }
        catch(error){
            console.error('Error: ' + error)
        }
    }

    const Agregar = (id_tipo_juego, nombre) => {
        let id_nombre = {
            id: id_tipo_juego,
            nombre: nombre
        }

        setTipo_juego_seleccionado(prev => {
            // Evitar duplicados
            const yaExiste = prev.some(item => item.id === id_tipo_juego)
            if (yaExiste) return prev

            const nuevoArray = [...prev, id_nombre]
            setId_tipo_juego(nuevoArray.map(item => item.id))

            return [...prev, id_nombre]
        })
    }

    const Quitar_Seleccionado = (id) => {
        setTipo_juego_seleccionado(prev => {
            const nuevoArray = prev.filter(item => item.id !== id)
            setId_tipo_juego(nuevoArray.map(item => item.id))
            return nuevoArray
        })
    }

    return(
        <div className="contenedor_formu_agregar_juego">
            <h1>Editar Juego</h1>

            <div>
                {imagen_url && <img src={imagen_url} alt="Imagen del juego" />}

                <form action="" onSubmit={Editar_Juego}>
                    <div>
                        <label htmlFor="">Imagen URL</label>

                        <input type="text" value={imagen_url} onChange={(e) => setImagen_url(e.target.value)} placeholder="Imagen URL" required/>
                    </div>

                    <div>
                        <label htmlFor="">Nombre</label>

                        <input type="text" value={nombre || ''} onChange={(e) => setNombre(e.target.value)} placeholder="Nombre" required/>
                    </div>

                    <div>
                        <label htmlFor="">Estado</label>

                        <select name="" id="" value={estado || ''} onChange={(e) => setEstado(e.target.value)}>
                            <option value="" hidden>Seleccion el estado</option>
                            <option value="no terminado">No Terminado</option>
                            <option value="terminado">Terminado</option>
                        </select>
                    </div>

                    <div>
                        <label htmlFor="">Puntuacion</label>

                        <select name="" id="" value={puntuacion} onChange={(e) => setPuntuacion(Number((e.target.value)))}>
                            <option value="" hidden>Puntuacion...</option>
                            <option value={1}>1</option>
                            <option value={2}>2</option>
                            <option value={3}>3</option>
                            <option value={4}>4</option>
                            <option value={5}>5</option>
                        </select>

                        <h1>
                            {"★".repeat(Number(puntuacion))}
                            {"☆".repeat(5 - Number(puntuacion))}    
                        </h1>
                    </div>

                    <div>
                        <label htmlFor="">Horas Jugadas</label>

                        <input type="number" value={horas_jugadas} onChange={(e) => setHoras_jugadas(e.target.value)} placeholder="Horas Jugadas"/>
                    </div>

                    <div>
                        <label htmlFor="">Tipo de Juego</label>
                        <div>
                            {tipo_juego_seleccionado.map((t) => (
                                <p key={t.id}>{t.nombre} <span onClick={() => Quitar_Seleccionado(t.id)}>X</span></p>
                            ))}
                        </div>
                    </div>

                    <button type="submit">Editar</button>
                </form>
            </div>

            <h2>Tipo de Juego</h2>

            <div>
                {tipo_juego.map((t) => (
                    <p key={t._id} onClick={() => Agregar(t._id, t.nombre_tipo)}>{t.nombre_tipo}</p>
                ))}
            </div>
        </div>
    )
}

export default Formu_Editar_Juego