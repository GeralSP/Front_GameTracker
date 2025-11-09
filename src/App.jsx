import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Inicio from "./Paginas/Inicio";
import Biblioteca from "./Paginas/Biblioteca";

const App = () => {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Inicio/>}/>
        <Route path="/Biblioteca" element={<Biblioteca/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App