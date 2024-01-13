import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Router from "./routes/Router";

function App() {
  /* Single cartItem Example */
  // 0: { name: "test", price: null, quantity: null, img: null },

  const [cartItems, setCartItems] = useState({});

  /* Will add item to cartItems if It doesn't exist
  Since object key is product Id, if Item already exists,it will be replaced
  probably with a new product quantity, see ProductCard component*/
  const addItemToCart = (item, quantity) => {
    if (item) {
      setCartItems((lastCartItems) => ({
        ...lastCartItems,
        [item.id]: {
          name: item.title,
          price: item.price,
          quantity: quantity,
          img: item.images[0],
        },
      }));
    }
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
