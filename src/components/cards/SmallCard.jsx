import PropType from "prop-types";
import { useSelector } from "react-redux";

function SmallCard({ title }) {
  const { data } = useSelector((state) => state.forecast);
  const { current } = data;
  return (
    <div className="bg-slate-900 h-auto py-4">
      <div className="p-4 mx-auto text-center flex flex-col items-center gap-y-9">
        <h3 className=" text-lg">{title}</h3>
        <h2 className="font-light">
          {title.toLowerCase() === "visibility" ? (
            <>
              <span className="text-7xl font-medium">
                {(current.visibility * 0.000621371192)
                  .toFixed(2)
                  .toString()
                  .replace(".", ",")}
              </span>{" "}
              miles
            </>
          ) : (
            <>
              <span className="text-7xl font-medium">{current.pressure}</span>{" "}
              mb
            </>
          )}
        </h2>
      </div>
    </div>
  );
}

SmallCard.propTypes = {
  title: PropType.string,
};

SmallCard.defaultProps = {
  title: "Card Title",
};

export default SmallCard;
