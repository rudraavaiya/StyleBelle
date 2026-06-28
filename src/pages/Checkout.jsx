import { useCart } from "../context/CartContext";

function Checkout() {
  const { cart, totalPrice } = useCart();

  return (
    <div className="px-6 py-14">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        <form className="bg-white shadow-xl rounded-xl p-6">
          <h1 className="text-3xl font-bold mb-6">Checkout</h1>

          <input
            className="border px-4 py-3 rounded-lg w-full mb-4"
            placeholder="Full Name"
          />

          <input
            className="border px-4 py-3 rounded-lg w-full mb-4"
            placeholder="Mobile Number"
          />

          <input
            className="border px-4 py-3 rounded-lg w-full mb-4"
            placeholder="Address"
          />

          <input
            className="border px-4 py-3 rounded-lg w-full mb-4"
            placeholder="City"
          />

          <input
            className="border px-4 py-3 rounded-lg w-full mb-4"
            placeholder="Pincode"
          />

          <button
            type="button"
            className="bg-pink-700 text-white px-6 py-3 rounded-lg w-full"
          >
            Place Order
          </button>
        </form>

        <div className="bg-pink-50 rounded-xl p-6 h-fit">
          <h2 className="text-2xl font-bold mb-4">Order Summary</h2>

          {cart.length === 0 ? (
            <p className="text-gray-600">No items in cart.</p>
          ) : (
            cart.map((item) => (
              <div key={item.id} className="flex justify-between border-b py-3">
                <span>
                  {item.name} × {item.quantity}
                </span>
                <span>₹{item.price * item.quantity}</span>
              </div>
            ))
          )}

          <h3 className="text-xl font-bold mt-6">Total: ₹{totalPrice}</h3>
        </div>
      </div>
    </div>
  );
}

export default Checkout;