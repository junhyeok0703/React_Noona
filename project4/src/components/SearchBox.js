import React from "react";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import Form from "react-bootstrap/esm/Form";

const SearchBox = () => {
  return (
    <Row>
      <Col lg={10}>
        <Form.Control type="text" placeholder="이름입력하기" />
      </Col>
      <Col lg={2}>
        <button>찾기</button>
      </Col>
    </Row>
  );
};

export default SearchBox;
