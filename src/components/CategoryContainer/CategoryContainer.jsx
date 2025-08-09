import React from "react";
import "./CategoryContainer.css";
import category from "../categories";

const CategoryContainer = () => {
  return (
    <div className="CategoryContainer">
      <div className="CategoryContainer-head">Shop Popular Product</div>
      <div className="Category-body-container">
        <div className="row">
          {category.map((item) => {
            return (
              <div className="col-xl-2 col-md-4 m-auto category">
                <div className="category-item ">
                  <div>
                    <img src={item.image} alt="" />
                  </div>
                </div>
                <div className="category-list-name">{item.name}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CategoryContainer;
