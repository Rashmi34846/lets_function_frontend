import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";

export default function Cart() {
  const { cart, removeFromCart } = useCart();

  return (
    <section className="mx-auto max-w-4xl p-8">
      <h2 className="text-2xl font-semibold">Your Cart</h2>
      {cart.map((item) => (
        <div key={item.id} className="flex justify-between border-b py-4">
          <div>{item.name} × {item.qty}</div>
          <button onClick={() => removeFromCart(item.id)}>Remove</button>
        </div>
      ))}
      <Link
        to="/checkout"
        className="mt-6 inline-block rounded-lg bg-black px-6 py-3 text-white"
      >
        Proceed to Checkout
      </Link>
    </section>
  );
}