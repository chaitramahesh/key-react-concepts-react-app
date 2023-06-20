import React from "react";
import "../UI/Card.css";

const Card = (props) => {
  return <div className="concept">{props.children}</div>;
};

export default Card;
