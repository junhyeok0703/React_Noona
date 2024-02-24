import React from "react";
import { useNavigate } from "react-router-dom";
const AboutPage = () => {
  const navigate = useNavigate();
  const goToHomepage = () => {
    navigate("/");
  };
  return (
    <div>
      <h1>About Page</h1>
      <button onClick={goToHomepage}>go to homepage</button>
    </div>
  );
};

export default AboutPage;
