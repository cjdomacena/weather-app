import { useSelector } from "react-redux";
import WeatherCard from "../components/cards/WeatherCard";

function WeatherCardGrid() {
  const { data } = useSelector((state) => state.forecast);

  return (
    <div className="w-full grid grid-cols-[repeat(auto-fit,minmax(144px,1fr))] gap-8">
      {data.daily &&
        data.daily.map((weatherInfo, index) =>
          index > 0 && index < 6 ? (
            // eslint-disable-next-line react/no-array-index-key
            <WeatherCard key={index} props={weatherInfo} />
          ) : (
            ""
          )
        )}
    </div>
  );
}

export default WeatherCardGrid;
