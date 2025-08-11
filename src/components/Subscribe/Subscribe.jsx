import React from "react";
import "./Subscribe.css";
const Subscribe = () => {
  return (
    <div>
      <div className="subscribe-body">
        <div className="subscribe-overlay">
          <div className="overlay-left">
            <div className="over-lay-sub-head">
              discount for your first order
            </div>
            <div className="overlay-head">
              Get top deals, latest trends, and more.
            </div>
            <div className="overlay-content">
              Join our email subscription now to get updates on promotions and
              coupons.
            </div>
            <div className="overlay-input-container">
              <input type="text" placeholder="Email Address" />
              <button>Sign Up</button>
            </div>
          </div>
          <div className="overlay-right">
            <img
              src="https://static.vecteezy.com/system/resources/previews/055/333/088/non_2x/stylish-man-with-shopping-bag-in-casual-attire-free-png.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
