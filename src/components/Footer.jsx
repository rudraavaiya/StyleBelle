function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-10">
      <div className="max-w-6xl mx-auto px-6 py-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div>
          <h2 className="text-2xl font-bold text-pink-400">StyleBelle</h2>
          <p className="text-sm mt-2 text-gray-300">
            Premium skincare essentials for a glowing daily routine.
          </p>
        </div>

        <div>
          <h3 className="font-bold mb-2">Shop</h3>
          <p className="text-sm text-gray-300">
            Sunscreen, Face Wash, Serum, Moisturizer, Gel, and Cream.
          </p>
        </div>

        <div>
          <h3 className="font-bold mb-2">Support</h3>
          <p className="text-sm text-gray-300">
            Contact us for product queries, order support, and customer care.
          </p>
        </div>
      </div>

      <div className="text-center text-xs text-gray-400 border-t border-gray-700 py-4">
        © 2026 StyleBelle. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;