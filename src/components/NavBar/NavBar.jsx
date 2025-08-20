import React, { useContext, useState } from "react";
import "./NavBar.css";
import { LiaOpencart } from "react-icons/lia";
import { LuShoppingBag } from "react-icons/lu";
import { RiUserLine } from "react-icons/ri";
import { GoHeart, GoSearch } from "react-icons/go";
import { FaSearch } from "react-icons/fa";
import { PiSquaresFour } from "react-icons/pi";
import { MdKeyboardArrowDown } from "react-icons/md";
import { Link } from "react-router";
import { IoLocationOutline } from "react-icons/io5";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { FiHeart, FiUser } from "react-icons/fi";
import category from "../categories";
import { ShopContext } from "../Context/ShopContext";
import { useNavigate } from "react-router";
const NavBar = () => {
  const navigate = useNavigate();
  const { getTotalCart, getTotalList } = useContext(ShopContext);
  const [mainDrop, setMainDrop] = useState(false);
  const [megaDrop, setMegaDrop] = useState(false);
  const [AccountDrop, setAccountDrop] = useState(false);
  const [logged, setLogged] = useState(false);
  return (
    <div>
      <div className="top-bar">Super Value Deals - Save more with coupons</div>
      <div className="navigation-bar">
        <div className="nav-container">
          <div className="logo">
            <div>
              <LiaOpencart className="logo-icon" />
            </div>
            <div>FizzMart</div>
          </div>
          <div className="d-flex align-items-center gap-3">
            <div className="Nav-search-input">
              <input
                type="text"
                name="product"
                placeholder="Search for product"
              />
              <div className="search-icon">
                <GoSearch />
              </div>
            </div>
            <div className="location-cont">
              <div>
                <HiOutlineLocationMarker className="mb-1" />
              </div>
              <div>Location</div>
            </div>
          </div>

          <div className="nav-icons">
            <Link to="/Wishlist-page" className="shopping-icons">
              <FiHeart />
              <div className="shopping-counter">{getTotalList()}</div>
            </Link>
            <div className="shopping-icons">
              <FiUser size={23} />
            </div>
            <Link to="/cart-page" className="shopping-icons">
              <LuShoppingBag />
              <div className="shopping-counter">{getTotalCart()}</div>
            </Link>
          </div>
        </div>
        <div className="nav-bottom">
          <ul className="nav-list">
            <li
              className="nav-itm"
              onMouseOver={() => setMainDrop(true)}
              onMouseOut={() => setMainDrop(false)}
            >
              <div className="menu-container">
                <div className="menu-icn">
                  <PiSquaresFour size={17} className="mb-1" />
                </div>
                <div>All Department</div>
              </div>

              <ul
                className={`drop-down-container shadow-sm ${
                  mainDrop ? "Open" : ""
                }`}
              >
                <div className="px-4 py-3">
                  {category.map((item) => {
                    return (
                      <li
                        onClick={() => navigate(`/category-${item.name}`)}
                        className=""
                      >
                        <img src={item.image} alt="" />

                        {item.name}
                      </li>
                    );
                  })}
                </div>
              </ul>
            </li>
            <li className="nav-Itm">
              <Link to="/" className="nav-Itm">
                Home
              </Link>{" "}
            </li>

            <li
              className="nav-Itm"
              onMouseOver={() => setAccountDrop(true)}
              onMouseOut={() => setAccountDrop(false)}
            >
              <div className="nav-item-dropdown">
                <div>Account</div>
                <div className="menu-icn">
                  <MdKeyboardArrowDown className="mb-1" />
                </div>
              </div>
              {logged === true ? (
                <ul
                  className={`account-drop-down shadow-sm ${
                    AccountDrop ? "active" : ""
                  }`}
                >
                  <li>
                    <Link className="account-link">Order</Link>
                  </li>
                  <li>
                    <Link className="account-link">Settings</Link>
                  </li>
                  <li>
                    <Link className="account-link">Address</Link>
                  </li>
                </ul>
              ) : (
                <ul
                  className={`account-drop-down shadow-sm ${
                    AccountDrop ? "active" : ""
                  }`}
                >
                  <li>
                    <Link className="account-link" to="/sign-in">
                      Sign In
                    </Link>
                  </li>
                  <li>
                    <Link className="account-link" to="/sign-up">
                      SignUp
                    </Link>
                  </li>
                </ul>
              )}
            </li>
            <li
              className="nav-Itm"
              onMouseEnter={() => setMegaDrop(true)}
              onMouseLeave={() => setMegaDrop(false)} // ✅ works for both nav + dropdown
              onClick={() => setMegaDrop(false)}
            >
              <div className="nav-item-dropdown">
                <div>Mega menu</div>
                <div className="menu-icn">
                  <MdKeyboardArrowDown className="mb-1" />
                </div>
              </div>

              <div className={`mega-menu ${megaDrop ? "active" : ""}`}>
                <div className="mega-menu-itm">
                  {category.map((item) => {
                    return (
                      <div className="menu">
                        <Link
                          to={`/category-${item.name}`}
                          className="mega-menu-head"
                        >
                          {item.name}
                        </Link>
                        <ul>
                          {item.subcategories.map((sub) => {
                            return (
                              <li
                                onClick={() =>
                                  navigate(`/Subcategory-${sub.name}`)
                                }
                              >
                                {sub.name}
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    );
                  })}
                </div>
              </div>
            </li>

            <li className="nav-Itm">
              <Link className="nav-Itm" to="/About-page">
                About
              </Link>
            </li>
            <li>
              <Link className="nav-Itm" to="/contact-us">
                Contact
              </Link>
            </li>
            <li className="nav-Itm">Blog Page</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
