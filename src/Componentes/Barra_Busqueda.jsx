import React, { useState } from "react";
import "../Componentes/css/Barra_Busqueda.css";
import { useNavigate } from "react-router-dom";

const Barra_Busqueda = ({setJuegos}) => {

  const navigate = useNavigate()

  const [nombre, setNombre] = useState("")

  const Buscar_Juego = async (e) => {
    const valor = e.target.value
    setNombre(valor)

    if (valor.trim() === ""){
      navigate(0)
    }

    try {
      const res = await fetch("http://localhost:3001/filtrar_nombre", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ nombre: valor }),
      })

      const datos = await res.json()

      if (!datos.success || !datos.data) {
        setJuegos([])
        return
      }

      const juegos = datos.data.map(j => ({
        juego: j.juego,
        tipos_juego: j.tipos
      }))

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
