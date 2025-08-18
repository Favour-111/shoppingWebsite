import react, { createContext, useState } from "react";
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
  console.log(cartItems);
  const addToCart = (ItemId) => {
    setCartItems((prev) => ({ ...prev, [ItemId]: prev[ItemId] + 1 }));
  };
  const RemoveCart = (ItemId) => {
    setCartItems((prev) => ({ ...prev, [ItemId]: prev[ItemId] - 1 }));
  };
  const removeFromCart = (ItemId) => {
    setCartItems((prev) => ({ ...prev, [ItemId]: 0 }));
  };
  const addToList = (ItemId) => {
    setWishListItems((prev) => ({ ...prev, [ItemId]: prev[ItemId] + 1 }));
  };

  const removeList = (ItemId) => {
    setWishListItems((prev) => ({ ...prev, [ItemId]: 0 }));
  };

  const getTotalCart = () => {
    let totalCartItem = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        totalCartItem += cartItems[item];
      }
    }
    return totalCartItem;
  };
  const getTotalList = () => {
    let totalListItem = 0;
    for (const item in WishList) {
      if (WishList[item] > 0) {
        totalListItem += WishList[item];
      }
    }
    return totalListItem;
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
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};
export default ShopContextProvider;
