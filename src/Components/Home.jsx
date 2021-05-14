import React from "react";
import MethNav from "./MethNav/MethNav";
import ProgressGraphic from "./ProgressGraphic";
import HowTo from "./HowTo";
import VolumeRules from "./VolumeRules";
import Educational from "./Educational/Educational";
import TimerCalendar from "./TimerCalendar";

const Home = () => {
  return (
    <>
      <MethNav />
      <ProgressGraphic />
      <TimerCalendar />
      <HowTo />
      <VolumeRules />
      <Educational />
    </>
  );
};

export default Home;
