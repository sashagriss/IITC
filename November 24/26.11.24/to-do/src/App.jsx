import "./App.css";

// Improt components
import Products from "./components/Products";
import Cart from "./components/Cart";

function App() {
  return (
    <div style={{ textAlign: "center" }}>
      <h1>Redux Cart</h1>
      <Products />
      <Cart />
    </div>
  );
}

export default App;
