import PropTypes from "prop-types";
import ProductCard from "../../components/Products/ProductCard/ProductCard";
import styles from "./ShoppingCartPage.module.css";

export default function ShoppingCart(props) {
  const cartItemArray = Object.values(props.cartItems);

  return (
    <main>
      <header>
        <h2>Your Cart</h2>
        <hr />
      </header>

      <section>
        {cartItemArray.map((cartItem) => (
          <ProductCard
            key={cartItem.id}
            productId={cartItem.id}
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
