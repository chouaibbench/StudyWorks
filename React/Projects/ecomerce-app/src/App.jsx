import { CartProvider } from "./context/CartContext";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";

function App() {
  return (
    <CartProvider>
      <Navbar />
      <div className="d-flex justify-content-around mt-4">
        <ProductList />
        <Cart />
      </div>
    </CartProvider>
  );
}

export default App;
