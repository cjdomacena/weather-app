import { useDispatch, useSelector } from "react-redux";
import getForecast from "../../api/getForecast";
import { getUnits } from "../../redux/weatherSlice";

export default function TempButtons() {
  const { data, units } = useSelector((state) => state.forecast);
  const dispatch = useDispatch();

  function changeUnit(unit) {
    dispatch(getUnits(unit));
    getForecast({ lat: data.lat, lon: data.lon }, dispatch, unit);
  }

  return (
    <>
      {console.log("rendered")}
      <button
        className={` h-12 w-12 ${
          units === "metric"
            ? "bg-slate-100 text-slate-900"
            : "bg-slate-400 text-slate-900"
        } rounded-full grid place-items-center transition-colors`}
        type="button"
        onClick={() => changeUnit("metric")}
      >
        <h2 className="font-bold text-xl mr-1 text-slate-900">°C</h2>
      </button>
      <button
        className={` h-12 w-12 ${
          units !== "metric"
            ? "bg-slate-100 text-slate-900"
            : "bg-slate-400 text-slate-900"
        } rounded-full grid place-items-center transition-colors`}
        type="button"
        onClick={() => changeUnit("imperial")}
      >
        <h2 className="font-bold text-xl mr-1 text-slate-900">°F</h2>
      </button>
    </>
  );
}
