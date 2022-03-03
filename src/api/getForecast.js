/* eslint-disable no-unused-vars */
import {
  getForecastStart,
  getForecastSuccess,
  getForecastError,
} from "../redux/weatherSlice";

const getForecast = async ({ ...props }, dispatch) => {
  console.log(props);
  const baseURL = "https://api.openweathermap.org/data/2.5/onecall";
  dispatch(getForecastStart());
  try {
    const req = await fetch(
      `${baseURL}?lat=${props.lat}&lon=${props.lon}&exclude=hourly,alerts,minutely&appid=${process.env.REACT_APP_OPEN_WEATHER}`
    );
    const res = await req.json();
    dispatch(getForecastSuccess(res));
  } catch (error) {
    dispatch(getForecastError());
  }
};

export default getForecast;
