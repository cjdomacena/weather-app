import {
  getForecastStart,
  getForecastSuccess,
  getForecastError,
} from "../redux/weatherSlice";

const getForecast = async ({ ...props }, dispatch, unit) => {
  const baseURL = "https://api.openweathermap.org/data/2.5/onecall";
  dispatch(getForecastStart());
  try {
    const req = await fetch(
      `${baseURL}?lat=${props.lat}&lon=${props.lon}&exclude=hourly,alerts,minutely&units=${unit}&appid=${process.env.REACT_APP_OPEN_WEATHER}`
    );
    const res = await req.json();
    setTimeout(() => {
      dispatch(getForecastSuccess(res));
    }, 1000);
  } catch (error) {
    dispatch(getForecastError());
  }
};

export default getForecast;
