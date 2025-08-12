import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import "./Home.css";
import { LuMoveRight } from "react-icons/lu";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import CategoryContainer from "../../components/CategoryContainer/CategoryContainer";
import NavSm from "../../components/NavSm/NavSm";
import NewProduct from "../../components/NewProduct/NewProduct";
import Item from "../../components/Item/Item";
import product from "../../components/Product";
import Special from "../../components/Special/Special";
import BestSellers from "../../components/BestSellers/BestSellers";
import Subscribe from "../../components/Subscribe/Subscribe";
import AboutSection from "../../components/AboutSection/AboutSection";
var settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true, // ✅ Enable auto-scrolling
  autoplaySpeed: 3000, // ✅ Wait for 3 seconds before scrolling
  pauseOnHover: true, // ✅ Pause if user hovers
  pauseOnFocus: true, // ✅ Pause if user interacts
};
const Home = () => {
  const bannerItems = [
    {
      image:
        "https://static.wixstatic.com/media/bc12db_943b05a78837470b92026585bc1d17cc~mv2.png/v1/fill/w_476,h_1500,al_c,q_90,enc_avif,quality_auto/bc12db_943b05a78837470b92026585bc1d17cc~mv2.png",
      offer: "35",
      Head: "Best Online Store,For Drinks",
      Price: "3,500",
      ButtonText: "Get best deal",
      bannerClass: "Left1",
    },
    {
      image: "https://www.pngmart.com/files/23/Hennessy-PNG-Clipart.png",
      offer: "25",
      Head: "All Hennessy Drinks Deals",
      Price: "1,575",
      ButtonText: "Get best deal",
      bannerClass: "Left2",
    },
  ];
  return (
    <div>
      <NavBar />
      <NavSm />
      <div className="home-container">
        <div className="banners-container">
          <div className="first-banner ">
            <Slider {...settings}>
              {bannerItems.map((item) => {
                return (
                  <div className={`banner-left ${item.bannerClass}`}>
                    <div className="banner-right-top">
                      Executive offer <span>{item.offer}%</span>
                    </div>
                    <div className="banner-right-head">{item.Head}</div>
                    <div className="banner-right-week">
                      On only this week don't miss
                    </div>
                    <div className="banner-right-price">
                      Start from <span>N{item.Price}</span>
                    </div>
                    <button className="banner-right-button">
                      <div>{item.ButtonText}</div>
                      <div>
                        <LuMoveRight />
                      </div>
                    </button>
                    <img src={item.image} className="img-fluid" alt="" />
                  </div>
                );
              })}
            </Slider>
          </div>

          <div className="banner-right">
            <div className="banner-right-item-top">
              <div className="banner-top-head">10% cashback on First Order</div>
              <div className="banner-top-content">
                Refresh your day the
                <br /> with Fresh Seasoning
              </div>
              <button className="banner-top-button">Shop Now</button>
              <img
                src="https://png.pngtree.com/png-vector/20240529/ourmid/pngtree-pina-colada-with-pineapple-slice-and-cherry-png-image_12511808.png"
                alt=""
              />
            </div>
            <div className="banner-right-item-bottom">
              <div className="banner-top-head">Say yes to season’s fresh</div>
              <div className="banner-top-content">
                Refresh your day the
                <br /> with Fresh Seasoning
              </div>
              <button className="banner-top-button">Shop Now</button>
              <img
                src="https://static.vecteezy.com/system/resources/previews/051/960/680/non_2x/an-assortment-of-various-grocery-items-including-fruits-bread-cereals-and-jars-arranged-neatly-for-display-perfect-for-food-related-projects-png.png"
                alt=""
              />
            </div>
          </div>
        </div>
        <CategoryContainer />
        <div>
          <NewProduct />
        </div>
        <div className="second-banner">
          <div>
            <div className="second-banner-head">One Stop Grocery Shop</div>
            <div className="second-banner-content">
              Shopping for your furry friend? Find food, treats, and more in one
              easy spot.
            </div>
            <button href="tel:+2347069961314" className="fancy-button">
              <span>Start shop now</span>
            </button>
          </div>
          <div>
            <img
              src="https://freshcart.codescandy.com/assets/images/svg-graphics/store-graphics.svg"
              alt=""
            />
          </div>
        </div>
        <div>
          <Special />
        </div>
        <div>
          <BestSellers />
        </div>
        <div>
          <Subscribe />
        </div>
      </div>
    </div>
  );
};

export default Home;
