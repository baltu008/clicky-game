import React from "react";
import "./Wrapper.css";
import "../../App.js";

const Wrapper = props => (
  <div className="container">
    <div className="row">
      <div className="wrapper">{props.children}</div>
    </div>
  </div>
);

export default Wrapper;
