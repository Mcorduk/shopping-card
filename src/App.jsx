import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Router from "./routes/Router";

function App() {
  const [cartItems, setCartItems] = useState([]);
  return (
    <>
      <Header cartItems={cartItems} setCartItems={setCartItems} />
      <Router />;
    </>
  );
}

export default App;
