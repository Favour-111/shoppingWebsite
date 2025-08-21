import React from "react";
import "./View.css";
import NavBar from "../../components/NavBar/NavBar";
import NavSm from "../../components/NavSm/NavSm";
import { MdChevronRight } from "react-icons/md";
import { Link } from "react-router-dom";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import Item from "../../components/Item/Item";
// import your product array
import product from "../../components/Product";
import { GoPlus } from "react-icons/go";
import { LuMinus } from "react-icons/lu";
import { IoMdHeartEmpty } from "react-icons/io";
import Footer from "../../components/Footer/Footer";
const View = () => {
  const page = "Canned Products";
  // pick the first product for now
  const currentProduct = product[0];

  const renderStars = () => {
    const stars = [];
    const fullStars = Math.floor(currentProduct.rating);
    const halfStar = currentProduct.rating % 1 >= 0.5;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <FaStar size={13} key={`full-${i}`} className="star filled" />
      );
    }
    if (halfStar) {
      stars.push(<FaStarHalfAlt size={13} key="half" className="star half" />);
    }
    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <FaRegStar size={13} key={`empty-${i}`} className="star empty" />
      );
    }
    return stars;
  };
  const productFilter = product.filter((item) =>
    item.subcategories.includes(page)
  );
  console.log(productFilter);

  return (
    <div>
      <NavBar />
      <NavSm />
      <div className="home-container">
        <div className="bread-crumb mt-3">
          <Link to="/" className="bread-crumb-link">
            Home
          </Link>
          <div className="slash">
            <MdChevronRight />
          </div>
          <span>Shop</span>
          <div className="slash">
            <MdChevronRight />
          </div>
          <span>{currentProduct.category}</span>

          <div className="slash">
            <MdChevronRight />
          </div>
          {page}
        </div>
        <div className="product-about-container">
          <div className="product-about-container-image">
            <img
              src="https://freshcart.codescandy.com/assets/images/products/product-single-img-1.jpg"
              alt={currentProduct.name}
            />
          </div>
          <div className="product-about-container-content">
            <div className="cont-1">
              <div className="prod-abt-category">{currentProduct.category}</div>
              <div className="prod-abt-name">Napolitanke Ljesnjak</div>

              {/* rating stars */}
              <div className="d-flex align-items-center gap-1">
                <div className="prod-abt-rating">{renderStars()}</div>
                <div className="ratin-num">({currentProduct.rating})</div>
              </div>
              {/* price (if available in your array) */}
              <div className="prod-abt-price">₦{currentProduct.newPrice}</div>
            </div>
            <div className="cont-2">
              <div className="abt-counter-body">
                <button className="abt-button-1">
                  <GoPlus />
                </button>
                <div className="about-counter">0</div>
                <button className="abt-button-2">
                  <LuMinus />
                </button>
              </div>
              <div className="abt-buttons">
                <button className="abt-add-cart">Add to cart</button>
                <button className="abt-heart-1">
                  <IoMdHeartEmpty size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="det-text-container">
          <div className="details-text-head">Product Details</div>
          <div className="details-line">
            <div className="inner-line"></div>
          </div>
          <div className="detail-content">
            Nutrient Value & Benefits Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Nisi, tellus iaculis urna bibendum in lacus,
            integer. Id imperdiet vitae varius sed magnis eu nisi nunc sit. Vel,
            varius habitant ornare ac rhoncus. Consequat risus facilisis ante
            ipsum netus risus adipiscing sagittis sed. Lorem ipsum dolor sit
            amet, consectetur adipiscing elit. Storage Tips Nisi, tellus iaculis
            urna bibendum in lacus, integer. Id imperdiet vitae varius sed
            magnis eu nisi nunc sit. Vel, varius habitant ornare ac rhoncus.
            Consequat risus facilisis ante ipsum netus risus adipiscing sagittis
            sed.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Unit 3
            units Seller DMart Pvt. LTD Disclaimer Image shown is a
            representation and may slightly vary from the actual product. Every
            effort is made to maintain accuracy of all information displayed.
          </div>
        </div>
        <div className="related-container">
          <div className="related-head">Related Items</div>
          <div className="NewProducts mt-2">
            {productFilter.map((item) => {
              return <Item product={item} />;
            })}
          </div>
        </div>
      </div>
      <div className="mt-5">
        <Footer />
      </div>
    </div>
  );
};

export default View;
