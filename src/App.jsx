import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Landing from "./layout/Landing";
import useLocation from "./hooks/useLocation";
import getForecast from "./api/getForecast";

function App() {
  const dispatch = useDispatch();
  const location = useLocation();
  const { units, pending, error } = useSelector((state) => state.forecast);

  useEffect(() => {
    getForecast({ ...location.coordinates }, dispatch, units);
  }, [dispatch]);

  if (pending) {
    return <h1>Loading</h1>;
  }
  if (error) {
    return <h1>Oops.. Something went wrong..</h1>;
  }
  return (
    <div className="App text-white relative">
      <Landing />
    </div>
  );
}

export default App;
