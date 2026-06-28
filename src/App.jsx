import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Checkout from "./pages/Checkout";
import NotFound from "./pages/NotFound";
import Wishlist from "./pages/Wishlist";

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/wishlist" element={<Wishlist />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;