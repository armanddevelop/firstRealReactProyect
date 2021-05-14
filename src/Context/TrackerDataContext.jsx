import React, { useEffect, useState } from "react";
import Apis from "../Apis/ApisConections";

//set context
const TrackerDataContext = React.createContext();

export const TrackerDataConsumer = TrackerDataContext.Consumer;

export const TrackerDataProvider = (props) => {
  const [trackerData, setTrackerData] = useState([]);
  const [trackerMethod, setTrackerMethod] = useState();
  const [firstRender, setFirstRender] = useState(true);
  let { children } = props;

  useEffect(() => {
    const data = Apis.getTrackingDetail();
    data.then((value) => {
      if (value.length !== 0) {
        setTrackerData(value.TrackerMethods);
        setFirstRender(false);
        return;
      } else {
        setTrackerData(value);
        return;
      }
    });
  }, []);
  const _managerMethodData = (numberMethod) => {
    let dataMethod = parseInt(numberMethod, 10);
    setTrackerMethod(trackerData[dataMethod]);
  };
  return (
    <TrackerDataContext.Provider
      value={{
        trackerData,
        firstRender,
        trackerMethod,
        managerMethodData: _managerMethodData,
      }}
    >
      {{ children }}
    </TrackerDataContext.Provider>
  );
};
export default TrackerDataContext;
