import React from "react";
import "./Category.css";
import NavSm from "../../components/NavSm/NavSm";
import NavBar from "../../components/NavBar/NavBar";
import category from "../../components/categories";
import Footer from "../../components/Footer/Footer";
import { useNavigate } from "react-router";
const Category = () => {
  const navigate = useNavigate();
  return (
    <div>
      <NavSm />
      <NavBar />
      <div className="home-container">
        <div className="second-banner2">
          <div>
            <div className="second-banner-head2">Category</div>
          </div>
          <div>
            <img
              src="https://freshcart.codescandy.com/assets/images/svg-graphics/store-graphics.svg"
              alt=""
            />
          </div>
        </div>
        <div className="category-page-head">
          We have <span>{category.length}</span> Categories now
        </div>
        <div className="category-page-container">
          {category.map((item) => (
            <div className="category-page-item">
              <div className="category-page-img">
                <img src={item.image} alt="" />
              </div>
              <div>
                <div
                  className="category-page-item-head"
                  onClick={() => navigate(`/category-${item.name}`)}
                >
                  {item.name}
                </div>
                <div className="category-page-item-Content">{item.text} </div>
                <div className="category-page-sub-cont">
                  {item.subcategories.map((item) => {
                    return (
                      <div
                        className="category-page-sub-itm"
                        onClick={() => navigate(`/subcategory-${item.name}`)}
                      >
                        {item.name}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-5">
        <Footer />
      </div>
    </div>
  );
};

export default Category;
