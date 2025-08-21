import React, { useState } from "react";
import "./RecentlyViewed.css";
import category from "../categories";
import product from "../Product";
import Item from "../Item/Item";
const RecentlyViewed = () => {
  const [activeButton, setActiveButton] = useState("Dry Goods");
  return (
    <div>
      <div className="NewProduct-container">
        <div className="newproduct">
          <div className="new-prod-top">
            <div className="New-ProductHead">Recently Viewed</div>
            <div className="New-ProductContent">
              Take another look at the items you recently viewed
            </div>
          </div>
        </div>
        <div className="new-product-container">
          <div className="mt-3 NewProducts">
            {product.slice(0, 5).map((item) => {
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

export default RecentlyViewed;
