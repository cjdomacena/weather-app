const axios = require("axios").default;

const baseUrl = "https://www.metaweather.com/api";

async function getWeather(query) {
  const res = { statusCode: 404, message: "Something went wrong..." };
  try {
    const req = axios.get(`${baseUrl}/search/?query=${query}`);
  } catch (error) {
    res.statusCode = error.code;
    res.message = error.message;
  }
}

export default getWeather;
