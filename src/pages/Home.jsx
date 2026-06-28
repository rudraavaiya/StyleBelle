import { Link } from "react-router-dom";
import { products } from "../data/products";
import ProductCard from "../components/ProductCard";

function Home() {
  return (
    <div>
      <section className="bg-gradient-to-r from-pink-50 to-white px-6 py-20">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <p className="text-pink-700 font-semibold mb-3">
              Premium Skincare Brand
            </p>

            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Glow Naturally With StyleBelle Skincare
            </h1>

            <p className="mt-5 text-gray-600">
              Discover premium skincare essentials designed for a fresh, smooth, and confident glow every day.
            </p>

            <div className="flex gap-4 mt-7">
              <Link
                to="/products"
                className="bg-pink-700 text-white px-6 py-3 rounded-lg"
              >
                Shop Products
              </Link>

              <Link
                to="/admin"
                className="border border-pink-700 text-pink-700 px-6 py-3 rounded-lg"
              >
                View Admin
              </Link>
            </div>
          </div>

          <div className="bg-white shadow-xl rounded-2xl p-6">
            <img
              src="https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=600"
              alt="Skincare"
              className="rounded-xl w-full h-[350px] object-cover"
            />
          </div>
        </div>
      </section>

      <section className="px-6 py-14">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold mb-2">Featured Products</h2>
          <p className="text-gray-600 mb-6">
            Explore selected skincare products from StyleBelle.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {products.map((item) => (
              <ProductCard key={item.id} product={item} />
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-14 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold mb-8">Why Choose StyleBelle?</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl shadow">
              <h3 className="font-bold text-lg">Clean UI</h3>
              <p className="text-gray-600 mt-2">
                Designed with a simple and premium layout for better user
                experience.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow">
              <h3 className="font-bold text-lg">Responsive Design</h3>
              <p className="text-gray-600 mt-2">
                Works smoothly on mobile, tablet, and desktop screen sizes.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow">
              <h3 className="font-bold text-lg">Frontend Features</h3>
              <p className="text-gray-600 mt-2">
                Includes product listing, search, filtering, routing, and cart
                functionality.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-14">
        <div className="max-w-6xl mx-auto bg-pink-700 text-white rounded-2xl p-10 text-center">
          <h2 className="text-3xl font-bold">Glow With Confidence</h2>
          <p className="mt-4 max-w-3xl mx-auto">
            Explore skincare products made for daily care, elegant routines, and a premium self-care experience.
          </p>
        </div>
      </section>
    </div>
  );
}

export default Home;