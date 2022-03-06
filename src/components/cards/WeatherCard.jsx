/* eslint-disable react/prop-types */
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import unixToDate from "../../utils/unixToDate";

function isNight() {
  const current = new Date().getHours();
  if (current > 6 && current < 20) return false;
  return true;
}

function WeatherCard({ props }) {
  const { dt, temp, weather } = props;
  const { pending, units } = useSelector((state) => state.forecast);
  const tomorrow = new Date();
  return (
    <div className=" w-full h-auto bg-slate-900 shadow shadow-slate-900">
      {console.log(units)}
      <div className="px-6 py-4 text-slate-100 h-full flex flex-col justify-between item">
        {pending ? (
          <div className="bg-slate-800 h-2 animate-pulse" />
        ) : (
          <h3 className="text-lg font-medium text-center rounded-full">
            {tomorrow.getDate() + 1 === new Date(unixToDate(dt)).getDate()
              ? "Tomorrow"
              : unixToDate(dt)}
          </h3>
        )}

        <div className="grid place-items-center">
          {pending ? (
            <div className="bg-slate-800 h-2 animate-pulse" />
          ) : (
            <>
              <img
                src={`http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`}
                alt={weather[0].description}
                className="h-auto"
              />
              <h4 className=" font-medium text-lg">{weather[0].main}</h4>
            </>
          )}
        </div>
        <div className="flex justify-between mt-4 text-xs">
          {isNight() ? (
            <>
              <p className="font-bold">
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
                    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                  />
                </svg>{" "}
                {units === "metric" ? `${temp.night}°C` : `${temp.night}°F`}
              </p>
              <p>
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
                    d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>{" "}
                {units === "metric" ? `${temp.day}°C` : `${temp.day}°F`}
              </p>
            </>
          ) : (
            <>
              <p className="font-bold">
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
                    d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>{" "}
                {units === "metric" ? `${temp.day}°C` : `${temp.day}°F`}
              </p>
              <p>
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
                    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                  />
                </svg>{" "}
                {units === "metric" ? `${temp.night}°C` : `${temp.night}°F`}
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default WeatherCard;

WeatherCard.propType = {
  props: PropTypes.object,
};

WeatherCard.defaultProps = {
  props: {},
};
