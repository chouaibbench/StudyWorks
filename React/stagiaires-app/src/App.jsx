import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Stagiaires from "./components/Stagiaires.jsx";
import Absences from "./components/Absences.jsx";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Stagiaires />} />
        <Route path="/absences" element={<Absences />} />
      </Routes>
    </BrowserRouter>
  );
}
