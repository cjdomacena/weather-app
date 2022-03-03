import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Landing from "./layout/Landing";
import useLocation from "./hooks/useLocation";
import getForecast from "./api/getForecast";

function App() {
  const dispatch = useDispatch();
  const location = useLocation();
  useEffect(() => {
    getForecast({ ...location.coordinates }, dispatch);
  }, []);
  return (
    <div className="App text-white">
      <Landing />
    </div>
  );
}

export default App;
