import { useState } from "react";
import "./App.css";
import Router from "./routes/Router";

function App() {
  const [cartItems, setCartItems] = useState([]);
  return <Router cartItems={cartItems} setCartItems={setCartItems} />;
}

export default App;
