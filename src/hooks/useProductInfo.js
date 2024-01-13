import { useEffect, useState } from "react";

const useProductInfo = (productId) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // API Used: https://fakeapi.platzi.com/en/about/introduction/

    async function getData(productId) {
      const URL = `https://api.escuelajs.co/api/v1/products/${productId}`;

      try {
        const response = await fetch(URL, { mode: "cors" });

        if (!response.ok) {
          throw new Error(
            `This is an HTTP error: The status is ${response.status}`,
          );
        }
        let result = await response.json();
        setData(result);
      } catch (err) {
        setError(err.message);
        setData(null);
      } finally {
        setLoading(false);
      }
    }

    if (productId) {
      getData(productId);
    }
  }, [productId]);

  return { data, error, loading }; // Fix the variable name to match the state
};

export default useProductInfo;
