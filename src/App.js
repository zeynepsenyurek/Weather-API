import axios from "axios";
import { useEffect, useState } from "react";
import { usePosition } from "use-position";
import Weather from "./components/Weather";
import styles from "./components/Weather.module.css";

function App() {
  const [weather, setWeather] = useState();
  const { latitude, longitude } = usePosition();

  const getWeatherData = async (lat, lon) => {
    const key = process.env.REACT_APP_WEATHER_API_KEY;
    const { data } = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}&units=metric`
    );
    setWeather(data);
  };

  useEffect(() => {
    latitude && longitude && getWeatherData(latitude, longitude);
  }, [latitude, longitude]);

  return (
    <div className={styles.card}>
      <h2>Weather</h2>
      <Weather weather={weather} />
    </div>
  );
}

export default App;
