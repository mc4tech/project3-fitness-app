import React from "react";
import "./Nav.css";

const Nav = () => (
  <nav className="navbar navbar-default">
  <div className="container-fluid">
    <div className="navbar-header">
      <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
        <span className="sr-only">Toggle navigation</span>
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
      </button>
      <a className="navbar-brand" href="/">FitMatch</a>
    </div>

    <div className="collapse navbar-collapse navbar-right" id="bs-example-navbar-collapse-1">
      <ul className="nav navbar-nav">
        <li className="active"><a href="/">Home <span className="sr-only">(current)</span></a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/dashboard">Dashboard</a></li>
        <li><a href="#">Login</a></li> 
      </ul>
    </div>
  </div>
</nav>
);

export default Nav;
