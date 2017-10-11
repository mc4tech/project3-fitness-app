import React from "react";
import "./Panel.css";


const Panel = ({ children }) =>
  <div style={{ height: 300 }} className="panel panel-default">
    {children}
  </div>;

export default Panel;
