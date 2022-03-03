import PropTypes from "prop-types";
// eslint-disable-next-line no-unused-vars
function WeatherCard(props) {
  return (
    <div className=" w-full h-52 bg-gray-900">
      <div className="px-6 py-4 text-slate-100 h-full flex flex-col justify-between">
        <h3 className="text-xl font-medium text-center">Tomorrow</h3>
        <p className=" self-center">Some image here</p>
        <div className="flex justify-between">
          <p>13C</p> <p>13C</p>
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
