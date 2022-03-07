import { useSelector } from "react-redux";
// import cloudBG from "../assets/img/Cloud-background.png";

import SearchBar from "../components/search/SearchBar";

function LeftSection() {
  const { data, units, pending } = useSelector((state) => state.forecast);
  const { pending: locPending, data: locData } = useSelector(
    (state) => state.location
  );

  if (pending || locPending) {
    <section className="xl:w-1/4 lg:w-1/4 md:screen sm:w-screen xs:w-screen shadow bg-slate-900 relative p-4">
      <Loader />
    </section>;
  }
  return (
    <section className="xl:w-1/4 lg:w-1/4 md:screen sm:w-screen xs:w-screen shadow bg-slate-900 relative p-4">
      <div className="h-auto absolute top-8 left-0 z-40 bg-slate-800 p-2  rounded w-11/12 right-0 mx-auto">
        <SearchBar />
      </div>
      {data.current && (
        <div className=" h-[680px] mt-24 relative pt-8">
          <div className="flex flex-col items-center gap-y-24 px-8 h-96 justify-between">
            <div className="text-center">
              <img
                src={`https://openweathermap.org/img/wn/${data.current.weather[0].icon}@4x.png`}
                alt={data.current.weather[0].description}
                className="w-48 h-auto"
              />
              <h4 className=" text-2xl font-medium">
                {data.current.weather[0].main}
              </h4>
            </div>

            <h1
              className={`text-6xl font-bold text-center  ${
                pending && "hidden"
              }`}
            >
              {units === "metric"
                ? `${data.current.temp}°C`
                : `${data.current.temp}°F`}
            </h1>
            <div
              className={`${
                pending
                  ? "block absolute left-0 right-0 top-0 bottom-0"
                  : "hidden"
              }`}
            >
              <Loader />
            </div>
          </div>
          <div className="absolute left-0 right-0 bottom-0 mx-auto text-center">
            <div className="mx-auto text-center">
              <h4 className=" text-lg font-medium">Today, </h4>
              <p>
                {`${new Intl.DateTimeFormat("en-US", {
                  weekday: "long",
                }).format(new Date())}, ${new Date().toLocaleDateString(
                  "en-US",
                  {
                    day: "2-digit",
                    month: "short",
                  }
                )}`}
              </p>
            </div>
            <div className="text-center flex justify-center py-4 w-60 mx-auto">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              {locData.name === undefined ? (
                <p>(default) New York, New York</p>
              ) : (
                <p>{`${locData.name}, ${locData.state}`}</p>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

function Loader() {
  return (
    <div className="w-full h-full grid place-items-center">
      <svg
        className="w-24 h-24 animate-spin"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
        />
      </svg>
    </div>
  );
}

export default LeftSection;
