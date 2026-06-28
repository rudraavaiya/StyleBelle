import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useWishlist } from "../context/WishlistContext";

function ProductCard({ product }) {
  const { addToCart } = useCart();
  const { toggleWishlist, isWishlisted } = useWishlist();

  return (
    <div className="bg-white shadow-md rounded-xl overflow-hidden hover:shadow-xl transition relative">
      <button
        onClick={() => toggleWishlist(product)}
        className="absolute top-3 right-3 bg-white shadow px-3 py-2 rounded-full text-lg"
      >
        {isWishlisted(product.id) ? "❤️" : "🤍"}
      </button>

      <img src={product.image} alt={product.name} className="h-56 w-full object-cover" />

      <div className="p-4">
        <p className="text-sm text-pink-700">{product.category}</p>
        <h3 className="text-lg font-bold mt-1">{product.name}</h3>
        <p className="text-yellow-500 mt-1">★★★★★</p>
        <p className="text-gray-700 mt-2">₹{product.price}</p>

        <div className="flex gap-3 mt-4">
          <Link
            to={`/product/${product.id}`}
            className="bg-gray-900 text-white px-4 py-2 rounded-lg text-sm"
          >
            View
          </Link>

          <button
            onClick={() => addToCart(product)}
            className="bg-pink-700 text-white px-4 py-2 rounded-lg text-sm"
          >
            Add Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;