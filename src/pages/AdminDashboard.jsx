import { products } from "../data/products";

function AdminDashboard() {
  const totalValue = products.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="px-6 py-10 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold mb-2">Admin Dashboard</h1>
      <p className="text-gray-600 mb-8">
        Frontend product management dashboard for StyleBelle store.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-gray-600">Total Products</h2>
          <p className="text-3xl font-bold mt-2 text-pink-700">
            {products.length}
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-gray-600">Categories</h2>
          <p className="text-3xl font-bold mt-2 text-green-700">6</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-gray-600">Inventory Value</h2>
          <p className="text-3xl font-bold mt-2 text-blue-700">₹{totalValue}</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-gray-600">Orders</h2>
          <p className="text-3xl font-bold mt-2 text-orange-600">12</p>
        </div>
      </div>

      <div className="bg-white shadow-md rounded-xl p-6">
        <div className="flex flex-col md:flex-row justify-between md:items-center gap-4 mb-4">
          <div>
            <h2 className="text-xl font-bold">Product Management</h2>
            <p className="text-sm text-gray-500">
              Add, edit, and delete buttons are UI-only for frontend demo.
            </p>
          </div>

          <button className="bg-pink-700 text-white px-4 py-2 rounded-lg">
            + Add Product
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full border text-sm">
            <thead>
              <tr className="bg-gray-100">
                <th className="border p-3 text-left">ID</th>
                <th className="border p-3 text-left">Product</th>
                <th className="border p-3 text-left">Category</th>
                <th className="border p-3 text-left">Price</th>
                <th className="border p-3 text-left">Stock</th>
                <th className="border p-3 text-left">Action</th>
              </tr>
            </thead>

            <tbody>
              {products.map((item) => (
                <tr key={item.id}>
                  <td className="border p-3">{item.id}</td>
                  <td className="border p-3 font-medium">{item.name}</td>
                  <td className="border p-3">{item.category}</td>
                  <td className="border p-3">₹{item.price}</td>
                  <td className="border p-3">Available</td>
                  <td className="border p-3">
                    <button className="bg-yellow-500 text-white px-3 py-1 rounded mr-2">
                      Edit
                    </button>
                    <button className="bg-red-600 text-white px-3 py-1 rounded">
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;