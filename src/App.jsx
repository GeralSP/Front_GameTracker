import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Inicio from "./Paginas/Inicio";
import Biblioteca from "./Paginas/Biblioteca";
import Juego_Info from "./Paginas/Juego_Info";
import Registro_Juegos from "./Paginas/Registro_Juegos";
import Editar_Resena from "./Paginas/Editar_Resena";
import Editar_Juego from "./Paginas/Editar_Juego";

const App = () => {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Inicio/>}/>
        <Route path="/Biblioteca" element={<Biblioteca/>}/>
        <Route path="/Juego/:id_juego" element={<Juego_Info/>}/>
        <Route path="/Agregar_Juego" element={<Registro_Juegos/>}/>
        <Route path="/Editar_Reseña/:id_resena" element={<Editar_Resena/>}/>
        <Route path="/Editar_Juego/:id_juego" element={<Editar_Juego/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App