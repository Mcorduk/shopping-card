import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import CartItemCard from "../../components/Cart/CartItemCard/CartItemCard";
import styles from "./ShoppingCartPage.module.css";

export default function ShoppingCart(props) {
  const cartItemArray = Object.values(props.cartItems);
  return (
    <main>
      <header>
        <h2>Your Cart</h2>
        <hr />
      </header>

      {cartItemArray.length > 0 ? (
        <section className={styles.wrapper}>
          {cartItemArray.map((cartItem) => (
            <CartItemCard
              key={cartItem.id}
              cartItem={cartItem}
              addItemToCart={props.addItemToCart}
            />
          ))}
        </section>
      ) : (
        <p style={{ fontSize: "1.6rem" }}>
          Your cart is empty. <Link to="/living-room">Keep Shopping Oni!</Link>
        </p>
      )}
    </main>
  );
}

ShoppingCart.propTypes = {
  cartItems: PropTypes.object.isRequired,
  addItemToCart: PropTypes.func.isRequired,
};
