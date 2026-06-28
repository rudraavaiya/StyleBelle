import { createContext, useContext, useEffect, useState } from "react";

const WishlistContext = createContext();

export function WishlistProvider({ children }) {
  const [wishlist, setWishlist] = useState(() => {
    return JSON.parse(localStorage.getItem("stylebelle-wishlist")) || [];
  });

  useEffect(() => {
    localStorage.setItem("stylebelle-wishlist", JSON.stringify(wishlist));
  }, [wishlist]);

  function toggleWishlist(product) {
    const exists = wishlist.find((item) => item.id === product.id);

    if (exists) {
      setWishlist(wishlist.filter((item) => item.id !== product.id));
    } else {
      setWishlist([...wishlist, product]);
    }
  }

  function isWishlisted(id) {
    return wishlist.some((item) => item.id === id);
  }

  return (
    <WishlistContext.Provider value={{ wishlist, toggleWishlist, isWishlisted }}>
      {children}
    </WishlistContext.Provider>
  );
}

export function useWishlist() {
  return useContext(WishlistContext);
}