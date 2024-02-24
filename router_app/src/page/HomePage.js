import React from "react";
import { Link, useNavigate } from "react-router-dom";
const HomePage = () => {
  const navigate = useNavigate();
  const goProductPage = () => {
    navigate("/products?q=pants&page=3");
  };
  return (
    <div>
      <h1>HomePage</h1>
      <Link to="/about">Go to about Page </Link>
      <button onClick={goProductPage}>go to product page</button>
    </div>
  );
};

export default HomePage;