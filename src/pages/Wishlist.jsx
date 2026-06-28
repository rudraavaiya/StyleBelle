import ProductCard from "../components/ProductCard";
import { useWishlist } from "../context/WishlistContext";

function Wishlist() {
  const { wishlist } = useWishlist();

  return (
    <div className="px-6 py-10">
      <h1 className="text-3xl font-bold mb-2">My Wishlist</h1>
      <p className="text-gray-600 mb-8">Your saved StyleBelle products.</p>

      {wishlist.length === 0 ? (
        <p className="text-gray-600">No products added to wishlist yet.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {wishlist.map((item) => (
            <ProductCard key={item.id} product={item} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Wishlist;