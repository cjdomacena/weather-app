import {
  getLocationStart,
  getLocationSucess,
  getLocationError,
} from "../redux/locationSlice";

const getLocationName = async ({ ...props }, dispatch) => {
  const baseURL = "http://api.openweathermap.org/geo/1.0/";
  dispatch(getLocationStart());
  try {
    const req = await fetch(
      `${baseURL}/reverse?lat=${props.lat}&lon=${props.lon}&limit=5&appid=${process.env.REACT_APP_OPEN_WEATHER}`
    );

    const res = await req.json();
    dispatch(getLocationSucess(res));
  } catch (error) {
    dispatch(getLocationError());
  }
};

export default getLocationName;
