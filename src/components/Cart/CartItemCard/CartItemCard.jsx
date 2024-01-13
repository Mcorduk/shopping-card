import PropTypes from "prop-types";
import styles from "./CartItemCard.module.css";

export default function CartItemCard({ cartItem }) {
  return (
    <figure className={styles.wrapper}>
      <img src={cartItem.img} />
      <figcaption>
        <p>{cartItem.name}</p>
        <p>Price: {cartItem.price}$</p>

        <p>Quantity: {cartItem.quantity}</p>
        <p>Total: {cartItem.price * cartItem.quantity}$</p>
      </figcaption>
    </figure>
  );
}

CartItemCard.propTypes = {
  cartItem: PropTypes.object.isRequired,
  addItemToCart: PropTypes.func.isRequired,
};
