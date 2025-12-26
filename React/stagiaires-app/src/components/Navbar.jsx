import {Link } from "react-router-dom";

export default function Navbar() {
    return (
        <nav className="p-3 bg-dark tet-white mb-4">
            <Link to="/" className="me-3 text-white">Stagiares</Link>
            <Link to="/absences" className="text-white">Absences</Link>
        </nav>
    )
}