import React from "react";

export const SocketBtn = props =>
  <button {...props} style={{ float: "right" }} className="btn btn-primary">
    {props.children}
  </button>;