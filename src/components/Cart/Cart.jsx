import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import styles from "./Cart.module.css";
import ShoppingCartImage from "/src/assets/images/cart.png";

export default function Cart({ cartItems }) {
  return (
    <NavLink className={styles.notification} to="/shopping-cart">
      <img
        className={styles.cart}
        src={ShoppingCartImage}
        alt="Shopping Cart"
      />
      <span className={styles.badge}>{cartItems.length}</span>
    </NavLink>
  );
}
Cart.propTypes = {
  cartItems: PropTypes.array.isRequired,
};
