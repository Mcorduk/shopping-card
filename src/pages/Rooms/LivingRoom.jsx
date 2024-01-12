import PropTypes from "prop-types";

export default function LivingRoom({ addItemToCart }) {
  return (
    <>
      <main>
        <button onClick={() => addItemToCart(Math.random())}>
          Add Items to Cart!
        </button>
      </main>
    </>
  );
}

LivingRoom.propTypes = {
  addItemToCart: PropTypes.func.isRequired,
};
