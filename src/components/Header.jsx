import React, { useRef } from "react";
import "./header.css";

function Header({ activeCategory, setCategory }) {
  const categoryRef = useRef();
  return (
    <header>
      <img id="logo" src="./5.svg" alt="deer logo image" />

      <img
        //Bringing the "Category" menu into view
        onClick={() => {
          categoryRef.current.style.animation =
            "show-category 0.3s linear forwards";
        }}
        id="burger-menu"
        src="./burger-menu-svgrepo-com.svg"
        alt="burger-menu"
      />
      <div ref={categoryRef} id="category-menu">
        <img
          onClick={() => {
            categoryRef.current.style.animation =
              "hide-category 0.3s linear forwards";
          }}
          src="./x-symbol-svgrepo-com.svg"
          alt="X image"
        />

        <h3>Categories</h3>

        <ul className="category-list">
          <li
            onClick={() => {
              setCategory("Rings");
              categoryRef.current.style.animation =
                "hide-category 0.3s linear forwards";
            }}
            className={
              activeCategory == "Rings" ? "selected category" : "category"
            }
          >
            Rings
          </li>
          <li
            onClick={() => {
              setCategory("Bracelets");
              categoryRef.current.style.animation =
                "hide-category 0.3s linear forwards";
            }}
            className={
              activeCategory == "Bracelets" ? "selected category" : "category"
            }
          >
            Bracelets
          </li>
          <li
            onClick={() => {
              setCategory("Necklaces");
              categoryRef.current.style.animation =
                "hide-category 0.3s linear forwards";
            }}
            className={
              activeCategory == "Necklaces" ? "selected category" : "category"
            }
          >
            Necklaces
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
