import react, { createContext, useEffect, useState } from "react";
import product from "../Product";

export const ShopContext = createContext(null);

const getDefaultCart = () => {
  let cart = {};
  for (let index = 0; index < product.length; index++) {
    cart[index] = 0;
  }
  return cart;
};

const getDefaultList = () => {
  let list = {};
  for (let index = 0; index < product.length; index++) {
    list[index] = 0;
  }
  return list;
};

const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(getDefaultCart());
  const [WishList, setWishListItems] = useState(getDefaultList());

  const [cartLoader, setCartLoader] = useState(null); // track product id being updated
  const [wishlistLoader, setWishlistLoader] = useState(null); // track wishlist item being updated

  // 🔹 fetch entire cart (no per-item loader needed here)
  const fetchCartData = async () => {
    try {
      const token = localStorage.getItem("auth-token");
      if (!token) return;

      const response = await fetch(`${process.env.REACT_APP_API}/getCart`, {
        method: "POST",
        headers: {
          "auth-token": token,
          "Content-Type": "application/json",
        },
      });

      const cartData = await response.json();
      setCartItems(cartData);
    } catch (error) {
      console.error("Error fetching updated cart:", error);
    }
  };

  // 🔹 fetch wishlist
  const fetchWishlistData = async () => {
    try {
      const token = localStorage.getItem("auth-token");
      if (!token) return;

      const response = await fetch(`${process.env.REACT_APP_API}/getList`, {
        method: "POST",
        headers: {
          "auth-token": token,
          "Content-Type": "application/json",
        },
      });

      const wishlistData = await response.json();
      setWishListItems(wishlistData);
    } catch (error) {
      console.error("Error fetching wishlist:", error);
    }
  };

  useEffect(() => {
    fetchCartData();
    fetchWishlistData();
  }, []);

  // 🔹 add to cart
  const addToCart = async (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));

    if (localStorage.getItem("auth-token")) {
      try {
        setCartLoader(itemId);
        await fetch(`${process.env.REACT_APP_API}/addtocart`, {
          method: "POST",
          headers: {
            Accept: "application/json",
            "auth-token": localStorage.getItem("auth-token"),
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ itemId }),
        });

        await fetchCartData();
      } catch (error) {
        console.error(error.message);
      } finally {
        setCartLoader(null);
      }
    }
  };
  const getTotalValue = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let totalValue = product.find((product) => product.id === Number(item));
        totalAmount += totalValue?.newPrice * cartItems[item];
      }
    }
    return totalAmount;
  };
  // 🔹 remove one quantity from cart
  const RemoveCart = async (itemId) => {
    setCartItems((prev) => ({
      ...prev,
      [itemId]: Math.max(0, prev[itemId] - 1),
    }));

    if (localStorage.getItem("auth-token")) {
      try {
        setCartLoader(itemId);
        await fetch(`${process.env.REACT_APP_API}/removeFromCart`, {
          method: "POST",
          headers: {
            Accept: "application/json",
            "auth-token": localStorage.getItem("auth-token"),
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ itemId }),
        });

        await fetchCartData();
      } catch (error) {
        console.error(error.message);
      } finally {
        setCartLoader(null);
      }
    }
  };

  // 🔹 delete completely from cart
  const removeFromCart = async (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: 0 }));

    if (localStorage.getItem("auth-token")) {
      try {
        setCartLoader(itemId);
        await fetch(`${process.env.REACT_APP_API}/deleteFromCart`, {
          method: "POST",
          headers: {
            Accept: "application/json",
            "auth-token": localStorage.getItem("auth-token"),
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ itemId }),
        });

        await fetchCartData();
      } catch (error) {
        console.error(error.message);
      } finally {
        setCartLoader(null);
      }
    }
  };

  // 🔹 add to wishlist
  const addToList = async (itemId) => {
    setWishListItems((prev) => ({
      ...prev,
      [itemId]: (prev[itemId] || 0) + 1,
    }));

    if (localStorage.getItem("auth-token")) {
      try {
        setWishlistLoader(itemId);
        await fetch(`${process.env.REACT_APP_API}/addtowishlist`, {
          method: "POST",
          headers: {
            Accept: "application/json",
            "auth-token": localStorage.getItem("auth-token"),
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ itemId }),
        });

        await fetchWishlistData();
      } catch (error) {
        console.error("Error adding to wishlist:", error);
      } finally {
        setWishlistLoader(null);
      }
    }
  };

  // 🔹 remove from wishlist
  const removeList = async (itemId) => {
    setWishListItems((prev) => ({ ...prev, [itemId]: 0 }));

    if (localStorage.getItem("auth-token")) {
      try {
        setWishlistLoader(itemId);
        await fetch(`${process.env.REACT_APP_API}/removeFromList`, {
          method: "POST",
          headers: {
            Accept: "application/json",
            "auth-token": localStorage.getItem("auth-token"),
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ itemId }),
        });

        await fetchWishlistData();
      } catch (error) {
        console.error("Error removing from wishlist:", error);
      } finally {
        setWishlistLoader(null);
      }
    }
  };

  // 🔹 count totals
  const getTotalCart = () => {
    return Object.values(cartItems).reduce((a, b) => a + b, 0);
  };

  const getTotalList = () => {
    return Object.values(WishList).reduce((a, b) => a + b, 0);
  };

  const contextValue = {
    getTotalCart,
    product,
    cartItems,
    addToCart,
    RemoveCart,
    removeFromCart,
    getTotalList,
    WishList,
    addToList,
    removeList,
    cartLoader,
    wishlistLoader,
    getTotalValue,
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
