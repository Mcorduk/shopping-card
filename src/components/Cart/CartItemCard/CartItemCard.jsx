import PropTypes from "prop-types";
import { useState } from "react";
import styles from "./CartItemCard.module.css";

export default function CartItemCard({ cartItem, addItemToCart }) {
  const [quantity, setQuantity] = useState(cartItem.quantity);

  const handleQuantityChange = (event) => {
    setQuantity(Number(event.target.value));
  };

  return (
    <figure className={styles.wrapper}>
      <img src={cartItem.img} />
      <figcaption>
        <p>{cartItem.title}</p>
        <p>{cartItem.price}$</p>
      </figcaption>
      <section>
        <label htmlFor="product-quantity"></label>
        <input
          id="product-quantity"
          type="number"
          name="product-quantity"
          onChange={handleQuantityChange}
          value={quantity}
          min={1}
          max={10}
        />
      </section>
    </figure>
  );
}

CartItemCard.propTypes = {
  cartItem: PropTypes.object.isRequired,
  addItemToCart: PropTypes.func.isRequired,
};
