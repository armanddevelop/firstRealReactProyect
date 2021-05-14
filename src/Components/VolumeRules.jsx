import React from "react";

const VolumeRules = () => {
  return (
    <>
      <div
        style={{
          background: "#00000030",
          width: "100%",
          padding: "16px",
          borderRadius: "6px",
        }}
      >
        <div
          style={{
            display: "inline-block",
            textAlign: "center",
            width: "100px",
            marginRight: "20px",
          }}
        >
          <div
            style={{
              padding: "10px 0",
              background: "#00000030",
              borderTopLeftRadius: "6px",
              borderTopRightRadius: "6px",
            }}
          >
            <h4 style={{ margin: "0", color: "#78BE16" }}>0.00</h4>
          </div>
          <div style={{ height: "0.8px", background: "#ffffff90" }}></div>
          <div
            style={{
              padding: "10px 0",
              background: "#000000",
              borderBottomLeftRadius: "6px",
              borderBottomRightRadius: "6px",
            }}
          >
            <h4 style={{ margin: "0", color: "white" }}>1,000.00</h4>
          </div>
        </div>
        <div style={{ display: "inline-block" }}>
          <h4 style={{ color: "white" }}>UNENCUMBERED VOLUME</h4>
          <p style={{ color: "white" }}>
            Volume not being used by your Downline for Supervisor Qualification.
          </p>
        </div>
      </div>
    </>
  );
};

export default VolumeRules;
 