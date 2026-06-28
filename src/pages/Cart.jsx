import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

function Cart() {
  const { cart, increaseQty, decreaseQty, removeFromCart, totalPrice } =
    useCart();

  if (cart.length === 0) {
    return (
      <div className="px-6 py-16 text-center">
        <h1 className="text-3xl font-bold">Your cart is empty</h1>
        <p className="text-gray-600 mt-3">Add products to continue shopping.</p>

        <Link
          to="/products"
          className="inline-block mt-6 bg-pink-700 text-white px-6 py-3 rounded-lg"
        >
          Browse Products
        </Link>
      </div>
    );
  }

  return (
    <div className="px-6 py-10">
      <h1 className="text-3xl font-bold mb-6">Shopping Cart</h1>

      <div className="space-y-5">
        {cart.map((item) => (
          <div
            key={item.id}
            className="flex flex-col md:flex-row justify-between items-center bg-white shadow-md rounded-xl p-4"
          >
            <div className="flex items-center gap-4">
              <img
                src={item.image}
                alt={item.name}
                className="w-24 h-24 object-cover rounded-lg"
              />

              <div>
                <h2 className="font-bold">{item.name}</h2>
                <p className="text-gray-600">₹{item.price}</p>
              </div>
            </div>

            <div className="flex items-center gap-3 mt-4 md:mt-0">
              <button
                onClick={() => decreaseQty(item.id)}
                className="bg-gray-200 px-3 py-1 rounded"
              >
                -
              </button>

              <span className="font-bold">{item.quantity}</span>

              <button
                onClick={() => increaseQty(item.id)}
                className="bg-gray-200 px-3 py-1 rounded"
              >
                +
              </button>

              <button
                onClick={() => removeFromCart(item.id)}
                className="bg-red-600 text-white px-4 py-2 rounded-lg"
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="text-right mt-8">
        <h2 className="text-2xl font-bold">Total: ₹{totalPrice}</h2>

        <Link
          to="/checkout"
          className="inline-block mt-4 bg-pink-700 text-white px-6 py-3 rounded-lg"
        >
          Proceed to Checkout
        </Link>
      </div>
    </div>
  );
}

export default Cart;