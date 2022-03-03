import WeatherCard from "../components/cards/WeatherCard";

function WeatherCardGrid() {
  return (
    <div className="w-full grid grid-cols-[repeat(auto-fit,minmax(144px,1fr))] gap-8">
      <WeatherCard />
      <WeatherCard />
      <WeatherCard />
      <WeatherCard />
      <WeatherCard />
    </div>
  );
}

export default WeatherCardGrid;
