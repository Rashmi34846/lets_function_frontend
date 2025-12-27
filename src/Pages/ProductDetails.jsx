import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getProductById } from "../api/api";
import { useCart } from "../context/CartContext";

export default function ProductDetails() {
  const { id } = useParams();
  const { addToCart } = useCart();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    getProductById(id).then((res) => setProduct(res.data));
  }, [id]);

  if (!product) return null;

  return (
    <section className="mx-auto max-w-5xl p-8 grid grid-cols-1 md:grid-cols-2 gap-8">
      <img src={product.image} className="rounded-xl" />
      <div>
        <h2 className="text-3xl font-semibold">{product.name}</h2>
        <p className="mt-4 text-gray-600">{product.description}</p>
        <p className="mt-4 text-xl">₹{product.price}</p>
        <button
          onClick={() => addToCart(product, 1)}
          className="mt-6 rounded-lg bg-black px-6 py-3 text-white"
        >
          Add to Cart
        </button>
      </div>
    </section>
  );
}