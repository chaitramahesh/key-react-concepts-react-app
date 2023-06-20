import React from "react";
import Concept from "./Concept";
import "./Concepts.css";

const Concepts = (props) => {
  return (
    <ul id="concepts">
      {props.concepts.map((concept) => (
        <Concept key={Math.round(Math.random() * 1000)} concept={concept} />
      ))}
    </ul>
  );
};

export default Concepts;
