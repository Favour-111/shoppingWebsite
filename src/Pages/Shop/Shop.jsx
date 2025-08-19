import React, { useMemo, useState } from "react";
import "./Shop.css";
import NavBar from "../../components/NavBar/NavBar";
import NavSm from "../../components/NavSm/NavSm";
import Item from "../../components/Item/Item";
import product from "../../components/Product";
import Footer from "../../components/Footer/Footer";
import {
  MdKeyboardArrowLeft,
  MdKeyboardArrowRight,
  MdOutlineChevronRight,
  MdOutlineClose,
} from "react-icons/md";
import { FaStar } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import { IoListOutline } from "react-icons/io5";
import { CiFilter, CiGrid41 } from "react-icons/ci";
import { BsGrid3X3Gap } from "react-icons/bs";

// ⭐ star rating component
const RatingFilter = ({ rating, setRating }) => {
  const handleCheckboxChange = (val) => {
    if (rating === val) {
      setRating(""); // unselect if same
    } else {
      setRating(val);
    }
  };

  return (
    <div className="rating-filter mt-1">
      {[5, 4, 3, 2, 1].map((val) => (
        <label key={val} className="star-label" style={{ display: "block" }}>
          <div className="star-container">
            <div>
              <input
                className="star-checkbox"
                type="checkbox"
                checked={rating === String(val)}
                onChange={() => handleCheckboxChange(String(val))}
              />
            </div>
            <div className="star-text" style={{}}>
              {Array.from({ length: val }, (_, i) => (
                <FaStar key={i} color="gold" />
              ))}{" "}
            </div>
          </div>
        </label>
      ))}
    </div>
  );
};

const Shop = ({ page }) => {
  // --- STATE ---
  const [filter, setFilter] = useState(false);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [sortBy, setSortBy] = useState("");
  const [inStock, setInStock] = useState(""); // "in", "out", or ""
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [rating, setRating] = useState(""); // 1–5
  let filteredCategory;
  // --- FILTER (Dry Goods only) ---

  const filteredProducts = useMemo(() => {
    return product.filter((p) => {
      filteredCategory = p.category !== page;
      if (filteredCategory) return false;
      if (inStock === "in" && !p.inStock) return false;
      if (inStock === "out" && p.inStock) return false;
      if (minPrice && Number(p.newPrice) < Number(minPrice)) return false;
      if (maxPrice && Number(p.newPrice) > Number(maxPrice)) return false;
      if (rating && Number(p.rating) < Number(rating)) return false;
      return true;
    });
  }, [page, inStock, minPrice, maxPrice, rating]);

  // --- SORT ---
  const sortedProducts = useMemo(() => {
    const arr = [...filteredProducts];
    switch (sortBy) {
      case "price-high":
        arr.sort((a, b) => Number(b.newPrice) - Number(a.newPrice));
        break;
      case "price-low":
        arr.sort((a, b) => Number(a.newPrice) - Number(b.newPrice));
        break;
      case "rating":
        arr.sort((a, b) => Number(b.rating) - Number(a.rating));
        break;
      case "recent":
        arr.sort((a, b) => new Date(b.addedAt) - new Date(a.addedAt));
        break;
      default:
        break;
    }
    return arr;
  }, [filteredProducts, sortBy]);

  // --- PAGINATION ---
  const totalPages = Math.max(
    1,
    Math.ceil(sortedProducts.length / itemsPerPage)
  );
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentProducts = sortedProducts.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  const handlePageChange = (page) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // --- RENDER PAGINATION ---
  const renderPagination = () => {
    const pages = [];
    const maxEdge = 5;

    pages.push(
      <button
        key="prev"
        className="page-btn prev"
        disabled={currentPage === 1}
        onClick={() => handlePageChange(currentPage - 1)}
      >
        <MdKeyboardArrowLeft />
      </button>
    );

    if (totalPages <= maxEdge) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(
          <button
            key={i}
            className={`page-btn ${currentPage === i ? "active" : ""}`}
            onClick={() => handlePageChange(i)}
          >
            {i}
          </button>
        );
      }
    } else {
      pages.push(
        <button
          key={1}
          className={`page-btn ${currentPage === 1 ? "active" : ""}`}
          onClick={() => handlePageChange(1)}
        >
          1
        </button>
      );
      if (currentPage > 3) {
        pages.push(
          <span key="dots-left" className="dots">
            ...
          </span>
        );
      }
      const start = Math.max(2, currentPage - 1);
      const end = Math.min(totalPages - 1, currentPage + 1);
      for (let i = start; i <= end; i++) {
        pages.push(
          <button
            key={i}
            className={`page-btn ${currentPage === i ? "active" : ""}`}
            onClick={() => handlePageChange(i)}
          >
            {i}
          </button>
        );
      }
      if (currentPage < totalPages - 2) {
        pages.push(
          <span key="dots-right" className="dots">
            ...
          </span>
        );
      }
      pages.push(
        <button
          key={totalPages}
          className={`page-btn ${currentPage === totalPages ? "active" : ""}`}
          onClick={() => handlePageChange(totalPages)}
        >
          {totalPages}
        </button>
      );
    }

    pages.push(
      <button
        key="next"
        className="page-btn next"
        disabled={currentPage === totalPages}
        onClick={() => handlePageChange(currentPage + 1)}
      >
        <MdKeyboardArrowRight />
      </button>
    );

    return pages;
  };

  return (
    <div>
      <NavBar />
      <NavSm />
      <div className="home-container">
        {/* Breadcrumb */}
        <div className="bread-crumb mt-3">
          <span>Home</span>
          <div className="slash">/</div>
          <span>Shop</span>
          <div className="slash">/</div>
          {page}
        </div>
        <div className="shop">
          <div className="filter-container">
            {/* --- Filter category --- */}
            <div className="filter-category">
              <div className="filter-head">Categories</div>
              <div className="filter-item mb-3">
                <div className="filter-cat-items">
                  <div>Dry Goods</div>
                  <div>
                    <MdOutlineChevronRight />
                  </div>
                </div>
                <div className="filter-cat-items">
                  <div>Wine and Spirit</div>
                  <div>
                    <MdOutlineChevronRight />
                  </div>
                </div>
                <div className="filter-cat-items">
                  <div>Soft Drink</div>
                  <div>
                    <MdOutlineChevronRight />
                  </div>
                </div>
                <div className="filter-cat-items">
                  <div>Meat & poultry</div>
                  <div>
                    <MdOutlineChevronRight />
                  </div>
                </div>
                <div className="filter-cat-items">
                  <div>Processed Goods</div>
                  <div>
                    <MdOutlineChevronRight />
                  </div>
                </div>
                <div className="filter-cat-items">
                  <div>Kitchen item</div>
                  <div>
                    <MdOutlineChevronRight />
                  </div>
                </div>
              </div>
            </div>
            {/* Stock filter */}
            <div className="filter-head mb-2">Stock</div>
            <select
              value={inStock}
              className="form-select mb-4 p-2"
              onChange={(e) => {
                setInStock(e.target.value);
                setCurrentPage(1);
              }}
            >
              <option value="">All Stock</option>
              <option value="in">In Stock</option>
              <option value="out">Out of Stock</option>
            </select>

            {/* Price range */}
            <div>
              <div className="filter-head mb-2">Price ₦</div>
              <div className="d-flex align-items-center  mb-4 gap-2">
                <div>
                  {" "}
                  <input
                    type="text"
                    placeholder="Min Price"
                    value={minPrice}
                    onChange={(e) => {
                      setMinPrice(e.target.value);
                      setCurrentPage(1);
                    }}
                  />
                </div>
                <div>-</div>
                <div>
                  <input
                    type="text"
                    placeholder="Max Price"
                    value={maxPrice}
                    onChange={(e) => {
                      setMaxPrice(e.target.value);
                      setCurrentPage(1);
                    }}
                  />
                </div>
              </div>
            </div>
            <div className="filter-head mb-2">Sort</div>

            <select
              value={sortBy}
              className="form-select p-2"
              onChange={(e) => {
                setSortBy(e.target.value);
                setCurrentPage(1);
              }}
            >
              <option value="">Sort By : Featured</option>
              <option value="recent">Recently Added</option>
              <option value="price-high">Price : High to Low</option>
              <option value="price-low">Price : Low to High</option>
              <option value="rating">Avg rating</option>
            </select>
            <div className="filter-head mt-4">Ratings</div>

            <RatingFilter rating={rating} setRating={setRating} />

            {/* banner */}
            <div className="side-banner">
              <div className="side-head">Dry Goods</div>
              <div className="side-content">Get Upto 25% off</div>
              <button>
                Shop now <FaArrowRightLong className="ms-2" />
              </button>
            </div>
          </div>
          <div className="shop-bdy">
            {/* Heading + image */}
            <div className="shop-name">
              <div>{page}</div>
              <div>
                <img
                  src="https://png.pngtree.com/png-clipart/20240527/original/pngtree-selection-of-liquor-bottles-against-png-image_15187936.png"
                  alt="banner"
                />
              </div>
            </div>

            {/* Top controls */}
            <div className="item-head">
              <div className="product-found">
                <span>{sortedProducts.length}</span> Products found
              </div>
              <div className="select-item">
                <div className="filter">
                  <button
                    className="filter-open-button"
                    onClick={() => setFilter(true)}
                  >
                    <div>
                      <CiFilter />
                    </div>
                    <div>Filters</div>
                  </button>
                  <div className="filter-icons-cont">
                    <div className="filter-icons">
                      <IoListOutline />
                    </div>
                    <div className="filter-icons">
                      <CiGrid41 />
                    </div>
                    <div className="filter-icons">
                      <BsGrid3X3Gap />
                    </div>
                  </div>
                </div>

                {/* Show (items per page) */}
                <div className="select-div">
                  <select
                    className="form-select show"
                    value={itemsPerPage}
                    onChange={(e) => {
                      setItemsPerPage(Number(e.target.value));
                      setCurrentPage(1);
                    }}
                  >
                    <option value={10}>Show : 10</option>
                    <option value={20}>Show : 20</option>
                    <option value={30}>Show : 30</option>
                    <option value={40}>Show : 40</option>
                    <option value={50}>Show : 50</option>
                  </select>
                  <select
                    value={sortBy}
                    className="form-select sort"
                    onChange={(e) => {
                      setSortBy(e.target.value);
                      setCurrentPage(1);
                    }}
                  >
                    <option value="">Sort By : Featured</option>
                    <option value="recent">Recently Added</option>
                    <option value="price-high">Price : High to Low</option>
                    <option value="price-low">Price : Low to High</option>
                    <option value="rating">Avg rating</option>
                  </select>
                </div>
              </div>
            </div>
            {currentProducts.length < 1 ? (
              <p className="no-prod">No product found in this category</p>
            ) : (
              <></>
            )}

            {/* Products grid */}
            <div className="new-product-container">
              <div className="mt-3 NewProducts">
                {currentProducts.map((item) => (
                  <Item key={item.id || item.name} product={item} />
                ))}
              </div>
            </div>

            {/* Pagination */}
            <div className="pagination">{renderPagination()}</div>
          </div>
        </div>
        <div className={`filter-container-bg ${filter ? "active" : ""}`}></div>
        <div
          className={`filter-container-sm shadow-sm ${filter ? "active" : ""}`}
        >
          <div className="filter-sm">
            {/* --- Filter Head --- */}
            <div className="d-flex align-items-center justify-content-between mb-4">
              <div className="filter-sm-head">Filter</div>
              <div className="close-icon" onClick={() => setFilter(false)}>
                <MdOutlineClose size={25} color="#787878" />
              </div>
            </div>
            {/* --- Filter category --- */}
            <div className="filter-category">
              <div className="filter-head">Categories</div>
              <div className="filter-item mb-3">
                <div className="filter-cat-items">
                  <div>Dry Goods</div>
                  <div>
                    <MdOutlineChevronRight />
                  </div>
                </div>
                <div className="filter-cat-items">
                  <div>Wine and Spirit</div>
                  <div>
                    <MdOutlineChevronRight />
                  </div>
                </div>
                <div className="filter-cat-items">
                  <div>Soft Drink</div>
                  <div>
                    <MdOutlineChevronRight />
                  </div>
                </div>
                <div className="filter-cat-items">
                  <div>Meat & poultry</div>
                  <div>
                    <MdOutlineChevronRight />
                  </div>
                </div>
                <div className="filter-cat-items">
                  <div>Processed Goods</div>
                  <div>
                    <MdOutlineChevronRight />
                  </div>
                </div>
                <div className="filter-cat-items">
                  <div>Kitchen item</div>
                  <div>
                    <MdOutlineChevronRight />
                  </div>
                </div>
              </div>
            </div>
            {/* Stock filter */}
            <div className="filter-head mb-2">Stock</div>
            <select
              value={inStock}
              className="form-select mb-4 p-2"
              onChange={(e) => {
                setInStock(e.target.value);
                setCurrentPage(1);
              }}
            >
              <option value="">All Stock</option>
              <option value="in">In Stock</option>
              <option value="out">Out of Stock</option>
            </select>

            {/* Price range */}
            <div>
              <div className="filter-head mb-2">Price ₦</div>
              <div className="d-flex align-items-center  mb-4 gap-2">
                <div>
                  {" "}
                  <input
                    type="text"
                    placeholder="Min Price"
                    value={minPrice}
                    onChange={(e) => {
                      setMinPrice(e.target.value);
                      setCurrentPage(1);
                    }}
                  />
                </div>
                <div>-</div>
                <div>
                  <input
                    type="text"
                    placeholder="Max Price"
                    value={maxPrice}
                    onChange={(e) => {
                      setMaxPrice(e.target.value);
                      setCurrentPage(1);
                    }}
                  />
                </div>
              </div>
            </div>
            <div className="filter-head mb-2">Sort</div>

            <select
              value={sortBy}
              className="form-select p-2"
              onChange={(e) => {
                setSortBy(e.target.value);
                setCurrentPage(1);
              }}
            >
              <option value="">Sort By : Featured</option>
              <option value="recent">Recently Added</option>
              <option value="price-high">Price : High to Low</option>
              <option value="price-low">Price : Low to High</option>
              <option value="rating">Avg rating</option>
            </select>
            <div className="filter-head mt-4">Ratings</div>

            <RatingFilter rating={rating} setRating={setRating} />

            {/* banner */}
            <div className="side-banner">
              <div className="side-head">Dry Goods</div>
              <div className="side-content">Get Upto 25% off</div>
              <button>
                Shop now <FaArrowRightLong className="ms-2" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-5">
        <Footer />
      </div>
    </div>
  );
};

export default Shop;
