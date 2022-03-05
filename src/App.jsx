import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Landing from "./layout/Landing";
import useLocation from "./hooks/useLocation";
import getForecast from "./api/getForecast";

function App() {
  const dispatch = useDispatch();
  const location = useLocation();
  const { units, pending } = useSelector((state) => state.forecast);

  useEffect(() => {
    getForecast({ ...location.coordinates }, dispatch, units);
  }, [units]);
  return (
    <div className="App text-white relative">
      <Landing />
      {pending && (
        <div className="absolute w-full h-full top-0 left-0 bg-slate-900" />
      )}
    </div>
  );
}

export default App;
