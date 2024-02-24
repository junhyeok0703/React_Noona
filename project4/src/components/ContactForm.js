import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useDispatch } from "react-redux";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [phoneNum, setPhoneNum] = useState(0);
  const dispatch = useDispatch();
  const addContact = (e) => {
    e.preventDefault();
    dispatch({
      type: "ADD_CONTACT",
      payload: { name, phoneNum },
    });
    setName("");
    setPhoneNum("");
  };
  return (
    <Form onSubmit={(e) => addContact(e)}>
      <Form.Group className="mb-3" controlId="formName">
        <Form.Label>이름</Form.Label>
        <Form.Control
          type="text"
          placeholder="이름입력하기"
          onChange={(e) => setName(e.target.value)}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formContact">
        <Form.Label>전화번호</Form.Label>
        <Form.Control
          type="text"
          placeholder="전화번호를 입력해주세요."
          onChange={(e) => setPhoneNum(e.target.value)}
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        추가
      </Button>
    </Form>
  );
};

export default ContactForm;
