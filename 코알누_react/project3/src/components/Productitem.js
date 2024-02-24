import React from "react";
import { useNavigate } from "react-router-dom";
const Productitem = ({ item }) => {
  const navigate = useNavigate();
  const showDetail = () => {
    navigate(`/Product/${item.id}`);
  };

  return (
    <div className="card-border" onClick={showDetail}>
      <img src={item?.img} width={250} height={300}></img>
      <p>{item?.title}</p>
      <p>{item?.price}</p>
      <p>{item?.new === true ? "신제품" : ""}</p>
    </div>
  );
};

export default Productitem;
