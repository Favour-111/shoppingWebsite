import React, { useContext } from "react";
import "./View.css";
import NavBar from "../../components/NavBar/NavBar";
import NavSm from "../../components/NavSm/NavSm";
import { MdChevronRight } from "react-icons/md";
import { Link, useLocation } from "react-router-dom";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import Item from "../../components/Item/Item";
// import your product array
import product from "../../components/Product";
import { GoPlus } from "react-icons/go";
import { LuMinus } from "react-icons/lu";
import { IoMdHeart, IoMdHeartEmpty } from "react-icons/io";
import Footer from "../../components/Footer/Footer";
import { ShopContext } from "../../components/Context/ShopContext";
import toast, { Toaster } from "react-hot-toast";
const View = () => {
  const { addToCart, cartItems, RemoveCart, addToList, WishList, removeList } =
    useContext(ShopContext);
  const location = useLocation();
  const products = location.state || {};
  const { id } = products;

  const ProductFind = product.find((item) => item.id === id);

  const page = ProductFind.subcategories[0];
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
            <img src={ProductFind.image} alt={currentProduct.name} />
          </div>
          <div className="product-about-container-content">
            <div className="cont-1">
              <div className="prod-abt-category">{currentProduct.category}</div>
              <div className="prod-abt-name">{ProductFind.name}</div>

              {/* rating stars */}
              <div className="d-flex align-items-center gap-1">
                <div className="prod-abt-rating">{renderStars()}</div>
                <div className="ratin-num">({ProductFind.rating})</div>
              </div>
              {/* price (if available in your array) */}
              <div className="prod-abt-price">₦{ProductFind.newPrice}</div>
            </div>
            <div className="cont-2">
              <div className="abt-counter-body">
                <button
                  onClick={() => {
                    addToCart(ProductFind.id);
                    toast.success(`${ProductFind.name} Added`);
                  }}
                  className="abt-button-1"
                >
                  <GoPlus />
                </button>
                <div className="about-counter">{cartItems[ProductFind.id]}</div>
                <button
                  onClick={() => {
                    RemoveCart(ProductFind.id);
                    toast.success(`${ProductFind.name} removed`);
                  }}
                  className="abt-button-2"
                >
                  <LuMinus />
                </button>
              </div>
              <div className="abt-buttons">
                <button
                  className="abt-add-cart"
                  onClick={() => {
                    addToCart(ProductFind.id);
                    toast.success(`${ProductFind.name} removed from wish list`);
                  }}
                >
                  {cartItems[ProductFind.id] > 0
                    ? "Item in cart"
                    : "Add to cart"}
                </button>
                {WishList[ProductFind.id] > 0 ? (
                  <button
                    className="abt-heart-1"
                    onClick={() => {
                      removeList(ProductFind.id);
                      toast.success(
                        `${ProductFind.name} removed from wish list`
                      );
                    }}
                  >
                    <IoMdHeart size={20} />
                  </button>
                ) : (
                  <button
                    className="abt-heart-1"
                    onClick={() => {
                      addToList(ProductFind.id);
                      toast.success(`${ProductFind.name} added to wish list`);
                    }}
                  >
                    <IoMdHeartEmpty size={20} />
                  </button>
                )}
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
