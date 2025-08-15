import React from "react";
import "./CategoryContainer.css";
import category from "../categories";
import Slider from "react-slick";
const CategoryContainer = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 2,
    autoplay: true, // ✅ Enable auto-scrolling
    autoplaySpeed: 3000, // ✅ Time between transitions (3 seconds)
    pauseOnHover: false, // ❌ Try disabling hover pause to check if it works
    pauseOnFocus: false, //
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 770,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          initialSlide: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
    ],
  };
  return (
    <div className="CategoryContainer">
      <div className="CategoryContainer-head">Shop Popular Categories</div>
      <div className="Category-body-container">
        {category.map((item) => {
          return (
            <div className="category">
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
  );
};

export default CategoryContainer;
