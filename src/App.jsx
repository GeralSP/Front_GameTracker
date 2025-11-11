import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Inicio from "./Paginas/Inicio";
import Biblioteca from "./Paginas/Biblioteca";
import Juego_Info from "./Paginas/Juego_Info";

const App = () => {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Inicio/>}/>
        <Route path="/Biblioteca" element={<Biblioteca/>}/>
        <Route path="/Juego/:id_juego" element={<Juego_Info/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App