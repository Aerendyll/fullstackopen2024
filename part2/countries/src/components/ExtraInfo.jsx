import React, { useEffect, useState } from "react";
import countryService from "../services/countryService";


//URL DE ICONO https://openweathermap.org/img/wn/02n@2x.png 02N es su ____ 
const ExtraInfo = ({ country }) => {
  const [weatherData, setWeatherData] = useState(null);
  const [lat, setLat] = useState(country.latlng[0]);
  const [lng, setLng] = useState(country.latlng[1]);
  
  useEffect(() => {
    countryService
      .getWeather(lat, lng)
      .then((response) => {
        setWeatherData(response.data);
      })
      .catch((error) => {
        console.log("error", error);
      });
  }, [lat, lng]);

  const kelvinToCelsius = (temp) => {
    return temp - 273,15 
  }
  const imagen = () => {
    return  `https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`
  }
  return (
    <div>
      <h2>{country.name.common}</h2>
      <p>Capital: {country.capital[0]}</p>
      <p>Area: {country.area} km²</p>
      <h2>Languages:</h2>
      <ul>
        {Object.values(country.languages).map((language, index) => (
          <li key={index}>{language}</li>
        ))}
      </ul>
      {weatherData && (
        <div>
          <h2>Weather in {country.capital[0]}</h2>
          <p>Temperature: {kelvinToCelsius(weatherData.main.temp) }°C</p>
          <p>Weather description: {weatherData.weather[0].description}</p>
          <p>Wind: {weatherData.wind.speed} Km/h</p>
          
          <img src={imagen()} alt="img" />
          
        </div>
      )}
      <img src={country.flags.png} alt="Flag" style={{ width: "100px" }} />
    </div>
  );
};

export default ExtraInfo;
