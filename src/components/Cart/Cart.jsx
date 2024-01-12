import styles from "./Cart.module.css";
import ShoppingCartImage from "/public/cart.png";

export default function Cart() {
  return (
    // Inserting the cart Png in Nav here by directly importing it
    <img className={styles.cart} src={ShoppingCartImage} alt="Shopping Cart" />
  );
}
