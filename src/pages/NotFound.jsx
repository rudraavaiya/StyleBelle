import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="px-6 py-20 text-center min-h-[70vh]">
      <h1 className="text-6xl font-bold text-pink-700">404</h1>
      <h2 className="text-3xl font-bold mt-4">Page Not Found</h2>
      <p className="text-gray-600 mt-3">
        The page you are looking for does not exist.
      </p>

      <Link
        to="/"
        className="inline-block mt-6 bg-pink-700 text-white px-6 py-3 rounded-lg"
      >
        Back to Home
      </Link>
    </div>
  );
}

export default NotFound;