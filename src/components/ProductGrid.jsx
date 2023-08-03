import React, { useState, useEffect } from "react";
import Product from "./Product";
import productsData from "../products.json";
import Filter from "./Filter";
import ProductCounter from "./ProductCounter";
import "./grid.css";
import "./counter.css";

function ProductGrid({ category }) {
  const [products, setProducts] = useState([]);
  const [displayedProducts, setDisplayedProducts] = useState([]);
  const [displayedNumber, setDisplayedNumber] = useState(10);
  const [isFilteredByDiscount, setIsFilteredByDiscount] = useState(false);
  const [minPriceFilter, setMinPriceFilter] = useState(0);
  const [maxPriceFilter, setMaxPriceFilter] = useState(2000);
  const [sortType, setSortType] = useState("");

  useEffect(() => {
    if (isFilteredByDiscount) {
      const filteredProducts = productsData[category].filter((product) => {
        return (
          product.discounted &&
          product.newPrice >= minPriceFilter &&
          product.newPrice <= maxPriceFilter
        );
      });

      setProducts(filteredProducts);
    } else {
      const filtered = productsData[category].filter((product) => {
        const activePrice = product.newPrice ? product.newPrice : product.price;

        return activePrice >= minPriceFilter && activePrice <= maxPriceFilter;
      });

      setProducts(filtered);
    }
  }, [isFilteredByDiscount, minPriceFilter, maxPriceFilter, displayedNumber]);

  // Setting the products list on page load
  useEffect(() => {
    setProducts(productsData[category]);
    setSortType("a-Z");
  }, []);

  // Clearing sorts, filters and number of displayed products on category change
  useEffect(() => {
    setProducts(productsData[category]);
    setSortType("a-Z");
    setDisplayedNumber(10);
    setIsFilteredByDiscount(false);
    setMinPriceFilter(0);
    setMaxPriceFilter(2000);
  }, [category]);

  // Displaying only a part of the total products list
  useEffect(() => {
    if (displayedNumber > products.length) {
      setDisplayedProducts([...products]);
    } else {
      const sliced = products.slice(0, displayedNumber);
      setDisplayedProducts(sliced);
    }
  }, [products, displayedNumber]);

  //Applying the selected sort type even after filtering or adding new products.
  useEffect(() => {
    if (sortType === "Price Up") {
      setDisplayedProducts((prevDisplayedProducts) =>
        [...prevDisplayedProducts].sort(
          (a, b) => (a.newPrice || a.price) - (b.newPrice || b.price)
        )
      );
    } else if (sortType === "Price Down") {
      setDisplayedProducts((prevDisplayedProducts) =>
        [...prevDisplayedProducts].sort(
          (a, b) => (b.newPrice || b.price) - (a.newPrice || a.price)
        )
      );
    } else if (sortType === "a-Z") {
      setDisplayedProducts((prevDisplayedProducts) =>
        [...prevDisplayedProducts].sort((a, b) =>
          a.model.localeCompare(b.model)
        )
      );
    } else if (sortType === "z-A") {
      setDisplayedProducts((prevDisplayedProducts) =>
        [...prevDisplayedProducts].sort((a, b) =>
          b.model.localeCompare(a.model)
        )
      );
    }
  }, [sortType, displayedNumber, products]);

  return (
    <>
      <ProductCounter
        category={category}
        activeSort={sortType}
        setActiveSort={setSortType}
        count={
          displayedNumber > products.length ? products.length : displayedNumber
        }
        total={products.length}
      />
      <Filter
        category={category}
        setMaxPrice={setMaxPriceFilter}
        setMinPrice={setMinPriceFilter}
        setDiscount={setIsFilteredByDiscount}
      />
      <section id="product-grid">
        {displayedProducts.map((product, index) => {
          return (
            <Product
              model={product.model}
              price={product.price}
              brand={product.brand}
              image={product.image}
              rating={product.rating}
              newPrice={product.newPrice}
              discounted={product.discounted}
              key={product.model + product.price.toString()}
            />
          );
        })}
      </section>
      <div className="load-button-container">
        <button
          onClick={() => {
            setDisplayedNumber(displayedNumber + 10);
          }}
          style={{
            display: displayedNumber < products.length ? "block" : "none",
          }}
          className="load-button"
        >
          Show More
        </button>
      </div>
    </>
  );
}

export default ProductGrid;
