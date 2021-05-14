import React, { useContext } from "react";
import TrackerDataContext from "../../Context/TrackerDataContext";

const NavBar = () => {
  let { managerMethodData } = useContext(TrackerDataContext);
  const handleClick = (e) => {
    managerMethodData(e);
  };

  return (
    <div id="methNav">
      <ul className="methodGroup">
        <li className="method1">
          <a name="0" href="#" onClick={(e) => handleClick(e.target.name)}>
            Method 1
          </a>
        </li>
        <li className="method2">
          <a name="1" href="#" onClick={(e) => handleClick(e.target.name)}>
            Method 2
          </a>
        </li>
        <li className="method3">
          <a name="2" href="#" onClick={(e) => handleClick(e.target.name)}>
            Method 3
          </a>
        </li>
        <li className="method4">
          <a name="3" href="#" onClick={(e) => handleClick(e.target.name)}>
            Method 4
          </a>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
