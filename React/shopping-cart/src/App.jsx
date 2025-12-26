import React, { useState, useRef, useEffect } from "react";
import "./App.css";

export default function App() {
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");


  const nameRef = useRef();
  const priceRef = useRef();
  const quantityRef = useRef();


  const productCodes = [
  "737628064502", 
  "3017620422003",
  "7613034623646", 
];

 
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const productsData = await Promise.all(
          productCodes.map(async (code) => {
            const response = await fetch(
              `https://world.openfoodfacts.org/api/v0/product/${code}.json`
            );
            const data = await response.json();

            if (data.status === 0 || !data.product) {
              return {
                id: Date.now(),
                name: "Produit inconnu",
                price: 20,
                quantity: 1
              };
            }

           
            const price =
              data.product.nutriments && data.product.nutriments["price"] 
                ? parseFloat(data.product.nutriments["price"])
                : 20;

            return {
              id: data.product.id || Date.now(),
              name: data.product.product_name || "Produit inconnu",
              price,
              quantity: 1
            };
          })
        );

        setCart(productsData);
        setLoading(false);
      } catch (err) {
        console.error(err);
        setError("Erreur fetch products.");
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);


  const addProduct = () => {
    const name = nameRef.current.value;
    const price = parseFloat(priceRef.current.value);
    const quantity = parseInt(quantityRef.current.value);

    if (!name || price <= 0 || quantity <= 0) return;

    const newProduct = {
      id: Date.now(),
      name,
      price,
      quantity
    };

    setCart([...cart, newProduct]);

   
    nameRef.current.value = "";
    priceRef.current.value = "";
    quantityRef.current.value = "";
  };

  
  const deleteProduct = (id) => {
    setCart(cart.filter((p) => p.id !== id));
  };

  
  const total = cart.reduce((acc, p) => acc + p.price * p.quantity, 0);

  if (loading) return <h2>Loading products...</h2>;
  if (error) return <h2>{error}</h2>;

  return (
    <div className="app-container">
      <h1>🛒 Shopping Cart</h1>

   
      <div className="form-group">
        <input type="text" placeholder="Nom du produit" ref={nameRef} />
        <input type="number" placeholder="Prix" ref={priceRef} />
        <input type="number" placeholder="Quantité" ref={quantityRef} />
        <button className="btn-add" onClick={addProduct}>
          Ajouter au panier
        </button>
      </div>

     
      <table>
        <thead>
          <tr>
            <th>Nom</th>
            <th>Prix</th>
            <th>Quantité</th>
            <th>Total</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((p) => (
            <tr key={p.id}>
              <td>{p.name}</td>
              <td>{p.price}</td>
              <td>{p.quantity}</td>
              <td>{p.price * p.quantity}</td>
              <td>
                <button
                  className="btn-delete"
                  onClick={() => deleteProduct(p.id)}
                >
                  Supprimer
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      
      <h2 className="total">Total Panier: {total} MAD</h2>
    </div>
  );
}
