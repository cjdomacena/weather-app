import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Landing from "./layout/Landing";
import useLocation from "./hooks/useLocation";
import getForecast from "./api/getForecast";
import getLocationName from "./api/getLocationName";

function App() {
  const dispatch = useDispatch();
  const location = useLocation();
  const { units } = useSelector((state) => state.forecast);

  useEffect(() => {
    getForecast({ ...location.coordinates }, dispatch, units);
    getLocationName({ ...location.coordinates }, dispatch);
  }, []);
  return (
    <div className="App text-white relative">
      <Landing />
    </div>
  );
}

export default App;
