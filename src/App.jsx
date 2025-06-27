import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import './App.css'
import Home from "./pages/home/Home";
import Vehicle from "./pages/vehicle/Vehicle";

function App() {
  const moviles = [
    { numero: "15", descripcion: "Camioneta blanca", herramientas: [{ nombre: "Lanza", descripcion: "1 pulgada", urlFoto: "foto.com" }, { nombre: "Lanza", descripcion: "44 pulgadas", urlFoto: "foto.com" }] },
    { numero: "16", descripcion: "Camion magirus", herramientas: [] },
    { numero: "17", descripcion: "Camioneta roja", herramientas: [] },
    { numero: "18", descripcion: "unidad de traslado", herramientas: [] },
    { numero: "19", descripcion: "Camion forestal", herramientas: [] }
  ];
  return <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home moviles={moviles} />} />
          {moviles.map((movil, index) => (
            <Route key={index} path={`/movil-${movil.numero}`} element={<Vehicle movil={movil} />} />
          ))}

        </Route>
      </Routes>
    </BrowserRouter>
  </>
}

export default App
