import LeftSection from "./LeftSection";
import RightSection from "./RightSection";

function Landing() {
  return (
    <main className="block xl:flex lg:flex h-auto">
      <LeftSection />
      <RightSection />
    </main>
  );
}

export default Landing;
