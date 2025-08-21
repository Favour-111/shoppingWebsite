import React, { useContext, useState } from "react";
import "./NavSm.css";
import { LiaOpencart } from "react-icons/lia";
import { RiUserLine } from "react-icons/ri";
import { FiHeart, FiUser } from "react-icons/fi";
import { LuMenu, LuShoppingBag } from "react-icons/lu";
import { IoCloseOutline, IoSearchOutline } from "react-icons/io5";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { PiSquaresFour } from "react-icons/pi";
import category from "../categories";
import { Link, useNavigate } from "react-router";
import { MdChevronRight } from "react-icons/md";
import { ShopContext } from "../Context/ShopContext";
import product from "../Product";
import { GoArrowUpRight } from "react-icons/go";

const NavSm = () => {
  const navigate = useNavigate();
  const { getTotalCart, getTotalList } = useContext(ShopContext);

  const [openNav, setOpenNav] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);
  // "category", "account", "mega" or null

  const [AccountDrop, setAccountDrop] = useState(false);

  const toggleMenu = (menu) => {
    setActiveMenu((prev) => (prev === menu ? null : menu));
  };
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const handleSearch = (e) => {
    const value = e.target.value.toLowerCase();
    setQuery(value);

    if (value.trim() === "") {
      setResults([]);
      return;
    }

    // filter matching products
    const filtered = product.filter((item) =>
      item.name.toLowerCase().includes(value)
    );

    // get unique names
    const uniqueNames = [...new Set(filtered.map((item) => item.name))];

    setResults(uniqueNames);
  };

  return (
    <div className="nav-sm">
      <div className="nav-sm-container mt-2">
        <div className={`nav-sm-menu-container ${openNav ? "active" : ""}`}>
          <div className="p-3">
            {/* Top Logo + Close */}
            <div className="d-flex align-items-center justify-content-between">
              <div className="logo-sm">
                <div>
                  <LiaOpencart className="logo-icon" />
                </div>
                <div>FizzMart</div>
              </div>
              <IoCloseOutline onClick={() => setOpenNav(false)} size={28} />
            </div>

            {/* Search */}
            <div className="nav-search-container-sm">
              <div className="menu-search">
                <input
                  type="text"
                  value={query}
                  onChange={handleSearch}
                  placeholder="search something"
                />
                <IoSearchOutline />
              </div>
              {results.length > 0 && (
                <div className="menu-item-search-sm shadow-sm">
                  {results.map((name, index) => (
                    <div key={index} className="search-item-container">
                      <div> {name}</div>
                      <div>
                        <GoArrowUpRight />
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Location */}
            <div className="menu-location">
              <HiOutlineLocationMarker />
              <div>Pick Location</div>
            </div>

            {/* All Departments */}
            <div
              className="menu-container-sm"
              onClick={() => toggleMenu("category")}
            >
              <div className="menu-icn-sm">
                <PiSquaresFour size={17} className="mb-1" />
              </div>
              <div>All Department</div>
            </div>

            <div
              className={`department-sm ${
                activeMenu === "category" ? "active" : ""
              }`}
            >
              <div className="px-2 py-0">
                {category.map((item) => {
                  return (
                    <Link
                      key={item.name}
                      to={`/category-${item.name}`}
                      onClick={() => setOpenNav(false)}
                      className="department-sm-itm"
                    >
                      <img src={item.image} alt={item.name} />
                      <div>{item.name}</div>
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* Navigation List */}
            <div>
              <ul className="nav-sm-list-item-container">
                <div>
                  <li>
                    <Link className="nav-sm-list-item" to="/">
                      Home
                    </Link>
                  </li>

                  {/* Account */}
                  <li onClick={() => toggleMenu("account")}>
                    <Link className="nav-sm-list-item">Account</Link>
                    <div>
                      <MdChevronRight />
                    </div>
                  </li>
                </div>

                {AccountDrop ? (
                  <ul
                    className={`nav-sm-list-dropdown ${
                      activeMenu === "account" ? "active" : ""
                    }`}
                  >
                    <div className="px-1 ">
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
                    className={`nav-sm-list-dropdown ${
                      activeMenu === "account" ? "active" : ""
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

                {/* Mega Menu */}
                <li onClick={() => toggleMenu("mega")}>
                  <Link className="nav-sm-list-item">Mega menu</Link>
                  <div>
                    <MdChevronRight />
                  </div>
                </li>

                <div
                  className={`mega-menu-sm ${
                    activeMenu === "mega" ? "active" : ""
                  }`}
                >
                  {category.map((item) => {
                    return (
                      <div key={item.name} className="mt-3">
                        <Link
                          to={`/category-${item.name}`}
                          className="mega-sm-head"
                        >
                          {item.name}
                        </Link>
                        <ul className="mt-2">
                          {item.subcategories.map((sub) => {
                            return (
                              <li
                                key={sub.name}
                                onClick={() =>
                                  navigate(`/Subcategory-${sub.name}`)
                                }
                              >
                                <Link className="Mega-Link">{sub.name}</Link>
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    );
                  })}
                </div>

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

        {/* Bottom Navbar */}
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
            <FiHeart size={21} />
            <div className="shopping-counter-sm">{getTotalList()}</div>
          </Link>
          <Link to="/sign-in" className="shopping-icons-sm">
            <FiUser size={25} />
          </Link>
          <Link to="/cart-page" className="shopping-icons-sm">
            <LuShoppingBag size={21} />
            <div className="shopping-counter-sm">{getTotalCart()}</div>
          </Link>
          <div className="shopping-icons-sm" onClick={() => setOpenNav(true)}>
            <LuMenu size={25} />
          </div>
        </div>
      </div>

      {/* Bottom Search */}
      <div className="px-3">
        <div className="nav-search-container-sm">
          <div className="nav-bar-input-sm ">
            <input
              type="text"
              value={query}
              onChange={handleSearch}
              placeholder="Search something"
            />
            <IoSearchOutline />
          </div>
          {results.length > 0 && (
            <div className="search-item-sm shadow-sm">
              {results.map((name, index) => (
                <div key={index} className="search-item-container">
                  <div> {name}</div>
                  <div>
                    <GoArrowUpRight />
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavSm;
