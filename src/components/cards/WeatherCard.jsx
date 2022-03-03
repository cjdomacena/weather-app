/* eslint-disable react/prop-types */
import PropTypes from "prop-types";
import unixToDate from "../../utils/unixToDate";

function isNight() {
  const current = new Date().getHours();
  if (current > 6 && current < 20) return false;
  return true;
}

function convertTemp(temp, type) {
  if (type === "celcius") return `${Math.floor(300 - temp)}°`;
  return `${Math.floor((300 - temp) * 1.8)}°`;
}
function WeatherCard({ props }) {
  const { dt, temp } = props;
  return (
    <div className=" w-full h-52 bg-gray-900 shadow shadow-slate-900">
      <div className="px-6 py-4 text-slate-100 h-full flex flex-col justify-between">
        <h3 className="text-md font-medium text-center">{unixToDate(dt)}</h3>
        <p className=" self-center">Some image here</p>
        <div className="flex justify-between">
          <p className="font-bold">
            {isNight()
              ? convertTemp(temp.day, "celcius")
              : convertTemp(temp.day, "celcius")}
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
