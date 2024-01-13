import ProductCard from "../../components/Products/ProductCard/ProductCard";
import styles from "./ProductPage.module.css";
import getProducts from "./productIdData";

export default function ProductPage({ cartItems, setCartItems, room }) {
  // Use getter to get the productID's for the specific room
  const PRODUCT_ID_ARRAY = getProducts(room);

  // Map every product using the productId
  // productId is the parameter that will be used to request product from API
  return (
    <main>
      {PRODUCT_ID_ARRAY.map((productId, index) => (
        <ProductCard key={index} productId={productId} />
      ))}
    </main>
  );
}
