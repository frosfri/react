import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Inicio from "./components/Inicio";
import Curso from "./components/curso";
import Contato from "./components/contato";

export default function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Inicio</Link>{" "}
        <Link to="/curso">Curso</Link>{" "}
        <Link to="/contato">Contato</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/curso" element={<Curso />} />
        <Route path="/contato" element={<Contato />} />
      </Routes>
    </BrowserRouter>
  );
}