import React from "react";
import "./weatherView.css";
import LocationWeatherId from "../city.list.json";
const WeatherView = ({ weatherData }) => {
  return (
    <>
      <div className="weather-container">
        <div className="weather-info">
          <h5>{weatherData?.name} </h5>
          {/* 초기값이 null이기때문에 ui렌더되고나서 state를 반영하기 떄문에
          뭘 넣어줘야할지 모르겠음 아니면 app.js에서  weatherData?이거나weatherData && weatherData.name*/}
          <h3>
            {weatherData?.main.temp}/{weatherData?.main.temp * 1.8 + 32}
          </h3>
          <p>{weatherData?.weather[0].description}</p>
        </div>
      </div>
    </>
  );
};

export default WeatherView;
