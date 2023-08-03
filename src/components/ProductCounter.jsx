import React, { useState, useRef } from "react";
import "./counter.css";

function ProductCounter({ count, total, activeSort, setActiveSort, category }) {
  const [dropdownActive, setDropdownActive] = useState(false);

  const arrowRef = useRef();
  const containerRef = useRef();
  const dropdownRef = useRef();

  //Resetting the arrow and hiding the dropdown on selected sort type
  function handleSortSelect(value) {
    setActiveSort(value);
    arrowRef.current.classList.remove("flipped");
    setDropdownActive(false);
  }

  return (
    <div ref={containerRef} id="product-counter">
      <h3 className="active-category">{category}</h3>
      <span className="count">
        {count} out of {total}
      </span>
      <div className="sort-dropdown">
        <span className="sort-by">Sort by:</span>
        <span className="active-sort">{activeSort}</span>
        <img
          onClick={() => {
            //Hiding or showing dropdown on arrow click
            if (dropdownActive) {
              arrowRef.current.classList.remove("flipped");
              setDropdownActive(false);
            } else {
              arrowRef.current.classList.add("flipped");
              setDropdownActive(true);
            }
          }}
          ref={arrowRef}
          className="dropdown-arrow"
          src="./arrow.svg"
          alt="arrow"
        />
        <div
          style={{ visibility: dropdownActive ? "visible" : "hidden" }}
          ref={dropdownRef}
          className="dropdown-menu"
        >
          <span
            onClick={() => {
              handleSortSelect("a-Z");
            }}
            className={
              activeSort == "a-Z" ? "active dropdown-item" : "dropdown-item"
            }
          >
            a-Z
          </span>
          <span
            onClick={() => {
              handleSortSelect("z-A");
            }}
            className={
              activeSort == "z-A" ? "active dropdown-item" : "dropdown-item"
            }
          >
            z-A
          </span>
          <span
            onClick={() => {
              handleSortSelect("Price Up");
            }}
            className={
              activeSort == "Price Up"
                ? "active dropdown-item"
                : "dropdown-item"
            }
          >
            Price Up
          </span>
          <span
            onClick={() => {
              handleSortSelect("Price Down");
            }}
            className={
              activeSort == "Price Down"
                ? "active dropdown-item"
                : "dropdown-item"
            }
          >
            Price Down
          </span>
        </div>
      </div>
    </div>
  );
}

export default ProductCounter;
