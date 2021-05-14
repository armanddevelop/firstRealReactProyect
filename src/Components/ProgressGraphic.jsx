import React, { useState, useRef, useEffect, useContext } from "react";
import TrackerDataContext from "../Context/TrackerDataContext";

const ProgressGraphic = () => {
  let { trackerData, firstRender, trackerMethod } =
    useContext(TrackerDataContext);
  const getPathLabelElement = useRef(null);
  const [chronoMeter, setChronoMeter] = useState(0);
  const [pointsNeeded, setPointsNeeded] = useState(0);
  const [toolTip, setToolTip] = useState("");
  const start = 0;
  const duration = 1800;
  const resorceCommonToolTip = {
    1: "Your points are calculated considering current month plus previous 2 months",
    2: "Your points are calculated considering current month",
    3: "Your points are calculated considering current month plus previous month",
    4: "Your points are calculated considering current month plus previous 11 months",
  };

  useEffect(() => {
    if (firstRender && trackerData.length != 0) {
      setDataForDashStroke(trackerData[0]);
      setTooltipTitle(trackerData[0]);
    } else if (!firstRender && trackerMethod.length != 0) {
      setDataForDashStroke(trackerMethod);
      setTooltipTitle(trackerMethod);
    }
  }, [trackerData, trackerMethod]);

  const animateValue = (start, volumePointsCuerrent, duration) => {
    if (volumePointsCuerrent > 0) {
      let range = volumePointsCuerrent - start;
      let current = volumePointsCuerrent;
      let increment = 1;
      let cases = true;
      switch (cases) {
        case volumePointsCuerrent < 1000:
          increment = 1;
          break;
        case volumePointsCuerrent < 40000:
          increment = Math.floor(volumePointsCuerrent / 1000);
          break;
        default:
          increment = 1;
      }
      let stepTime = Math.abs(Math.floor(duration / range));
      let timer = setInterval(function () {
        current +=
          volumePointsCuerrent - current < increment
            ? volumePointsCuerrent - current
            : increment;
        setChronoMeter(current);
        if (current === volumePointsCuerrent) {
          setChronoMeter(volumePointsCuerrent);
          clearInterval(timer);
        }
      }, stepTime);
    }
    setChronoMeter(volumePointsCuerrent);
  };

  const setDataForDashStroke = (data) => {
    let totalLengthPathLabel = getPathLabelElement.current.getTotalLength();
    if (data != undefined) {
      if (data.CurrentPoints !== 0) {
        let to;
        setPointsNeeded(data.PointsToQualify);
        setChronoMeter(data.CurrentPoints);
        //animateValue(start, data.CurrentPoints, duration);
        to = totalLengthPathLabel * (data.PointsToQualify / data.MaximumPoints);
        getPathLabelElement.current.style.strokeDashoffset = Math.max(0, to);
      } else if (data.CurrentPoints == 0) {
        setPointsNeeded(data.MaximumPoints);
        setChronoMeter(0);
        getPathLabelElement.current.style.strokeDashoffset =
          Math.max(totalLengthPathLabel);
      }
    }
  };

  const setTooltipTitle = (resource) => {
    setToolTip(resorceCommonToolTip[resource.Method]);
  };

  return (
    <>
      <aside className="progress-bar">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 40 200 100">
          <path
            className="bg"
            d="M41 149.5a77 77 0 1 1 117.93 0"
            fill="none"
          ></path>
          <path
            className="meter"
            ref={getPathLabelElement}
            d="M41 149.5a77 77 0 1 1 117.93 0"
            fill="none"
            strokeDasharray="350"
            strokeDashoffset="350"
          ></path>
        </svg>
        <div className="points-breakdown">
          <label className="title-qualifications">Qualifying points</label>
          <div style={{ display: "inline-block" }}>
            <a className="tooltip" title={toolTip}>
              <i className="icon-information-ln-1"></i>
            </a>
          </div>
          <div className="points-total" id="points-value">
            {new Intl.NumberFormat().format(chronoMeter)}
          </div>
          <div id="needNextlevel">
            <label>Needed for the next level</label>
            <br />
            <strong className="total-points">
              {new Intl.NumberFormat().format(pointsNeeded)} points
            </strong>
          </div>
        </div>
      </aside>
    </>
  );
};

export default ProgressGraphic;
