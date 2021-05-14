import React, { useState } from "react";

const Educational = () => {
  const [flag, setFlag] = useState(false);
  const educational = {
    width: "100%",
    marginTop: "20px",
    marginButtom: "20px",
  };
  const leftEducational = {
    display: "inline-block",
    width: "47%",
  };
  const rigthEducational = {
    display: "inline-block",
    width: "25%",
    marginLeft: "6%",
    position: "absolute",
  };
  const hr = {
    width: "105%",
  };
  return (
    <>
      {flag ? (
        <div style={educational}>
          <div style={leftEducational}>
            <h4>your current level</h4>
            <h2>Qualified producer</h2>
            <p>
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old. Richard McClintock, a Latin
              professor at Hampden-Sydney College in Virginia, looked up one of
              the more obscure Latin words, consectetur, from a Lorem Ipsum
              passage, and going through the cites of the word in classical
              literature, discovered the undoubtable source.
            </p>
          </div>
          <div style={rigthEducational}>
            <h4>Next level</h4>
            <h2>Supervisor</h2>
            <p>
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old. Richard McClintock, a Latin
              professor at Hampden-Sydney College in Virginia, looked up one of
              the more obscure Latin words, consectetur, from a Lorem Ipsum
              passage, and going through the cites of the word in classical
              literature, discovered the undoubtable source.
            </p>
          </div>
          <hr style={hr}></hr>
        </div>
      ) : (
        <div style={educational}>
          <div style={leftEducational}>
            <h4>Current level</h4>
            <h2>Supervisor</h2>
            <p>
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old. Richard McClintock, a Latin
              professor at Hampden-Sydney College in Virginia, looked up one of
              the more obscure Latin words, consectetur, from a Lorem Ipsum
              passage, and going through the cites of the word in classical
              literature, discovered the undoubtable source.
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default Educational;
