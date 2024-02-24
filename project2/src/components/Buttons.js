import React from "react";
import "./Buttons.css";
import uuid from "react-uuid";
const Buttons = ({ citys, setCity }) => {
  console.log(citys);
  return (
    <div className="btns">
      <button>current Location</button>
      {citys.map((item, index) => (
        <button key={uuid()} onClick={() => setCity(item)}>
          {item}
        </button>
      ))}
    </div>
  );
};

export default Buttons;
