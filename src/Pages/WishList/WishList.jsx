import React, { useState } from "react";
import "./WishList.css";
import NavBar from "../../components/NavBar/NavBar";
import NavSm from "../../components/NavSm/NavSm";
import { LuTrash2 } from "react-icons/lu";

const WishList = () => {
  const [stock, setStock] = useState(true);
  return (
    <div>
      <NavBar />
      <NavSm />
      <div className="home-container">
        <div className="bread-crumb ">
          <span>Home</span>
          <div className="slash">/</div>
          <span>Shop</span>
          <div className="slash">/</div>
          My WishList
        </div>
        <div className="cart-header">My Wishlist</div>
        <div className="cart-content">
          There are 5 products in this wishlist.
        </div>
        <div className="wishlist-container">
          <table>
            <thead>
              <tr className="table-header">
                <th>
                  <input type="checkbox" />
                </th>
                <th></th>
                <th>Product</th>
                <th>Amount</th>
                <th>Status</th>
                <th>Remove</th>
              </tr>
            </thead>
            <tbody>
              <tr className="table-content">
                <td>
                  <input type="checkbox" />
                </td>
                <td>
                  <img
                    src="https://freshcart.codescandy.com/assets/images/products/product-img-18.jpg"
                    alt=""
                    className="wishList-img"
                  />
                </td>
                <td>
                  <div className="WishList-Prod-name">Fresh Banana</div>
                  <div className="wishList-Prod-size">1 Kg</div>
                </td>
                <td className="Price">₦5,000</td>
                <td>
                  {stock ? (
                    <div className="inStock">In Stock</div>
                  ) : (
                    <div className="outStock">Out Of Stock</div>
                  )}
                </td>
                <td>
                  <LuTrash2 className="wishList-trash" />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default WishList;
