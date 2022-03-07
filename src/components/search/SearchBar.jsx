/* eslint-disable react/prop-types */
import { useDispatch, useSelector } from "react-redux";
import { getLocationByName } from "../../api/getLocationName";
import getForecast from "../../api/getForecast";
import { getLocationSucess } from "../../redux/locationSlice";

function SearchBar() {
  const { search: stateList } = useSelector((state) => state.location);
  const { units } = useSelector((state) => state.forecast);
  const dispatch = useDispatch();

  function handleInput(e) {
    if (e.target.value.length > 2) {
      getLocationByName(e.target.value, dispatch);
    }
  }

  function handleGetForecast({ ...props }) {
    getForecast({ lat: props.lat, lon: props.lon }, dispatch, units);
    dispatch(getLocationSucess(props));
    getLocationByName("", dispatch);
  }

  return (
    <div>
      <div className="w-full flex justify-between">
        <input
          type="text"
          placeholder="Enter a city (e.g. London, Miami)"
          className="bg-transparent mx-1 px-1 focus:outline-0 w-full"
          onChange={handleInput}
        />
        <button
          type="button"
          className="bg-slate-600 w-fit p-2 rounded-full shadow shadow-slate-900 h-fit text-slate-100 hover:text-slate-400 hover:bg-slate-700 transition-colors"
        >
          <svg
            className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv w-6 h-6 fill-current"
            focusable="false"
            aria-hidden="true"
            viewBox="0 0 24 24"
            data-testid="MyLocationIcon"
          >
            <path d="M12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm8.94 3c-.46-4.17-3.77-7.48-7.94-7.94V1h-2v2.06C6.83 3.52 3.52 6.83 3.06 11H1v2h2.06c.46 4.17 3.77 7.48 7.94 7.94V23h2v-2.06c4.17-.46 7.48-3.77 7.94-7.94H23v-2h-2.06zM12 19c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7z" />
          </svg>
        </button>
        <div className="absolute left-0 top-14 w-full">
          {stateList.length > 0 &&
            stateList.map((item, index) => {
              return (
                <button
                  // eslint-disable-next-line react/no-array-index-key
                  key={`${item.name}-${index}`}
                  className="p-2 bg-slate-700 hover:bg-slate-800 w-full"
                  onClick={() => handleGetForecast(item)}
                  type="button"
                >
                  {item.name}, {item.state}
                </button>
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default SearchBar;
