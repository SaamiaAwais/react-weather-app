import { useState } from "react";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';

function App() {

  const [cityName, setCityName] = useState("")
  const [Temperature, setTemperature] = useState(0)

  async function checkWeather(e) {
    e.preventDefault();
    console.log(cityName)
    // fetch()
    const weatherResponse = await fetch(
      `https://P2pclouds.up.railway.app/v1/learn/weather?city=${cityName}`
    );

    const weather = await weatherResponse.json();
    console.log(weather);

    setTemperature(weather.current.temp_c);
  }

  function onCityNameChange(e) {
    console.log(e.target.value)
    setCityName(e.target.value)
  }


  return (
    <div className="App">

      <form onSubmit={checkWeather}>
        <h1>Hey There!
Check weather around you🌦️</h1>
        <input type="text" placeholder="Enter city name" name="cityName" onChange={onCityNameChange} className="inp" />

        <Button as="input" type="submit" value="Check" variant="info"  />

        <p className="temperature">Current Temperature of {cityName} is {Temperature}
        </p>
      </form>

    </div>
  );
}

export default App;
