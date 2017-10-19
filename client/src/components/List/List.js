import React from "react";
import "./List.css";
import { Col, Row, Container } from "../Grid";


export const List = ({ children }) => {
  return (
    <div>
    	<Col size="md-10">	
	      <ul className="list-group ">
	        {children}
	      </ul>
      </Col>
    </div>
  );
};
