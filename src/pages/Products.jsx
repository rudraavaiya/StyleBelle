import { useState } from "react";
import { products } from "../data/products";
import ProductCard from "../components/ProductCard";

function Products() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [sort, setSort] = useState("default");

  let filteredProducts = products.filter((item) => {
    const matchSearch = item.name.toLowerCase().includes(search.toLowerCase());
    const matchCategory = category === "All" || item.category === category;

    return matchSearch && matchCategory;
  });

  if (sort === "lowToHigh") {
    filteredProducts = [...filteredProducts].sort((a, b) => a.price - b.price);
  }

  if (sort === "highToLow") {
    filteredProducts = [...filteredProducts].sort((a, b) => b.price - a.price);
  }

  return (
    <div className="px-6 py-10">
      <h1 className="text-3xl font-bold mb-2">All Products</h1>
      <p className="text-gray-600 mb-8">
        Browse skincare products with search, category filter, and sorting.
      </p>

      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <input
          type="text"
          placeholder="Search product..."
          className="border px-4 py-3 rounded-lg w-full md:w-1/2"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          className="border px-4 py-3 rounded-lg w-full md:w-60"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option>All</option>
          <option>Sunscreen</option>
          <option>Face Wash</option>
          <option>Serum</option>
          <option>Moisturizer</option>
          <option>Gel</option>
          <option>Cream</option>
        </select>

        <select
          className="border px-4 py-3 rounded-lg w-full md:w-60"
          value={sort}
          onChange={(e) => setSort(e.target.value)}
        >
          <option value="default">Sort by Price</option>
          <option value="lowToHigh">Low to High</option>
          <option value="highToLow">High to Low</option>
        </select>
      </div>

      {filteredProducts.length === 0 ? (
        <p className="text-gray-600">No products found.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {filteredProducts.map((item) => (
            <ProductCard key={item.id} product={item} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Products;