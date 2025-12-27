import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AppRoutes from "./routes";
import { CartProvider } from "./context/CartContext";

export default function App() {
  return (
    <CartProvider>
      <div className="flex min-h-screen flex-col">
        <Navbar />
        <main className="flex-1">
          <AppRoutes />
        </main>
        <Footer />
      </div>
    </CartProvider>
  );
}