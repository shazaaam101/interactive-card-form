import React, { useContext } from "react";
import svgComplete from "../images/icon-complete.svg";
import { CardContext } from "../CardContext";

const Thank = ({ setIsComplete }) => {
  const { dispatch } = useContext(CardContext);
  return (
    <div className="Thank">
      <img src={svgComplete} alt="complete" />
      <h1>THANK YOU!</h1>
      <p>We've added your card details</p>
      <button
        className="continue-btn"
        onClick={() => {
          setIsComplete(false);
          dispatch({ type: "RESET" });
        }}
      >
        Continue
      </button>
    </div>
  );
};

export default Thank;
