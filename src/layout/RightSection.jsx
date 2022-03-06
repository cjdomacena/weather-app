import { useSelector } from "react-redux";
import TempButtons from "../components/buttons/TempButtons";
import LargeCard from "../components/cards/LargeCard";
import SmallCard from "../components/cards/SmallCard";
import WeatherCardGrid from "./WeatherCardGrid";

function RightSection() {
  const { data } = useSelector((state) => state.forecast);

  return (
    <section className="xl:w-3/4 lg:w-3/4 md:screen sm:w-screen xs:w-screen min-h-screen">
      <div className="p-4 flex justify-end gap-4 items-center">
        <TempButtons />
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
