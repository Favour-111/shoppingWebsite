import React from "react";
import NavSm from "../../components/NavSm/NavSm";
import NavBar from "../../components/NavBar/NavBar";
import "./Cart.css";
import { RiDeleteBinLine, RiSubtractFill } from "react-icons/ri";
import { FaRegTrashAlt } from "react-icons/fa";
import { AiOutlinePlus } from "react-icons/ai";
import Footer from "../../components/Footer/Footer";
const Cart = () => {
  return (
    <div>
      <NavBar />
      <NavSm />
      <div className="home-container ">
        <div className="bread-crumb ">
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
              <div className="Cart-price">₦5,000</div>
            </div>
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
              <div className="Cart-price">₦5,000</div>
            </div>
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
              <div className="Cart-price">₦5,000</div>
            </div>
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
              <div className="Cart-price">₦5,000</div>
            </div>
          </div>
          <div className="cart-summary">
            <div className="cart-head">Summary</div>
            <div className="shipping-head">Estimated shipping</div>
            <div className="shipping-content">
              Enter your destination to get a shipping estimate
            </div>
            <div className="price">
              <div>sub-total</div>
              <div className="cart-sub-price">3,000</div>
            </div>
            <div className="price">
              <div>Coupon</div>
              <div className="cart-sub-price">0</div>
            </div>
            <div className="price">
              <div>coupon-discount</div>
              <div className="cart-sub-price">0%</div>
            </div>
            <div className="price">
              <input type="text" className="coupon-input" />
              <button className="coupon-button">Apply</button>
            </div>
            <div className="line"></div>
            <div className="price">
              <div>Total</div>
              <div className="cart-sub-price">3,000</div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Cart;
