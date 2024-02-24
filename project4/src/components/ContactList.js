import React from "react";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import { useSelector } from "react-redux";
import ContactItem from "./ContactItem";
import SearchBox from "./SearchBox";

const ContactList = () => {
  const contactList = useSelector((state) => state.contactList);

  return (
    <div>
      <SearchBox />
      {contactList.map((item, index) => {
        <ContactItem item={item} key={index} />;
      })}
    </div>
  );
};

export default ContactList;
