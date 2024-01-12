import { NavLink } from "react-router-dom";
import styles from "./Cart.module.css";
import ShoppingCartImage from "/public/cart.png";

export default function Cart() {
  return (
    <NavLink to="/shopping-cart">
      <img
        className={styles.cart}
        src={ShoppingCartImage}
        alt="Shopping Cart"
      />
    </NavLink>
  );
}
