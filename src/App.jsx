import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Router from "./routes/Router";

function App() {
  const [cartItems, setCartItems] = useState([]);
  return (
    <>
      <Router cartItems={cartItems} setCartItems={setCartItems} />;
    </>
  );
}

export default App;
