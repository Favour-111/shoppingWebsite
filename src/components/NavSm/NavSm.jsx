import React, { useState } from "react";
import "./NavSm.css";
import { LiaOpencart } from "react-icons/lia";
import { RiMenuFill, RiUserLine } from "react-icons/ri";
import { FiHeart } from "react-icons/fi";
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
          </div>
        </div>
        <div className="shopping-icons-sm" onClick={() => setOpenNav(true)}>
          <LuMenu size={25} />
        </div>
        <div>
          <div className="logo-sm">
            <div>
              <LiaOpencart className="logo-icon" />
            </div>
            <div>FizzMart</div>
          </div>
        </div>
        <div className="nav-sm-icons">
          <div className="shopping-icons-sm">
            <FiHeart />
            <div className="shopping-counter-sm">2</div>
          </div>
          <div className="shopping-icons-sm">
            <RiUserLine size={18} />
          </div>
          <div className="shopping-icons-sm">
            <LuShoppingBag />
            <div className="shopping-counter-sm">2</div>
          </div>
        </div>
      </div>
      <div className="px-4">
        <div className="nav-bar-input-sm">
          <input type="text" placeholder="Search something" />
          <IoSearchOutline />
        </div>
      </div>
      <div>
        <ul className="nav-sm-list-item-container">
          <li>
            <Link className="nav-sm-list-item">Home</Link>
            <div>
              <MdChevronRight />
            </div>
          </li>
          <li>
            <Link className="nav-sm-list-item">About</Link>
            <div>
              <MdChevronRight />
            </div>
          </li>
          <li>
            <Link className="nav-sm-list-item">Home</Link>
            <div>
              <MdChevronRight />
            </div>
          </li>
          <li>
            <Link className="nav-sm-list-item">Home</Link>
            <div>
              <MdChevronRight />
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavSm;
