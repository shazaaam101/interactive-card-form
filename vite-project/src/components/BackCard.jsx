import React, { useContext } from "react";
import { CardContext } from "../CardContext";

const BackCard = () => {
  const { state } = useContext(CardContext);
  return (
    <div className="BackCard">
      <div className="cvc">{state.cvc || "000"}</div>
    </div>
  );
};

export default BackCard;
