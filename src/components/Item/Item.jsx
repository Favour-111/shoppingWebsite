import React from "react";
import "./Item.css";
import { MdAdd } from "react-icons/md";
import { FaRegStar, FaStar, FaStarHalfAlt } from "react-icons/fa";
import { useNavigate } from "react-router";
import { GiShoppingCart } from "react-icons/gi";
import { IoIosHeartEmpty } from "react-icons/io";
import { IoEyeOutline } from "react-icons/io5";
const Item = ({ product }) => {
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
      <div className="item-image">
        <img src={product.image} alt="" />
      </div>
      <div className="item-content">
        <div className="item-category">{product.category}</div>
        <div className="item-Name">{product.name}</div>
        <div className="rating">
          <div>{renderStars()}</div>
          <div className="mt-1">({product.rating})</div>
        </div>
        <div className="item-bottom">
          <div className="price">
            <div className="New-price">₦{product.newPrice}</div>
          </div>
          <button className="cart-btn">
            <div class="svg-wrapper-1">
              <div class="svg-wrapper">
                <MdAdd className="svg" />
              </div>
            </div>
            <span>Add</span>
          </button>
          <div className="button-relative-container">
            <div className="button-1 shadow-sm">
              <GiShoppingCart />
            </div>
            <div className="button-1 shadow-sm">
              <IoIosHeartEmpty />
            </div>
            <div className="button-1 shadow-sm">
              <IoEyeOutline />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Item;
