import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Landing from "./layout/Landing";
import useLocation from "./hooks/useLocation";
import getForecast from "./api/getForecast";
import getLocationName from "./api/getLocationName";

function App() {
  const dispatch = useDispatch();
  const location = useLocation();
  const { units, error } = useSelector((state) => state.forecast);

  useEffect(() => {
    getForecast({ ...location.coordinates }, dispatch, units);
    getLocationName({ ...location.coordinates }, dispatch);
  }, [dispatch]);

  if (error) {
    return (
      <div className="w-full h-screen grid place-items-center text-center">
        <h1 className="text-slate-100 text-2xl font-medium">
          Oops.. Something went wrong.. Try to refresh the page.
        </h1>
      </div>
    );
  }
  return (
    <div className="App text-white relative">
      <Landing />
    </div>
  );
}

export default App;
