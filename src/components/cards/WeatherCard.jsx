/* eslint-disable react/prop-types */
import PropTypes from "prop-types";
import unixToDate from "../../utils/unixToDate";

function isNight() {
  const current = new Date().getHours();
  if (current > 6 && current < 20) return false;
  return true;
}

function WeatherCard({ props }) {
  const { dt, temp, weather } = props;
  const tomorrow = new Date();
  return (
    <div className=" w-full h-auto bg-slate-900 shadow shadow-slate-900">
      <div className="px-6 py-4 text-slate-100 h-full flex flex-col justify-between">
        <h3 className="text-lg font-medium text-center">
          {tomorrow.getDate() + 1 === new Date(unixToDate(dt)).getDate()
            ? "Tomorrow"
            : unixToDate(dt)}
        </h3>
        <div className="grid place-items-center">
          <img
            src={`http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`}
            alt={weather[0].description}
            className="h-auto"
          />
          <h4 className=" font-medium text-lg">{weather[0].main}</h4>
        </div>

        <div className="flex justify-between mt-4">
          <p className="font-bold text-lg">
            {isNight() ? temp.day : temp.night}
          </p>{" "}
          <p>13C</p>
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
