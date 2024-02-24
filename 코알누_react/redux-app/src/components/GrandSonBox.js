import React from "react";
import { useSelector } from "react-redux";

const GrandSonBox = () => {
  let cnt = useSelector((state) => state.cnt);
  return <div>여기는 그랜드썬박스임{cnt}</div>;
};

export default GrandSonBox;
