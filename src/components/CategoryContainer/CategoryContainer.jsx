import React from "react";
import "./CategoryContainer.css";
import category from "../categories";
import Slider from "react-slick";
import { useNavigate } from "react-router";
const CategoryContainer = () => {
  const navigate = useNavigate();
  return (
    <div className="CategoryContainer">
      <div className="CategoryContainer-head">Shop Popular Categories</div>
      <div className="Category-body-container">
        {category.map((item) => {
          return (
            <div
              onClick={() => {
                navigate(`category-${item.name}`);
              }}
              className="category"
            >
              <div className="category-item ">
                <div>
                  <img loading="lazy" src={item.image} alt="" />
                </div>
              </div>
              <div className="category-list-name">{item.name}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CategoryContainer;
