import { NavLink } from "react-router-dom";
import styles from "./Cart.module.css";
import ShoppingCartImage from "/public/cart.png";

export default function Cart({ cartItems, setCartItems }) {
  return (
    <NavLink
      className={(navData) =>
        navData.isActive ? "active-link" : "non-active-link"
      }
      to="/shopping-cart"
    >
      <img
        className={styles.cart}
        src={ShoppingCartImage}
        alt="Shopping Cart"
      />
    </NavLink>
  );
}
