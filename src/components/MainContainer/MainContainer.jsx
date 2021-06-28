import React from "react";
import "./MainContainer.css";

export default function MainContainer(props) {
  return <div className="mainContainer">{props.children}</div>;
}
