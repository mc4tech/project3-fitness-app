import React from "react";
import "./Panel.css";
import { Col, Row, Container } from "../../components/Grid";



const Panel = ({ children }) =>
	<div className= "col-md-8 col-md-offset-2">
	    <div  className="panel panel-default">
	  	  <panel className="panel-body">
	    	{children}
	    	</panel>
	  	</div>
	</div>;

export default Panel;
