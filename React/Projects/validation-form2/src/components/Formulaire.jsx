import { useState } from "react";
import "./Formulaire.css"; 

const Formulaire = () => {
  const [formData, setFormData] = useState({
    nom: "",
    email: "",
    password: "",
    genre: "",
    interets: [],
    pays: "",
    presentation: ""
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      let newInterets = [...formData.interets];
      if (checked) newInterets.push(value);
      else newInterets = newInterets.filter(i => i !== value);
      setFormData({ ...formData, interets: newInterets });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const validate = () => {
    const newErrors = {};

 
    if (!formData.nom.trim()) newErrors.nom = "Nom obligatoire";
    else if (formData.nom.trim().length < 3) newErrors.nom = "Minimum 3 caractères";
    else if (!/^[A-Za-z\s]+$/.test(formData.nom)) newErrors.nom = "Uniquement lettres et espaces";

  
    if (!formData.email) newErrors.email = "Email obligatoire";
    else if (!/^\S+@\S+\.\S+$/.test(formData.email)) newErrors.email = "Email invalide";

    
    if (!formData.password) newErrors.password = "Mot de passe obligatoire";
    else if (formData.password.length < 6) newErrors.password = "Minimum 6 caractères";
    else if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])/.test(formData.password))
      newErrors.password = "Doit contenir majuscule, minuscule, chiffre et caractère spécial";

  
    if (!formData.genre) newErrors.genre = "Veuillez sélectionner un genre";

   
    if (formData.interets.length === 0) newErrors.interets = "Sélectionnez au moins un centre d'intérêt";

   
    if (!formData.pays || formData.pays === "--Choisir un pays--") newErrors.pays = "Veuillez choisir un pays";

    if (!formData.presentation) newErrors.presentation = "Présentation obligatoire";
    else if (formData.presentation.length < 10) newErrors.presentation = "Minimum 10 caractères";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      alert("Formulaire soumis avec succès !");
      console.log(formData);
    }
  };

  return (
    <div className="container mt-5">
      <h2>Formulaire d'inscription</h2>
      <form onSubmit={handleSubmit} noValidate>
        
        <div className="mb-3">
          <label className="form-label">Nom et Prénom</label>
          <input
            type="text"
            className={`form-control ${errors.nom ? "is-invalid" : ""}`}
            name="nom"
            value={formData.nom}
            onChange={handleChange}
          />
          <div className="invalid-feedback">{errors.nom}</div>
        </div>

        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            type="email"
            className={`form-control ${errors.email ? "is-invalid" : ""}`}
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          <div className="invalid-feedback">{errors.email}</div>
        </div>

      
        <div className="mb-3">
          <label className="form-label">Mot de passe</label>
          <input
            type="password"
            className={`form-control ${errors.password ? "is-invalid" : ""}`}
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
          <div className="invalid-feedback">{errors.password}</div>
        </div>

      
        <div className="mb-3">
          <label>Genre</label><br />
          {["Homme", "Femme", "Autre"].map((g) => (
            <div className="form-check form-check-inline" key={g}>
              <input
                className="form-check-input"
                type="radio"
                name="genre"
                value={g}
                checked={formData.genre === g}
                onChange={handleChange}
              />
              <label className="form-check-label">{g}</label>
            </div>
          ))}
          <div className="text-danger">{errors.genre}</div>
        </div>

      
        <div className="mb-3">
          <label>Centres d'intérêt</label><br />
          {["Sport", "Lecture", "Voyage", "Programmation"].map((i) => (
            <div className="form-check form-check-inline" key={i}>
              <input
                className="form-check-input"
                type="checkbox"
                name="interets"
                value={i}
                checked={formData.interets.includes(i)}
                onChange={handleChange}
              />
              <label className="form-check-label">{i}</label>
            </div>
          ))}
          <div className="text-danger">{errors.interets}</div>
        </div>

      
        <div className="mb-3">
          <label className="form-label">Pays</label>
          <select
            className={`form-select ${errors.pays ? "is-invalid" : ""}`}
            name="pays"
            value={formData.pays}
            onChange={handleChange}
          >
            <option>--Choisir un pays--</option>
            <option>Maroc</option>
            <option>France</option>
            <option>USA</option>
          </select>
          <div className="invalid-feedback">{errors.pays}</div>
        </div>

     
        <div className="mb-3">
          <label className="form-label">Présentation</label>
          <textarea
            className={`form-control ${errors.presentation ? "is-invalid" : ""}`}
            name="presentation"
            value={formData.presentation}
            onChange={handleChange}
          ></textarea>
          <div className="invalid-feedback">{errors.presentation}</div>
        </div>

        <button className="btn btn-primary" type="submit">Envoyer</button>
      </form>
    </div>
  );
};

export default Formulaire;
