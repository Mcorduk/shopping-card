import Header from "../components/Header/Header";

export default function ShoppingCart() {
  return (
    <>
      <Header />
      <main>
        <header>
          <h2>Your Cart</h2>
        </header>
        <section>
          <p>There are currently no items in your cart.</p>
        </section>
      </main>
    </>
  );
}
