import { useCart } from "../context/CartContext";
import { createOrder } from "../api/api";

export default function Checkout() {
  const { cart, clearCart } = useCart();

  const placeOrder = async () => {
    await createOrder({ items: cart });
    clearCart();
    alert("Order placed successfully");
  };

  return (
    <section className="mx-auto max-w-3xl p-8">
      <h2 className="text-2xl font-semibold">Checkout</h2>
      <button
        onClick={placeOrder}
        className="mt-6 rounded-lg bg-black px-6 py-3 text-white"
      >
        Pay & Place Order
      </button>
    </section>
  );
}