import ProductCard from "../../components/Products/ProductCard/ProductCard";
import styles from "./ProductPage.module.css";
import getProducts from "./productIdData";

export default function ProductPage(props) {
  // Use getter to access productID's for the specific room
  const PRODUCT_ID_ARRAY = getProducts(props.room);

  // Map every product using the productId
  // productId is the parameter that will be used to request product from API
  return (
    <main className={styles.wrapper}>
      {PRODUCT_ID_ARRAY.map((productId, index) => (
        <ProductCard key={index} productId={productId} {...props} />
      ))}
    </main>
  );
}
