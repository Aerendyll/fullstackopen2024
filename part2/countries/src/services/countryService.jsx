import axios from "axios";


const getAll = () => {
  const apiUrl = "https://studies.cs.helsinki.fi/restcountries/api/all";
  return axios.get(apiUrl);
};

const getWeather = (lat,lng) => {
  const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=7ee9a0d70b8d66e89716f6107bdd810b`;

  return axios.get(weatherUrl)
}
export default { getAll , getWeather};




