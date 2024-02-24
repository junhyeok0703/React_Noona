import React from "react";
import { useState, useEffect } from "react";
import Productitem from "../components/Productitem";
import { Container, Row, Col } from "react-bootstrap";
import { v4 as uuidv4 } from "uuid";

import { useSearchParams } from "react-router-dom";
const ProductAll = () => {
  const [products, setProducts] = useState([]);
  const [query, setQuery] = useSearchParams();

  const getProducts = async () => {
    let searchQuery = query.get("q") || ""; //
    console.log("쿼리값 ?  ", searchQuery);
    let url = `http://localhost:3004/products?q=${searchQuery}`;
    let response = await fetch(url);
    let data = await response.json();
    console.log(data);
    setProducts(data);
  };
  useEffect(() => {
    getProducts();
  }, [query]);
  return (
    <div>
      <Container>
        <Row>
          {products &&
            products.map((item) => (
              <Col lg={3} key={uuidv4()}>
                <Productitem item={item} />
              </Col>
            ))}
        </Row>
      </Container>
    </div>
  );
};

export default ProductAll;
