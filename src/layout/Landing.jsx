import LeftSection from "./LeftSection";
import RightSection from "./RightSection";

function Landing() {
  return (
    <main className="block xl:flex lg:flex md:flex sm:block xs:block">
      <LeftSection />
      <RightSection />
    </main>
  );
}

export default Landing;
