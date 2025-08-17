import React, { useContext } from "react";
import NavSm from "../../components/NavSm/NavSm";
import NavBar from "../../components/NavBar/NavBar";
import "./Cart.css";
import { RiDeleteBinLine, RiSubtractFill } from "react-icons/ri";
import { FaRegTrashAlt } from "react-icons/fa";
import { AiOutlinePlus } from "react-icons/ai";
import Footer from "../../components/Footer/Footer";
import { ShopContext } from "../../components/Context/ShopContext";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router";
const Cart = () => {
  const Navigate = useNavigate();
  const { product, cartItems, RemoveCart, addToCart, removeFromCart } =
    useContext(ShopContext);
  return (
    <div>
      <NavBar />
      <NavSm />
      <div className="home-container mb-5">
        <div className="bread-crumb ">
          <span>Home</span>
          <div className="slash">/</div>
          <span>Shop</span>
          <div className="slash">/</div>
          Shopping Cart
        </div>
        <div className="cart-header">Shop Cart</div>
        <div className="cart-content">Review your items before checkout</div>
        {cartItems.length > 0 ? (
          <div className="cart-container">
            <div className="cart-body">
              {product.map((item) => {
                if (cartItems[item.id] > 0) {
                  return (
                    <div className="cart-item">
                      <div className="d-flex align-items-center gap-2">
                        <div>
                          <img src={item.image} alt="" className="cart-image" />
                        </div>
                        <div>
                          <div className="cart-item-name">{item.name}</div>
                          <div className="cart-weight">
                            {cartItems[item.id]} kg
                          </div>
                          <div
                            className="remove-section"
                            onClick={() => {
                              removeFromCart(item.id);
                              toast.success(
                                `${item.name} has been removed from cart`
                              );
                            }}
                          >
                            <div className="cart-remove-icon ">
                              <FaRegTrashAlt size={14} />
                            </div>
                            <div className="text">Remove</div>
                          </div>
                        </div>
                      </div>
                      <div className="cart-counter">
                        <div
                          className="cart-counter-btn"
                          onClick={() => addToCart(item.id)}
                        >
                          <AiOutlinePlus />
                        </div>
                        <div className="cart-amount">{cartItems[item.id]}</div>
                        <div
                          className="cart-counter-btn"
                          onClick={() => RemoveCart(item.id)}
                        >
                          <RiSubtractFill />
                        </div>
                      </div>
                      <div className="Cart-price">
                        ₦{item.newPrice * cartItems[item.id]}
                      </div>
                    </div>
                  );
                }
              })}
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
        ) : (
          <div className="empty-cart">
            <img
              src="https://threedio-prod-var-cdn.icons8.com/wf/preview_sets/previews/fnC2rp3ReDj4Y9HM.webp"
              alt=""
            />
            <div className="cart-empty-head">Your cart is currently empty</div>
            <div className="cart-empty-content">
              Before proceeding to checkout you must add some product to your
              shopping cart you will find alot of product on our "shop page"
            </div>
            <button onClick={() => Navigate("/shop-list")}>
              Start Shopping
            </button>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Cart;
