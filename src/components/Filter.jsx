import React, { useEffect, useRef } from "react";
import "./filter.css";

function Filter({ category, setMinPrice, setMaxPrice, setDiscount }) {
  const discountRef = useRef();
  const minPriceRef = useRef();
  const maxPriceRef = useRef();

  //Clearing filters on category change
  useEffect(() => {
    discountRef.current.checked = false;
    minPriceRef.current.value = null;
    maxPriceRef.current.value = null;
  }, [category]);

  return (
    <div className="filter">
      <h4>Filter : </h4>
      <div className="filters-container">
        <label id="discountedLabel">
          <input ref={discountRef} type="checkbox" id="discountedFilter" />
          Discounted products
        </label>

        <div className="range-container">
          <label id="min-label">
            <input placeholder="Min price" id="min-price" ref={minPriceRef} />
          </label>
          <label id="max-label">
            <input placeholder="Max price" id="max-price" ref={maxPriceRef} />
          </label>
        </div>

        <div className="button-container">
          <button
            onClick={() => {
              //Clear all filters + the inputs' values
              setDiscount(false);
              setMinPrice(0);
              setMaxPrice(2000);
              discountRef.current.checked = false;
              minPriceRef.current.value = null;
              maxPriceRef.current.value = null;
            }}
          >
            Clear All
          </button>

          <button
            onClick={() => {
              //Resetting the filter value if no value is given
              if (discountRef.current.checked) {
                setDiscount(true);
              } else {
                setDiscount(false);
              }

              if (minPriceRef.current.value) {
                setMinPrice(minPriceRef.current.value);
              } else {
                setMinPrice(0);
              }

              if (maxPriceRef.current.value) {
                setMaxPrice(maxPriceRef.current.value);
              } else {
                setMaxPrice(2000);
              }
            }}
          >
            Apply
          </button>
        </div>
      </div>
    </div>
  );
}

export default Filter;
