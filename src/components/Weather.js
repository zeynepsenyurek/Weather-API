import styles from "./Weather.module.css";

const Weather = (props) => {
  const { weather } = props;

  if (!weather) {
    return <p>Loading...</p>;
  }

  return (
    <div className={styles.container}>
      <h3>Location: {weather.name}</h3>
      <h5>{weather.weather.map((data) => data.description).join(",")}</h5>
      <p>Temperature: {weather.main.temp}°C </p>
      <p>Date: {new Date(weather.dt * 1000).toLocaleDateString()}</p>
    </div>
  );
};

export default Weather;
