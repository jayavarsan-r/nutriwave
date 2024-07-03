import LeftContainer from "../components/LeftContainer";
import RightContainer from "../components/RightContainer";
import { GlobalProvider } from "../context/GlobalState";
const Tracker1 = () => {
  return (
    <div className="tracker-container  w-screen">
      <div className="container mx-auto  text-center">
      <h1 className="text-white text-5xl py-6 mb-10  bg-ltgreen shadow-lg">Macro Meter</h1>

        <div className="grid md:grid-cols-2 gap-4">
          <LeftContainer />
          <RightContainer />
        </div>
      </div>
    </div>
  );
};

export default Tracker1;
