import React, { useState } from "react";
import "./NewProduct.css";
import category from "../categories";
import product from "../Product";
import Item from "../Item/Item";
const NewProduct = () => {
  const [activeButton, setActiveButton] = useState("Dry Goods");
  return (
    <div>
      <div className="NewProduct-container">
        <div className="newproduct">
          <div className="new-prod-top">
            <div className="header-sub-head">Products</div>
            <div className="New-ProductHead">New Product</div>
            <div className="New-ProductContent">
              New products with updated stocks
            </div>
          </div>
          <div className="new-prod-filter-container">
            {category.map((item) => {
              return (
                <div
                  onClick={() => setActiveButton(item.name)}
                  className={`filter-buttons ${
                    activeButton === item.name ? "active" : ""
                  }`}
                >
                  {item.name}
                </div>
              );
            })}
          </div>
        </div>
        <div className="new-product-container">
          <div className="mt-3 NewProducts">
            {product
              .filter((item) => {
                if (item.category === activeButton) {
                  return item;
                }
              })
              .slice(0, 10)
              .map((item) => {
                return <Item product={item} />;
              })}
            {product.filter(
              (item) => activeButton === "All" || item.category === activeButton
            ).length === 0 && (
              <div className="no-products">
                No products found in this category.
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewProduct;
