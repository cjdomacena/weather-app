import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import getForecast from "../api/getForecast";
import TempButtons from "../components/buttons/TempButtons";
import LargeCard from "../components/cards/LargeCard";
import SmallCard from "../components/cards/SmallCard";
import { getUnits } from "../redux/weatherSlice";
import WeatherCardGrid from "./WeatherCardGrid";

function RightSection() {
  const [isCelcius, setIsCelsius] = useState(true);
  const { data } = useSelector((state) => state.forecast);

  const dispatch = useDispatch();
  function changeUnits(unit) {
    // eslint-disable-next-line no-unneeded-ternary
    setIsCelsius(unit === "metric" ? true : false);
    dispatch(getUnits(unit));
    getForecast({ lat: data.lat, lon: data.lon }, dispatch, unit);
  }

  return (
    <section className="xl:w-3/4 lg:w-3/4 md:screen sm:w-screen xs:w-screen min-h-screen">
      <div className="p-4 flex justify-end gap-4 items-center">
        <button
          type="button"
          onClick={() => {
            changeUnits("metric");
          }}
        >
          <TempButtons isActive={isCelcius && true} tempType="celsius" />
        </button>
        <button
          type="button"
          onClick={() => {
            changeUnits("imperial");
          }}
        >
          <TempButtons isActive={!isCelcius && true} tempType="farenheit" />
        </button>
      </div>
      <div className="w-10/12 mx-auto">
        <div>
          <h1 className="text-medium font-medium mb-4">Next 5 days</h1>
          <WeatherCardGrid />
        </div>
        <div className="mt-8">
          <h1 className="py-4 font-medium">Today&apos;s Highlight</h1>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-8">
            <LargeCard title="Wind status" data={data.current} />
            <LargeCard title="Humidity" data={data.current} />
          </div>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-8 mt-4">
            <SmallCard title="Visibility" />
            <SmallCard title="Air Pressure" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default RightSection;
