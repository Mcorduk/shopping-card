import PropTypes from "prop-types";
import styles from "./ProductCard.module.css";
import useProductInfo from "/src/hooks/useProductInfo";

export default function ProductCard({ productId }) {
  const { data, error, loading } = useProductInfo(productId);

  if (error) return <p>An error occurred: {error}</p>;
  if (loading) return <p>Loading...</p>;

  return (
    <article>
      <img src={data.images[0]} />
      <section>
        <p>{data.title}</p>
      </section>
    </article>
  );
}

ProductCard.propTypes = {
  productId: PropTypes.number.isRequired,
};
