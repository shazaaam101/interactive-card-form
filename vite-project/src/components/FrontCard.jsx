import React, { useContext } from "react";
import { CardContext } from "../CardContext";

const FrontCard = () => {
  const { state, dispatch } = useContext(CardContext);
  return (
    <div className="FrontCard">
      <div className="icon"></div>
      <div className="card-number">
        {state.cardNumber || "0000 0000 0000 0000"}
      </div>
      <div className="row">
        <div className="cardholder-name">{state.name || "JANE APPLESEED"}</div>
        <div className="exp-date">
          {state.month || "00"}/{state.year || "00"}
        </div>
      </div>
    </div>
  );
};

export default FrontCard;
