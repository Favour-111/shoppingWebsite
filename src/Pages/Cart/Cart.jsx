import React from "react";
import NavSm from "../../components/NavSm/NavSm";
import NavBar from "../../components/NavBar/NavBar";
import "./Cart.css";
import { RiDeleteBinLine, RiSubtractFill } from "react-icons/ri";
import { FaRegTrashAlt } from "react-icons/fa";
import { AiOutlinePlus } from "react-icons/ai";
const Cart = () => {
  return (
    <div>
      <NavSm />
      <NavBar />
      <div className="home-container mt-3">
        <div className="bread-crumb mt-3">
          <span>Home</span>
          <div className="slash">/</div>
          <span>Shop</span>
          <div className="slash">/</div>
          Shopping Cart
        </div>
        <div className="cart-header">Shop Cart</div>
        <div className="cart-content">Review your items before checkout</div>
        <div className="cart-container">
          <div className="cart-body">
            <div className="cart-item">
              <div className="d-flex align-items-center gap-2">
                <div>
                  <img
                    src="https://freshcart.codescandy.com/assets/images/products/product-img-1.jpg"
                    alt=""
                    className="cart-image"
                  />
                </div>
                <div>
                  <div className="cart-item-name">name</div>
                  <div className="cart-weight">1 kg</div>
                  <div className="remove-section">
                    <div className="cart-remove-icon ">
                      <FaRegTrashAlt size={14} />
                    </div>
                    <div className="text">Remove</div>
                  </div>
                </div>
              </div>
              <div className="cart-counter">
                <div className="cart-counter-btn">
                  <AiOutlinePlus />
                </div>
                <div className="cart-amount">0</div>
                <div className="cart-counter-btn">
                  <RiSubtractFill />
                </div>
              </div>
              <div>price</div>
            </div>
          </div>
          <div className="cart-summary">ss</div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
