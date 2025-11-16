import React, { useState } from "react";
import "../Componentes/css/Barra_Busqueda.css";
import { useNavigate } from "react-router-dom";

// ({setJuegos}) son props
const Barra_Busqueda = ({setJuegos}) => {

  // --- hook o funcion para nevagar entre las paginas ---
  const navigate = useNavigate()

  // --- Hook o funcion para modificar estados ---
  const [nombre, setNombre] = useState("")

  // ----------- funcionar para buscar un juego por su nombre -----------
  const Buscar_Juego = async (e) => {
    const valor = e.target.value
    setNombre(valor)

    if (valor.trim() === ""){
      navigate(0)
    }

    // --- Hacer la peticion al backend ---
    try {
      const res = await fetch("http://localhost:3001/filtrar_nombre", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ nombre: valor }),
      })

      // --- Convertir la respuesta obtenida en un json ---
      const datos = await res.json()

      if (!datos.success || !datos.data) {
        setJuegos([])
        return
      }

      const juegos = datos.data.map(j => ({
        juego: j.juego,
        tipos_juego: j.tipos
      }))

      // --- Guardar los juegos en una variable ---
      setJuegos(juegos)

    } catch (error) {
      console.error("Error: " + error)
      setJuegos([])
    }
  }

  return (
    <div className="contenedor_barra_busqueda">
      <input
        type="search" placeholder="Busca un juego" value={nombre} onInput={Buscar_Juego}
      />
    </div>
  )
}

export default Barra_Busqueda
