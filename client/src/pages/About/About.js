import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import Panel from "../../components/Panel";
import API from "../../utils/API";
import { List, ListItem } from "../../components/List";
import { Input, TextArea, FormBtn } from "../../components/Form";
import DeleteBtn from "../../components/DeleteBtn";
import Nav from "../../components/Nav";
import Jumbotron from "../../components/Jumbotron";
import "./About.css";



class Home extends Component {
  state = {
   home: ""
  };

  // componentDidMount() {
  //   this.loadBooks();
  // };

  render() {
    return (
      <div>
        <Jumbotron/>
        <Container>
          <Row>
            <h1 className="text-center">Meet Our Developers</h1>
          </Row>
          <Col size="md-9 md-offset-1 bioContent">
            <div className="text-center">
              <Row>
                <Col size="md-3 md-offset-1">
                  <img className="img-circle " src="http://via.placeholder.com/140x140"></img>
                  <Row>
                    <a href="#" target="_blank" alt="msg"><img className="img-circle links" src="https://www.w3schools.com/css/trolltunga.jpg"></img></a>
                    <a href="#" target="_blank" alt="msg"><img className="img-circle links col-md-offset-2" src="../GitHub-Mark-64px.png"></img></a>
                    <a href="#" target="_blank" alt="msg"><img className="img-circle links col-md-offset-2" src="./linkedin.png"></img></a>
                  </Row>
                </Col>
                <Col size="md-3 md-offset-1">
                  <img className="img-circle " src="http://via.placeholder.com/140x140"></img>
                  <Row>
                    <a href="#" target="_blank" alt="msg"><img className="img-circle links" src="http://via.placeholder.com/25x25"></img></a>
                    <a href="#" target="_blank" alt="msg"><img className="img-circle links col-md-offset-2" src="../Images/GitHub-Mark-64px.png"></img></a>
                    <a href="#" target="_blank" alt="msg"><img className="img-circle links col-md-offset-2" src="../../../linkedin-logo.png"></img></a>
                  </Row>
                </Col>
                <Col size="md-3 md-offset-1">
                  <img className="img-circle " src="http://via.placeholder.com/140x140"></img>
                  <Row>
                    <a href="#" target="_blank" alt="msg"><img className="img-circle links" src="http://via.placeholder.com/25x25"></img></a>
                    <a href="#" target="_blank" alt="msg"><img className="img-circle links col-md-offset-2" src="../../../GitHub-Mark-64px.png"></img></a>
                    <a href="#" target="_blank" alt="msg"><img className="img-circle links col-md-offset-2" src="../../../linkedin-logo.png"></img></a>
                  </Row>
                </Col>  
              </Row>
              <Row>
                <Col size="md-3 md-offset-3">
                  <img className="img-circle " src="http://via.placeholder.com/140x140"></img>
                  <Row>
                    <a href="#" target="_blank" alt="msg"><img className="img-circle links" src="http://via.placeholder.com/25x25"></img></a>
                    <a href="#" target="_blank" alt="msg"><img className="img-circle links col-md-offset-2" src="../../../GitHub-Mark-64px.png"></img></a>
                    <a href="#" target="_blank" alt="msg"><img className="img-circle links col-md-offset-2" src="../../../linkedin-logo.png"></img></a>
                  </Row>
                </Col>
                <Col size="md-3 md-offset-1">
                  <img className="img-circle " src="http://via.placeholder.com/140x140"></img>
                  <Row>
                    <a href="#" target="_blank" alt="msg"><img className="img-circle links" src="http://via.placeholder.com/25x25"></img></a>
                    <a href="#" target="_blank" alt="msg"><img className="img-circle links col-md-offset-2" src="../../../GitHub-Mark-64px.png"></img></a>
                    <a href="#" target="_blank" alt="msg"><img className="img-circle links col-md-offset-2" src="../../../linkedin-logo.png"></img></a>
                  </Row>
                </Col> 
                 
              </Row> 
            </div> 
          </Col>
        </Container>
      </div>
      );
  }
  
}

export default Home;
