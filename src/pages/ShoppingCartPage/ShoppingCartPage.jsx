import PropTypes from "prop-types";
import CartItemCard from "../../components/Cart/CartItemCard/CartItemCard";
import styles from "./ShoppingCartPage.module.css";

export default function ShoppingCart(props) {
  const cartItemArray = Object.values(props.cartItems);
  console.log(cartItemArray);
  return (
    <main>
      <header>
        <h2>Your Cart</h2>
        <hr />
      </header>
      <section className={styles.wrapper}>
        {cartItemArray.map((cartItem) => (
          <CartItemCard
            key={cartItem.id}
            cartItem={cartItem}
            addItemToCart={props.addItemToCart}
          />
        ))}
      </section>
    </main>
  );
}

ShoppingCart.propTypes = {
  cartItems: PropTypes.object.isRequired,
  addItemToCart: PropTypes.func.isRequired,
};
