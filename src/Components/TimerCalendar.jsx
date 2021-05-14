import React, { useState, useEffect, useRef, useContext } from "react";
import TrackerDataContext from "../Context/TrackerDataContext";

const TimerCalendar = () => {
  let { trackerData, firstRender, trackerMethod } =
    useContext(TrackerDataContext);
  //console.log("Calendar " + props.trackerMethod);
  const getPathLabelElement = useRef(null);
  const [graphicValue, setGrapichValue] = useState();
  const [timeLeftOneValue, setTimeLeftOneValue] = useState();
  const [timeLeftTwoValue, setTimeLeftTwoValue] = useState();
  const stylesGraph = graphicValue;
  const timeLeftOne = timeLeftOneValue;
  const timeLeftTwo = timeLeftTwoValue;

  useEffect(() => {
    if (firstRender && trackerData.length != 0) {
      setDaysToQualify(trackerData[0]);
    } else if (!firstRender && trackerMethod.length != 0) {
      setDaysToQualify(trackerMethod);
    }
  }, [trackerData, trackerMethod]);

  const setDaysToQualify = (data) => {
    try {
      //"M10,0 10,0 A1,1 0 1 1 10,15 L10,15 A1,1 0 1 1 10,0 z"
      let template = "M10,0 {RTP} A1,1 0 1 1 {RBP} L10,15 A1,1 0 1 1 10,0 z";

      let rightX = 10;
      if (data != undefined) {
        let totalDays = data.TotalDays;
        let daysToQualify = data.DaysToQualify;
        if (daysToQualify > 0) {
          rightX = 430 * ((totalDays - daysToQualify) / totalDays);
          let n = daysToQualify.toString();

          if (n.length > 1) {
            setTimeLeftOneValue(n.charAt(0));
            setTimeLeftTwoValue(n.charAt(1));
          } else {
            setTimeLeftOneValue("-");
            setTimeLeftTwoValue(n.charAt(0));
          }
        } else {
          setTimeLeftOneValue("-");
          setTimeLeftTwoValue("-");
        }
        let RTP = rightX + "," + 0;
        let RBP = rightX + "," + 15;
        let to = template.replace(/{RTP}/g, RTP).replace(/{RBP}/g, RBP);
        setGrapichValue(to);
      }
    } catch (e) {
      console.log("This is the Error ", e);
    }
  };

  return (
    //M20,5 20,5 A1,1 0 1 1 20,35 L20,35 A1,1 0 1 1 20,5 z
    //template = "M20,0 {RTP} A1,1 0 1 1 {RBP} L20,40 A1,1 0 1 1 20,0 z";
    //RTP min 20,5 max 280,5
    //RBP min 20,35 max 280,35
    <>
      <div
        style={{
          marginTop: "10px",
          marginBottom: "10px",
          background: "#2b415c",
          width: "50%",
          padding: "16px",
          borderRadius: "6px",
        }}
      >
        <h4 style={{ marginBottom: "10px", color: "white" }}>
          Time left to qualify this month:
        </h4>
        <div>
          <div style={{ display: "inline-block" }}>
            <a className="level-info">
              <span>{timeLeftOne}</span>
            </a>
          </div>
          <div style={{ display: "inline-block" }}>
            <a className="level-info">
              <span>{timeLeftTwo}</span>
            </a>
          </div>
          <div style={{ display: "inline-block" }}>
            <h3 style={{ margin: "0", color: "white" }}>Days </h3>
          </div>
          <div style={{ marginLeft: "5px", display: "inline-block" }}>
            <a
              className="tooltip"
              title="This is considering only calendar month. If end of month has been extended, the extended days have not been taken into consideration for this tracker."
            >
              <i className="icon-information-ln-1"></i>
            </a>
          </div>
        </div>
        <svg style={{ width: "500px", height: "20px" }}>
          <path
            id="container"
            d="M10,0 430,0 A1,1 0 1 1 430,16 L10,16 A1,1 0 1 1 10,0 z"
            stroke="rgba(0, 0, 0, 0.2)"
            fill="rgba(0, 0, 0, 0.2)"
          />
          <path
            id="bar"
            d="M10,0 10,0 A1,1 0 1 1 10,15 L10,15 A1,1 0 1 1 10,0 z"
            stroke="#87d54a"
            fill="#87d54a"
            strokeDasharray="0"
            strokeDashoffset="0"
            ref={getPathLabelElement}
          >
            <animate
              id="path"
              attributeName="d"
              from="M10,0 10,0 A1,1 0 1 1 10,15 L10,15 A1,1 0 1 1 10,0 z"
              to={stylesGraph}
              dur="1.8s"
              fill="freeze"
            />
          </path>
        </svg>
      </div>
    </>
  );
};

export default TimerCalendar;
