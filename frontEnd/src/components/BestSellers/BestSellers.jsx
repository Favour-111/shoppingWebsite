import React, { useState } from "react";
import category from "../categories";
import product from "../Product";
import "./BestSellers.css";
import Item from "../Item/Item";
const BestSellers = () => {
  return (
    <div>
      <div className="NewProduct-container">
        <div className="newproduct">
          <div className="new-prod-top2">
            <div className="New-ProductHead">Bestsellers In Your Area</div>
            <div className="New-ProductContent">
              Find the bestseller products in your area with discount.
            </div>
          </div>
        </div>
        <div className="new-product-container">
          <div className="mt-3 NewProducts">
            {product
              //   .filter((item) => {
              //     if (item.specialOffer === "Special Sale") {
              //       return item;
              //     }
              //   })
              .slice(0, 10)
              .map((item) => {
                return <Item product={item} />;
              })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BestSellers;
