import React, { useState } from "react";
import category from "../categories";
import product from "../Product";
import "./Special.css";
import Item from "../Item/Item";
const Special = () => {
  return (
    <div>
      <div className="NewProduct-container">
        <div className="newproduct">
          <div className="new-prod-top2">
            <div className="header-sub-head">Products</div>
            <div className="New-ProductHead">
              Special Offers of the View All Week!
            </div>
            <div className="New-ProductContent">
              Get exclusive ongoing offers, deals, and discount codes of
              shopping
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

export default Special;
