import "./App.css";
import { useEffect, useState } from "react";
import Buttons from "./components/Buttons";
import WeatherView from "./components/WeatherView";
import { Oval } from "react-loader-spinner";
function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState("");
  const [loading, setLoading] = useState(false);
  const citys = ["Hangkou", "Japan", "Guamka"];
  const APIkey = "317050bb7707e7e15c22371a3d12cf23";

  const getCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      let lon = position.coords.longitude;
      let lat = position.coords.latitude;
      getLocationweather(lon, lat);
    });
  };

  const getLocationweather = async (lon, lat) => {
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIkey}&units=metric`;
    setLoading(true);
    const response = await fetch(url);
    let data = await response.json();
    console.log(data);
    setWeatherData(data);
    setLoading(false);
  };

  const getWeatherByCity = async (cityname) => {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=${APIkey}&units=metric`;
    setLoading(true);
    const response = await fetch(url);
    let data = await response.json();
    console.log(data);
    setWeatherData(data);
    setLoading(false);
  };

  useEffect(() => {
    if (city == "") {
      getCurrentLocation();
    } else {
      getWeatherByCity(city);
    }
  }, [city]);

  // useEffect(() => {
  //   //컴포넌트did업데이트역할을함
  // getWeatherByCity(city);
  // }, [city]);
  return (
    <>
      {loading ? (
        <Oval
          visible={loading}
          height="80"
          width="80"
          color="#4fa94d"
          ariaLabel="oval-loading"
          wrapperStyle={{}}
          wrapperClass=""
        />
      ) : (
        <div className="main">
          <WeatherView weatherData={weatherData} />
        </div>
      )}

      <div>
        <Buttons citys={citys} setCity={setCity} />
      </div>
    </>
  );
}

export default App;
