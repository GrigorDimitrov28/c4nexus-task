import React, { useEffect, useRef } from "react";
import "./product.css";

function Product({ model, brand, price, image, rating, discounted, newPrice }) {
  const starOneRef = useRef();
  const starTwoRef = useRef();
  const starThreeRef = useRef();
  const starFourRef = useRef();
  const starFiveRef = useRef();

  useEffect(() => {
    starOneRef.current.innerHTML =
      rating && rating >= 1 ? "&#9733;" : "&#9734;";
    starTwoRef.current.innerHTML =
      rating && rating >= 2 ? "&#9733;" : "&#9734;";
    starThreeRef.current.innerHTML =
      rating && rating >= 3 ? "&#9733;" : "&#9734;";
    starFourRef.current.innerHTML =
      rating && rating >= 4 ? "&#9733;" : "&#9734;";
    starFiveRef.current.innerHTML =
      rating && rating == 5 ? "&#9733;" : "&#9734;";
  }, [rating]);

  return (
    <div className="product">
      <div className="rating">
        <span ref={starOneRef} class="rating-star"></span>
        <span ref={starTwoRef} class="rating-star"></span>
        <span ref={starThreeRef} class="rating-star"></span>
        <span ref={starFourRef} class="rating-star"></span>
        <span ref={starFiveRef} class="rating-star"></span>
      </div>
      <img
        onClick={() => {
          // Success alert for adding a product to the cart
          const success = document.getElementById("success");
          success.style.animation = "show-success 0.5s forwards";
          setTimeout(() => {
            success.style.animation = "hide-success 0s forwards";
          }, 2000);
        }}
        src="./cart.svg"
        alt="cart"
        className="cart"
      />
      <img className="thumbnail" src={image} alt="product thumbnail" />
      <h4 className="product-name">{model}</h4>
      <span className="product-brand">
        By: <span className="brand-name">{brand}</span>
      </span>
      <span className="product-price">
        Price:{" "}
        <span className="price-value">
          <span
            className={discounted ? "slashed original-price" : "original-price"}
          >
            ${price}
          </span>
          <span
            style={{ display: newPrice ? "inline" : "none" }}
            className="discounted-price"
          >
            ${newPrice}
          </span>
        </span>
      </span>
    </div>
  );
}

export default React.memo(Product);
