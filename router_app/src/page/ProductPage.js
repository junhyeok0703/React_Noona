import React from "react";
import { useSearchParams } from "react-router-dom";
const ProductPage = () => {
  const [query, setQuery] = useSearchParams();
  // console.log(query.get("q"));
  console.log(query.get("page"));
  return (
    <div>
      <h1>SHOW ALL PRODUCT</h1>
    </div>
  );
};

export default ProductPage;
