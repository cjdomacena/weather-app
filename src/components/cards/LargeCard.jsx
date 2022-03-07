import PropType from "prop-types";

function LargeCard({ title, data }) {
  return (
    <div className=" bg-slate-900 h-auto">
      <div className="p-4 mx-auto text-center flex flex-col items-center gap-y-9">
        <h3 className=" text-lg">{title}</h3>
        <h2 className=" text-4xl font-light">
          {title.toLowerCase() !== "humidity" ? (
            <>
              <span className=" text-7xl font-medium">{data.wind_speed}</span>{" "}
              <span className="text-base">mph</span>
            </>
          ) : (
            <>
              <span className=" text-7xl font-medium">{data.humidity}</span>
              <span className="text-base">%</span>
            </>
          )}
        </h2>
        {title.toLowerCase() !== "humidity" ? (
          <div className="flex p-4 gap-x-4 h-12">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="w-6 h-6"
              viewBox="0 0 16 16"
            >
              <path d="M8 16.016a7.5 7.5 0 0 0 1.962-14.74A1 1 0 0 0 9 0H7a1 1 0 0 0-.962 1.276A7.5 7.5 0 0 0 8 16.016zm6.5-7.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z" />
              <path d="m6.94 7.44 4.95-2.83-2.83 4.95-4.949 2.83 2.828-4.95z" />
            </svg>
            SWS
          </div>
        ) : (
          <div className="h-12 flex items-end w-full justify-center p-4">
            <div className="w-10/12 bg-slate-400 rounded-full relative">
              <div className="absolute -top-6 text-xs flex justify-between w-full">
                <span>0%</span>
                <span>50%</span>
                <span>100%</span>
              </div>
              <div
                className="bg-blue-900 text-xs font-medium text-blue-100 text-center p-0.5 leading-[8px] rounded-l-full"
                style={{ width: `${data.humidity}%` }}
              >
                {" "}
                {data.humidity}%
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

LargeCard.propTypes = {
  title: PropType.string,
  // eslint-disable-next-line react/forbid-prop-types
  data: PropType.object,
};

LargeCard.defaultProps = {
  title: "Card Title",
  data: {},
};

export default LargeCard;
