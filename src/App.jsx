import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Router from "./routes/Router";

function App() {
  const [cartItems, setCartItems] = useState([]);

  const addItemToCart = (item) => {
    setCartItems((lastCartItems) => [...lastCartItems, item]);
  };

  return (
    <>
      <BrowserRouter>
        <Header cartItems={cartItems} />
        <Router cartItems={cartItems} addItemToCart={addItemToCart} />
      </BrowserRouter>
    </>
  );
}

export default App;
