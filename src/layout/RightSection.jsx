import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import TempButtons from "../components/buttons/TempButtons";
import LargeCard from "../components/cards/LargeCard";
import { getUnits } from "../redux/weatherSlice";
import WeatherCardGrid from "./WeatherCardGrid";

function RightSection() {
  const [isCelcius, setIsCelsius] = useState(true);
  const { data, units } = useSelector((state) => state.forecast);
  const dispatch = useDispatch();
  function changeUnits(currentUnit) {
    // eslint-disable-next-line no-unneeded-ternary
    setIsCelsius(currentUnit === "metric" ? true : false);
    dispatch(getUnits());
  }

  return (
    <section className="xl:w-3/4 lg:w-3/4 md:screen sm:w-screen xs:w-screen min-h-screen">
      <div className="m-4 p-4 flex justify-end gap-4 items-center">
        <button
          type="button"
          onClick={() => {
            changeUnits(units);
          }}
        >
          <TempButtons isActive={isCelcius && true} tempType="celsius" />
        </button>
        <button
          type="button"
          onClick={() => {
            changeUnits(units);
          }}
        >
          <TempButtons isActive={!isCelcius && true} tempType="farenheit" />
        </button>
      </div>
      <div className="w-10/12 mx-auto">
        <div>
          <WeatherCardGrid />
        </div>
        <div className="mt-24">
          <h1 className="py-4 font-medium">Today&apos;s Highlight</h1>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-8">
            <LargeCard title="Wind status" data={data.current} />
            <LargeCard title="Humidity" data={data.current} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default RightSection;
