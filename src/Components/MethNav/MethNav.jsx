import React from "react";
import NavBar from "./NavBar";
import MobileOptionsNav from "./MobileOptionsNav";
import { MethNavWrapper } from "./styles/MethNavStyles";

const MethNav = () => {
  return (
    <>
      <h1>Track your progress</h1>
      <MethNavWrapper>
        <NavBar />
        <MobileOptionsNav />
      </MethNavWrapper>
    </>
  );
};

export default MethNav;
