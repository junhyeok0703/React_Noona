import React from "react";
import { v4 as uuidv4 } from "uuid";
import { useParams } from "react-router-dom";

import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
const ProductDetail = () => {
  const [viewDetail, setViewDetail] = useState(null);
  let { id } = useParams();
  const getProductDetail = async () => {
    let url = `http://localhost:3004/products/${id}`;
    let response = await fetch(url);
    let data = await response.json();
    console.log(data);
    setViewDetail(data);
  };

  useEffect(() => {
    getProductDetail();
  }, []);

  return (
    <div>
      <Container>
        <Row>
          <Col lg={6} className="product-img">
            <img src={viewDetail?.img}></img>
          </Col>
          <Col lg={6}>
            <p>{viewDetail?.title}</p>
            <p>{viewDetail?.price}</p>
            {/* <select>
            {viewDetail?.size.map((item, index) => {
              <option value={index + 1} key={uuidv4}>
                {item}
              </option>;
            })}
          </select> */}
            <button>추가</button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ProductDetail;
