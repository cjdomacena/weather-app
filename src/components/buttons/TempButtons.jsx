import PropTypes from "prop-types";

export default function TempButtons({ isActive, tempType }) {
  if (tempType === "farenheit") {
    return (
      <div
        className={` h-12 w-12 ${
          isActive ? "bg-slate-100" : "bg-slate-400 text-slate-100"
        } rounded-full grid place-items-center transition-colors`}
      >
        <h2 className="font-bold text-xl mr-1">°F</h2>
      </div>
    );
  }
  return (
    <div
      className={` h-12 w-12 ${
        isActive ? "bg-slate-100" : "bg-slate-400 text-slate-100"
      } rounded-full grid place-items-center transition-colors`}
    >
      <h2 className="font-bold text-xl mr-1">°C</h2>
    </div>
  );
}

TempButtons.propTypes = {
  isActive: PropTypes.bool,
  tempType: PropTypes.string,
};

TempButtons.defaultProps = {
  isActive: true,
  tempType: "celsius",
};
