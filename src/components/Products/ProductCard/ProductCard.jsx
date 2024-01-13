import PropTypes from "prop-types";
import { useState } from "react";
import styles from "./ProductCard.module.css";
import useProductInfo from "/src/hooks/useProductInfo";

export default function ProductCard({ productId }) {
  const { data, error, loading } = useProductInfo(productId);

  // State for managing the quantity input value
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (event) => {
    setQuantity(Number(event.target.value));
  };

  if (error) return <p>An error occurred: {error}</p>;
  if (loading) return <p>Loading...</p>;

  return (
    <figure className={styles.wrapper}>
      <img src={data.images[0]} />
      <figcaption>
        <p>{data.title}</p>
        <p>{data.price}$</p>
      </figcaption>
      <section>
        <form action="">
          <button>Add to Cart</button>
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
        </form>
      </section>
    </figure>
  );
}

ProductCard.propTypes = {
  productId: PropTypes.number.isRequired,
};
