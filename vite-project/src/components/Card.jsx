import React from "react";
import BackCard from "./BackCard";
import FrontCard from "./FrontCard";

const Card = () => {
  return (
    <div className="Card">
      <div className="container">
        <BackCard />
        <FrontCard />
      </div>
    </div>
  );
};

export default Card;
