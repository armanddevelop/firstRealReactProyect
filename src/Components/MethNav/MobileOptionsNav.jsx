import React, { useContext } from "react";
import TrackerDataContext from "../../Context/TrackerDataContext";

const MobileOptionsNav = () => {
  let { managerDataMethod } = useContext(TrackerDataContext);

  const handleChange = (e) => {
    managerDataMethod(e);
  };
  return (
    <div id="methNavMobile">
      <select onChange={(e) => handleChange(e.target.value)}>
        <option value="0">Method 1</option>
        <option value="1">Method 2</option>
        <option value="2">Method 3</option>
        <option value="3">Method 4</option>
      </select>
    </div>
  );
};

export default MobileOptionsNav;
