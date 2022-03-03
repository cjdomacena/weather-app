import { useState } from "react";
import TempButtons from "../components/buttons/TempButtons";

function RightSection() {
  const [isCelcius, setIsCelsius] = useState(true);
  return (
    <section className="xl:w-3/4 lg:w-3/4 md:w-2/3 sm:w-screen xs:w-screen  h-screen">
      <div className="m-4 p-4 flex justify-end gap-4 items-center">
        <button
          type="button"
          onClick={() => {
            setIsCelsius((prev) => !prev);
          }}
        >
          <TempButtons isActive={isCelcius && true} tempType="celsius" />
        </button>
        <button
          type="button"
          onClick={() => {
            setIsCelsius((prev) => !prev);
          }}
        >
          <TempButtons isActive={!isCelcius && true} tempType="farenheit" />
        </button>
      </div>
    </section>
  );
}

export default RightSection;
