import React, { useContext } from "react";
import "./Item.css";
import { MdAdd } from "react-icons/md";
import {
  FaMinus,
  FaPlus,
  FaRegStar,
  FaStar,
  FaStarHalfAlt,
} from "react-icons/fa";
import { useNavigate } from "react-router";
import { GiShoppingCart } from "react-icons/gi";
import { IoIosHeart, IoIosHeartEmpty } from "react-icons/io";
import { IoAdd, IoEyeOutline } from "react-icons/io5";
import { ShopContext } from "../Context/ShopContext";
import toast, { Toaster } from "react-hot-toast";
import { FiMinus, FiShoppingBag } from "react-icons/fi";
import { BsCartCheck } from "react-icons/bs";
const Item = ({ product, category }) => {
  const { addToCart, cartItems, RemoveCart, addToList, WishList, removeList } =
    useContext(ShopContext);
  const navigate = useNavigate();
  const renderStars = () => {
    const stars = [];
    const fullStars = Math.floor(product.rating);
    const halfStar = product.rating % 1 >= 0.5;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

    for (let i = 0; i < fullStars; i++) {
      stars.push(<FaStar key={`full-${i}`} className="star filled" />);
    }
    if (halfStar) {
      stars.push(<FaStarHalfAlt key="half" className="star half" />);
    }
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<FaRegStar key={`empty-${i}`} className="star empty" />);
    }
    return stars;
  };
  return (
    <div className="item-body">
      <div className="item-border">
        <div className="item-image">
          <img src={product.image} alt="" />
        </div>
        <div className="item-content">
          <div className="item-category">
            {category === undefined ? product.category : category}
          </div>
          <div className="item-Name">{product.name}</div>
          <div className="rating">
            <div>{renderStars()}</div>
            <div className="mt-1">({product.rating})</div>
          </div>
          <div className="item-bottom">
            <div className="price">
              <div className="New-price">₦{product.newPrice}</div>
            </div>
            {cartItems[product.id] > 0 ? (
              <div className="item-counter">
                <button onClick={() => RemoveCart(product.id)}>
                  <FiMinus />
                </button>
                <div className="item-count">{cartItems[product.id]}</div>
                <button onClick={() => addToCart(product.id)}>
                  <IoAdd />
                </button>
              </div>
            ) : (
              <button
                onClick={() => {
                  addToCart(product.id);
                  toast.success(`${product.name} has been added to cart`);
                }}
                className="cart-btn"
              >
                Add to cart
              </button>
            )}

            <div className="button-relative-container">
              <div
                className="button-1 shadow-sm"
                onClick={() => {
                  addToCart(product.id);
                  toast.success(`${product.name} added to cart`);
                }}
              >
                {cartItems[product.id] > 0 ? (
                  <BsCartCheck />
                ) : (
                  <GiShoppingCart />
                )}
              </div>
              {WishList[product.id] > 0 ? (
                <div
                  className="button-2 shadow-sm"
                  onClick={() => {
                    removeList(product.id);

                    toast.success(`${product.name} removed from wishList`);
                  }}
                >
                  <IoIosHeart />
                </div>
              ) : (
                <div
                  className="button-1 shadow-sm"
                  onClick={() => {
                    addToList(product.id);
                    toast.success(`${product.name} added to wishList`);
                  }}
                >
                  <IoIosHeartEmpty />
                </div>
              )}

              <div className="button-1 shadow-sm">
                <IoEyeOutline />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Item;
