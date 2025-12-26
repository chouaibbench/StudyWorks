import React, { useState } from "react";
import "./index.css"; 

function App() {
  const [foods] = useState([
    { id: 1, name: "Poulet grillé", calories: 165, protein: 31, carbs: 0, fat: 3.6 },
    { id: 2, name: "Riz cuit", calories: 130, protein: 2.7, carbs: 28, fat: 0.3 },
    { id: 3, name: "Avocat", calories: 160, protein: 2, carbs: 8, fat: 15 },
    { id: 4, name: "Pomme", calories: 52, protein: 0.3, carbs: 14, fat: 0.2 },
    { id: 5, name: "Œuf", calories: 78, protein: 6, carbs: 0.6, fat: 5 },
  ]);

  const [meal, setMeal] = useState([]);
  const [quantities, setQuantities] = useState({});

  const handleChange = (id, value) => setQuantities({ ...quantities, [id]: value });

  const addToMeal = (food) => {
    const quantity = Number(quantities[food.id]);
    if (quantity <= 0) return;
    const existing = meal.find(item => item.id === food.id);
    if (existing) {
      setMeal(meal.map(item => item.id === food.id ? { ...item, quantity: item.quantity + quantity } : item));
    } else {
      setMeal([...meal, { ...food, quantity }]);
    }
    setQuantities({ ...quantities, [food.id]: "" });
  };

  const removeFromMeal = (id) => setMeal(meal.filter(item => item.id !== id));

  const total = meal.reduce(
    (acc, item) => {
      acc.calories += (item.calories * item.quantity) / 100;
      acc.protein += (item.protein * item.quantity) / 100;
      acc.carbs += (item.carbs * item.quantity) / 100;
      acc.fat += (item.fat * item.quantity) / 100;
      return acc;
    },
    { calories: 0, protein: 0, carbs: 0, fat: 0 }
  );

  const progressColor = total.calories < 800 ? "bg-success" : "bg-danger";
  const progressPercent = Math.min((total.calories / 1200) * 100, 100);

  return (
    <div className="center-container">
      <div className="container py-4" style={{ maxWidth: "900px" }}>
        <h1 className="mb-4 text-center">Calculateur de calories</h1>
        <div className="row">
          {/* Aliments disponibles */}
          <div className="col-md-6 mb-4">
            <h3>Aliments disponibles</h3>
            {foods.map(food => (
              <div key={food.id} className="card mb-3 shadow-sm">
                <div className="card-body d-flex align-items-center">
                  <div className="flex-grow-1">
                    <h5 className="card-title">{food.name}</h5>
                    <p className="card-text mb-0">{food.calories} kcal / 100g</p>
                  </div>
                  <input
                    type="number"
                    min="0"
                    className="form-control me-2"
                    placeholder="g"
                    value={quantities[food.id] || ""}
                    onChange={(e) => handleChange(food.id, e.target.value)}
                    style={{ width: "80px" }}
                  />
                  <button className="btn btn-success btn-sm" onClick={() => addToMeal(food)}>
                    Ajouter
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Mon repas */}
          <div className="col-md-6">
            <h3>Mon repas</h3>
            {meal.length === 0 && <p>Aucun aliment ajouté.</p>}

            {meal.map(item => (
              <div key={item.id} className="card mb-2">
                <div className="card-body d-flex justify-content-between align-items-center">
                  <span>{item.name} - {item.quantity} g</span>
                  <button className="btn btn-danger btn-sm" onClick={() => removeFromMeal(item.id)}>
                    Supprimer
                  </button>
                </div>
              </div>
            ))}

            {meal.length > 0 && (
              <div className="mt-4">
                <div className="card shadow-sm p-3">
                  <h5>Totaux :</h5>
                  <ul className="list-group mb-3">
                    <li className="list-group-item">Calories: {total.calories.toFixed(1)} kcal</li>
                    <li className="list-group-item">Protéines: {total.protein.toFixed(1)} g</li>
                    <li className="list-group-item">Glucides: {total.carbs.toFixed(1)} g</li>
                    <li className="list-group-item">Lipides: {total.fat.toFixed(1)} g</li>
                  </ul>

                  <div className="progress">
                    <div
                      className={`progress-bar ${progressColor} progress-bar-striped progress-bar-animated`}
                      role="progressbar"
                      style={{ width: `${progressPercent}%` }}
                      aria-valuenow={total.calories}
                      aria-valuemin="0"
                      aria-valuemax="1200"
                    >
                      {total.calories.toFixed(0)} kcal
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
