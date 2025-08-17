import React, { useState } from "react";
import "./NavSm.css";
import { LiaOpencart } from "react-icons/lia";
import { RiMenuFill, RiUserLine } from "react-icons/ri";
import { FiHeart, FiUser } from "react-icons/fi";
import { LuMenu, LuShoppingBag } from "react-icons/lu";
import { IoClose, IoCloseOutline, IoSearchOutline } from "react-icons/io5";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { PiSquaresFour } from "react-icons/pi";
import category from "../categories";
import { Link } from "react-router";
import { MdChevronRight } from "react-icons/md";
const NavSm = () => {
  const [openNav, setOpenNav] = useState(false);
  const [categoryOpen, setcategoryOpen] = useState(false);
  const [AccountDrop, setAccountDrop] = useState(false);
  const [AccountSm, setAccountSm] = useState(false);
  return (
    <div className="nav-sm">
      <div className="nav-sm-container mt-2">
        <div className={`nav-sm-menu-container ${openNav ? "active" : ""}`}>
          <div className="p-3">
            <div className="d-flex align-items-center justify-content-between">
              <div className="logo-sm">
                <div>
                  <LiaOpencart className="logo-icon" />
                </div>
                <div>FizzMart</div>
              </div>
              <IoCloseOutline onClick={() => setOpenNav(false)} size={28} />
            </div>
            <div className="menu-search">
              <input type="text" placeholder="search something" />
              <IoSearchOutline />
            </div>
            <div className="menu-location">
              <HiOutlineLocationMarker />
              <div>Pick Location</div>
            </div>
            <div
              className="menu-container-sm"
              onClick={() => setcategoryOpen(!categoryOpen)}
            >
              <div className="menu-icn-sm">
                <PiSquaresFour size={17} className="mb-1" />
              </div>
              <div>All Department</div>
            </div>
            <div className={`department-sm ${categoryOpen ? "active" : ""}`}>
              <div className="px-4 py-3">
                {category.map((item) => {
                  return (
                    <div className="department-sm-itm">
                      <img src={item.image} alt="" />
                      <div>{item.name}</div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div>
              <ul className="nav-sm-list-item-container">
                <div>
                  <li>
                    <Link className="nav-sm-list-item" to="/">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link to="/shop-list" className="nav-sm-list-item">
                      Shop
                    </Link>
                  </li>
                  <li onClick={() => setAccountSm(!AccountSm)}>
                    <Link className="nav-sm-list-item">Account</Link>
                    <div>
                      <MdChevronRight />
                    </div>
                  </li>
                </div>
                {AccountDrop ? (
                  <ul
                    className={`nav-sm-list-dropdown   ${
                      AccountSm ? "active" : ""
                    }`}
                  >
                    <div className="p-2 ">
                      <li>
                        <Link className="nav-sm-list-dropdown-link">Order</Link>
                      </li>
                      <li>
                        <Link className="nav-sm-list-dropdown-link">
                          Settings
                        </Link>
                      </li>
                      <li>
                        <Link className="nav-sm-list-dropdown-link">
                          Address
                        </Link>
                      </li>
                    </div>
                  </ul>
                ) : (
                  <ul
                    className={`nav-sm-list-dropdown   ${
                      AccountSm ? "active" : ""
                    }`}
                  >
                    <div className="p-2 ">
                      <li>
                        <Link
                          className="nav-sm-list-dropdown-link"
                          to="/sign-in"
                        >
                          Sign In
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="nav-sm-list-dropdown-link"
                          to="/sign-up"
                        >
                          Sign Up
                        </Link>
                      </li>
                    </div>
                  </ul>
                )}

                <li>
                  <Link className="nav-sm-list-item">Mega menu</Link>
                  <div>
                    <MdChevronRight />
                  </div>
                </li>
                <li>
                  <Link className="nav-sm-list-item">About</Link>
                </li>
                <li>
                  <Link className="nav-sm-list-item" to="/contact-us">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link className="nav-sm-list-item">Blog page</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div>
          <Link to="/" className="logo-sm">
            <div>
              <LiaOpencart className="logo-icon" />
            </div>
            <div>FizzMart</div>
          </Link>
        </div>
        <div className="nav-sm-icons">
          <Link to="/Wishlist-page" className="shopping-icons-sm">
            <FiHeart size={20} />
            <div className="shopping-counter-sm">2</div>
          </Link>
          <div className="shopping-icons-sm">
            <FiUser size={23} />
          </div>
          <Link to="/cart-page" className="shopping-icons-sm">
            <LuShoppingBag size={20} />
            <div className="shopping-counter-sm">2</div>
          </Link>
          <div className="shopping-icons-sm" onClick={() => setOpenNav(true)}>
            <LuMenu size={24} />
          </div>
        </div>
      </div>
      <div className="px-3">
        <div className="nav-bar-input-sm">
          <input type="text" placeholder="Search something" />
          <IoSearchOutline />
        </div>
      </div>
    </div>
  );
};

export default NavSm;
