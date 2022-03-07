import {
  getLocationStart,
  getLocationSucess,
  getLocationError,
  getSearchSuccess,
} from "../redux/locationSlice";

const baseURL = "http://api.openweathermap.org/geo/1.0";
const getLocationName = async ({ ...props }, dispatch) => {
  dispatch(getLocationStart());
  try {
    const req = await fetch(
      `${baseURL}/reverse?lat=${props.lat}&lon=${props.lon}&limit=5&appid=${process.env.REACT_APP_OPEN_WEATHER}`
    );
    const res = await req.json();
    dispatch(getLocationSucess({ res }));
  } catch (error) {
    dispatch(getLocationError());
  }
};

export const getLocationByName = async (name, dispatch) => {
  dispatch(getLocationStart());
  try {
    if (name.length > 2) {
      const req = await fetch(
        `${baseURL}/direct?q=${name},us&limit=5&appid=${process.env.REACT_APP_OPEN_WEATHER}`
      );
      const res = await req.json();
      dispatch(getSearchSuccess(res));
    } else {
      dispatch(getSearchSuccess([]));
    }
  } catch (error) {
    dispatch(getLocationError());
  }
};

export default getLocationName;
