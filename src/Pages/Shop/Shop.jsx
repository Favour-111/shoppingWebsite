import React, { useMemo, useState } from "react";
import "./Shop.css";
import NavBar from "../../components/NavBar/NavBar";
import NavSm from "../../components/NavSm/NavSm";
import Item from "../../components/Item/Item";
import product from "../../components/Product";
import Footer from "../../components/Footer/Footer";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

const Shop = () => {
  // --- STATE ---
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [sortBy, setSortBy] = useState(""); // optional: hook up sorting

  // --- FILTER (Dry Goods only) ---
  const filteredProducts = useMemo(() => {
    return product.filter((p) => p.category === "Dry Goods");
  }, []);

  // --- OPTIONAL SORT ---
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
      default:
        // "Featured" or empty = original order
        break;
    }
    return arr;
  }, [filteredProducts, sortBy]);

  // --- PAGINATION CALCS ---
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

  // --- RENDER PAGINATION (with <, > and ellipses) ---
  const renderPagination = () => {
    const pages = [];
    const maxEdge = 5; // if totalPages <= 5 show all

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
      // always show 1
      pages.push(
        <button
          key={1}
          className={`page-btn ${currentPage === 1 ? "active" : ""}`}
          onClick={() => handlePageChange(1)}
        >
          1
        </button>
      );

      // left dots
      if (currentPage > 3) {
        pages.push(
          <span key="dots-left" className="dots">
            ...
          </span>
        );
      }

      // middle window (current-1, current, current+1)
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

      // right dots
      if (currentPage < totalPages - 2) {
        pages.push(
          <span key="dots-right" className="dots">
            ...
          </span>
        );
      }

      // always show last
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
          Dry Goods
        </div>

        {/* Heading + image */}
        <div className="shop-name">
          <div>Dry Goods</div>
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
            {/* Show (items per page) */}
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

            {/* Sort */}
            <select
              className="form-select sort"
              value={sortBy}
              onChange={(e) => {
                setSortBy(e.target.value);
                setCurrentPage(1);
              }}
            >
              <option value="">Sort By : Featured</option>
              <option value="price-high">Price : High to Low</option>
              <option value="price-low">Price : Low to High</option>
              <option value="rating">Avg rating</option>
            </select>
          </div>
        </div>

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
      <Footer />
    </div>
  );
};

export default Shop;
