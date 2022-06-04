import React from "react";
import useGAEventsTracker from "../../hooks/useGAEventsTracker";

const Home = () => {
  const GAEventTracker = useGAEventsTracker("External Links");
  return (
    <div>
      Home
      <button onClick={(e) => GAEventTracker(test)}>event trigger</button>
    </div>
  );
};

export default Home;
