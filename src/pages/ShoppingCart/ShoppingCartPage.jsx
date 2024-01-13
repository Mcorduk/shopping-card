import PropTypes from "prop-types";
import styles from "./ShoppingCartPage.module.css";

export default function ShoppingCart({ cartItems }) {
  return (
    <main>
      <header>
        <h2>Your Cart</h2>
      </header>
      <section>
        <p>There are currently no items in your cart.</p>
      </section>
    </main>
  );
}

ShoppingCart.propTypes = {
  cartItems: PropTypes.array.isRequired,
};
