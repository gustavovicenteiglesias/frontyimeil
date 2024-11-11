import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import BandejaEntrada from "./pages/BandejaEntrada";
import EnviarMensaje from "./pages/EnviarMensaje";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";

function App() {
  const [currentUser, setCurrentUser] = useState(false);

  useEffect(() => {
    console.log("realizar consulta en localstorage si hay usuario ");
    console.log("Inicio de la pausa");

    setTimeout(() => {
      console.log("Fin de la pausa después de 3 segundos");
      setCurrentUser(true)
    }, 3000); // Pausa de 3000 milisegundos (3 segundos)
  }, []);

  return (
    <>
      <Navbar usuario={currentUser} />

      <Routes>
        <Route path="/" element={<Home />} />
        {currentUser}&&
        <Route path="/entradas" element={<BandejaEntrada />} />
        <Route path="/enviar" element={<EnviarMensaje />} />
      </Routes>
    </>
  );
}

export default App;
