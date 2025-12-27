import { Link } from "react-router-dom";

export default function Home() {
  return (
    <section className="mx-auto max-w-7xl p-8">
      <h1 className="text-4xl font-semibold">End‑to‑End Event Planning & Rentals</h1>
      <p className="mt-4 max-w-2xl text-gray-600">
        From weddings to corporate events – plan, rent and manage everything in one place.
      </p>
      <div className="mt-6 flex gap-4">
        <Link className="rounded-lg bg-black px-6 py-3 text-white" to="/rentals">
          Explore Rentals
        </Link>
        <Link className="rounded-lg border px-6 py-3" to="/services">
          Our Services
        </Link>
      </div>
    </section>
  );
}
