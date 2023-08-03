import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import ProductGrid from "./components/ProductGrid";
import Footer from "./components/Footer";

function App() {
  const [category, setCategory] = useState("Rings");
  return (
    <>
      <div id="success" className="success">
        &#10004; Added to cart!
      </div>
      <Header activeCategory={category} setCategory={setCategory} />
      <ProductGrid category={category} />
      <Footer />
    </>
  );
}

export default App;
