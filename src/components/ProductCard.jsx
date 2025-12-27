import { Link } from "react-router-dom";

export default function ProductCard({ product }) {
  return (
    <Link
      to={`/product/${product.id}`}
      className="rounded-xl border p-4 transition hover:shadow"
    >
      <img
        src={product.image}
        alt={product.name}
        className="h-40 w-full rounded-md object-cover"
      />
      <h3 className="mt-3 font-medium">{product.name}</h3>
      <p className="text-sm text-gray-500">₹{product.price}</p>
    </Link>
  );
}