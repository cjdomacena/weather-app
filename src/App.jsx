import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Landing from "./layout/Landing";
import useLocation from "./hooks/useLocation";
import getForecast from "./api/getForecast";

function App() {
  const dispatch = useDispatch();
  const location = useLocation();
  const { units } = useSelector((state) => state.forecast);

  useEffect(() => {
    getForecast({ ...location.coordinates }, dispatch, units);
  }, []);
  return (
    <div className="App text-white relative">
      <Landing />
    </div>
  );
}

export default App;
