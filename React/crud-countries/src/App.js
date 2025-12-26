import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";


function App() {
  const [countries, setCountries] = useState([
    { id: 1, nom: "Maroc", capital: "Rabat", flag: "https://flagcdn.com/ma.svg", continent: "Afrique" },
    { id: 2, nom: "France", capital: "Paris", flag: "https://flagcdn.com/fr.svg", continent: "Europe" },
  ]);

  const [form, setForm] = useState({ nom: "", capital: "", flag: "", continent: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const addCountry = (e) => {
    e.preventDefault();
    if (!form.nom || !form.capital || !form.flag || !form.continent) return;
    setCountries([...countries, { ...form, id: Date.now() }]);
    setForm({ nom: "", capital: "", flag: "", continent: "" });
  };

  const deleteCountry = (id) => {
    setCountries(countries.filter((c) => c.id !== id));
  };

  return (
    <div className="container py-4">
      <h1 className="text-center mb-4">🌍 CRUD Pays (Simple)</h1>


      <form className="mb-4" onSubmit={addCountry}>
        <div className="row g-2">
          <div className="col-md">
            <input
              type="text"
              name="nom"
              value={form.nom}
              onChange={handleChange}
              placeholder="Nom du pays"
              className="form-control"
            />
          </div>
          <div className="col-md">
            <input
              type="text"
              name="capital"
              value={form.capital}
              onChange={handleChange}
              placeholder="Capitale"
              className="form-control"
            />
          </div>
          <div className="col-md">
            <input
              type="text"
              name="flag"
              value={form.flag}
              onChange={handleChange}
              placeholder="URL du drapeau"
              className="form-control"
            />
          </div>
          <div className="col-md">
            <input
              type="text"
              name="continent"
              value={form.continent}
              onChange={handleChange}
              placeholder="Continent"
              className="form-control"
            />
          </div>
          <div className="col-md-auto">
            <button type="submit" className="btn btn-primary">Ajouter</button>
          </div>
        </div>
      </form>
      

      {/* Liste des pays */}
      <div className="row">
        {countries.map((country) => (
          <div className="col-md-4 mb-3" key={country.id}>
            <div className="card h-100">
              <img src={country.flag} className="card-img-top" alt={country.nom} style={{ height: "150px", objectFit: "cover" }} />
              <div className="card-body">
                <h5 className="card-title">{country.nom}</h5>
                <p className="card-text">
                  Capitale: {country.capital} <br />
                  Continent: {country.continent}
                </p>
                <button className="btn btn-danger btn-sm" onClick={() => deleteCountry(country.id)}>
                  Supprimer
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
