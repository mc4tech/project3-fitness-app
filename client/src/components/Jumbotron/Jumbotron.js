import React from "react";
import "./Jumbotron.css";

const Jumbotron = ({ children }) => (
  <div className="jumbotron text-center">
  	<div className="container">
  	  <h1 className="title">Fit Match </h1>
  	  {children}
    </div>
  </div>
);

export default Jumbotron;
