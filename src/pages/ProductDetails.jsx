import { Link, useParams } from "react-router-dom";
import { products } from "../data/products";
import { useCart } from "../context/CartContext";
import { useWishlist } from "../context/WishlistContext";
import ProductCard from "../components/ProductCard";

function ProductDetails() {
  const { id } = useParams();
  const { addToCart } = useCart();
  const { toggleWishlist, isWishlisted } = useWishlist();

  const product = products.find((item) => item.id === Number(id));
  const relatedProducts = products.filter((item) => item.id !== Number(id)).slice(0, 3);

  if (!product) {
    return (
      <div className="px-6 py-10">
        <h1 className="text-2xl font-bold">Product not found</h1>
        <Link to="/products" className="text-pink-700 mt-4 inline-block">
          Back to Products
        </Link>
      </div>
    );
  }

  return (
    <div className="px-6 py-10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="bg-pink-50 rounded-2xl p-6">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-[420px] object-cover rounded-xl shadow"
          />
        </div>

        <div>
          <p className="text-pink-700 font-medium">{product.category}</p>
          <h1 className="text-4xl font-bold mt-2">{product.name}</h1>

          <div className="flex items-center gap-3 mt-3">
            <p className="text-yellow-500">★★★★★</p>
            <p className="text-gray-500 text-sm">(124 customer reviews)</p>
          </div>

          <p className="text-3xl font-bold mt-5">₹{product.price}</p>
          <p className="text-green-700 font-medium mt-2">In Stock</p>

          <p className="text-gray-600 mt-5 leading-7">{product.description}</p>

          <h3 className="font-bold mt-6">Key Benefits</h3>
          <ul className="list-disc ml-5 mt-2 text-gray-600">
            {product.benefits.map((benefit, index) => (
              <li key={index}>{benefit}</li>
            ))}
          </ul>

          <div className="bg-gray-50 p-4 rounded-xl mt-6 space-y-2 text-sm text-gray-700">
            <p>🚚 Delivery within 3–5 business days</p>
            <p>🔁 Easy 7-day return policy</p>
            <p>💳 Secure checkout available</p>
          </div>

          <div className="flex flex-col md:flex-row gap-4 mt-6">
            <button
              onClick={() => addToCart(product)}
              className="bg-pink-700 text-white px-6 py-3 rounded-lg"
            >
              Add to Cart
            </button>

            <button
              onClick={() => toggleWishlist(product)}
              className="border border-pink-700 text-pink-700 px-6 py-3 rounded-lg"
            >
              {isWishlisted(product.id) ? "Remove from Wishlist" : "Add to Wishlist"}
            </button>
          </div>
        </div>
      </div>

      <section className="max-w-6xl mx-auto mt-14">
        <h2 className="text-2xl font-bold mb-6">Related Products</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {relatedProducts.map((item) => (
            <ProductCard key={item.id} product={item} />
          ))}
        </div>
      </section>
    </div>
  );
}

export default ProductDetails;