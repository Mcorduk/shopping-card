import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Router from "./routes/Router";

function App() {
  const [cartItems, setCartItems] = useState({
    //FIXME I am an example product in this cart
    /* Product ID as key */
    0: { name: "test", price: null, img: null, quantity: null },
  });

  /* Will add item to cartItems if It doesn't exist
  Since object key is product Id, if Item already exists,it will be replaced
  probably with a new product quantity, see ProductCard component*/
  const addItemToCart = (item) => {
    if (item) setCartItems((lastCartItems) => ({ ...lastCartItems, item }));
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
