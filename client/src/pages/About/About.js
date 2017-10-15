import React, { Component } from "react";
import { Col, Row, Container } from "../../components/Grid";
import Nav from "../../components/Nav";
import Jumbotron from "../../components/Jumbotron";
import { Link } from "react-router-dom";
import "./About.css";
import Safiyya from "./Images/Safiyya.jpg";
import Menelik from "./Images/Menelik.jpg";
import Ray from "./Images/Ray.jpg";
import Linkedin from "./Images/linkedin.png";
import Github from "./Images/GitHub-Mark-64px.png";


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
        <Nav/>
        <Jumbotron/>
        <Container>
          <Row>
            <h1 className="text-center">Meet Our Developers</h1>
          </Row>
          <Col size="md-9 md-offset-1 bioContent">
            <div className="text-center">
              <Row>
                <Col size="md-3 md-offset-1">
                   <h3>Safiyya Shariff</h3>
                  <img className="img-circle bioPic" alt="Safiyya Shariff" src={Safiyya}></img>
                  <Row>
                    <a href="#" target="_blank"><img className="img-circle links" src="https://www.w3schools.com/css/trolltunga.jpg"></img></a>
                    <a href="https://github.com/ssharif10" target="_blank"><img className="img-circle links col-md-offset-2" alt="github" src={Github}></img></a>
                    <a href="https://www.linkedin.com/in/safiyya-sharif-cpim" target="_blank"><img className="img-circle links col-md-offset-2" alt="linkedin" src={Linkedin}></img></a>
                  </Row>
                </Col>
                <Col size="md-3 md-offset-1">
                  <h3>Meguel Chavez</h3>
                  <img className="img-circle bioPic" alt="Meguel Chavez" src="http://via.placeholder.com/140x140"></img>
                  <Row>
                    <a href="#" target="_blank"><img className="img-circle links" src="http://via.placeholder.com/25x25"></img></a>
                    <a href="https://github.com/mc4tech" target="_blank"><img className="img-circle links col-md-offset-2" alt="github" src={Github}></img></a>
                    <a href="www.linkedin.com/in/meguel-chavez" target="_blank"><img className="img-circle links col-md-offset-2" alt="linkedin" src={Linkedin}></img></a>
                  </Row>
                </Col>
                <Col size="md-3 md-offset-1">
                  <h3>Menelik Tefera</h3>
                  <img className="img-circle bioPic" alt="Menelik Tefera" src={Menelik}></img>
                  <Row>
                    <a href="#" target="_blank"><img className="img-circle links" src="http://via.placeholder.com/25x25"></img></a>
                   <a href="https://github.com/menelik7" target="_blank"><img className="img-circle links col-md-offset-2" alt="github" src={Github}></img></a>
                    <a href="#" target="_blank"><img className="img-circle links col-md-offset-2" alt="linkedin" src={Linkedin}></img></a>
                  </Row>
                </Col>  
              </Row>
              <Row>
                <Col size="md-3 md-offset-3">
                  <h3>Carlvis Jones</h3>
                  <img className="img-circle bioPic" alt="Carlvis Jones" src="http://via.placeholder.com/140x140"></img>
                  <Row>
                    <a href="#" target="_blank"><img className="img-circle links" src="http://via.placeholder.com/25x25"></img></a>
                   <a href="https://github.com/TangentLine" target="_blank"><img className="img-circle links col-md-offset-2" alt="github" src={Github}></img></a>
                    <a href="#" target="_blank"><img className="img-circle links col-md-offset-2" alt="linkedin" src={Linkedin}></img></a>
                  </Row>
                </Col>
                <Col size="md-3 md-offset-1">
                  <h3>Ray Shin</h3>
                  <img className="img-circle bioPic" alt="Ray Shin" src={Ray}></img>
                  <Row>
                    <a href="#" target="_blank"><img className="img-circle links" src="http://via.placeholder.com/25x25"></img></a>
                   <a href="https://github.com/rayjshin" target="_blank"><img className="img-circle links col-md-offset-2" alt="github" src={Github}></img></a>
                    <a href="https://www.linkedin.com/in/ray-shin-91176016/" target="_blank"><img className="img-circle links col-md-offset-2" alt="linkedin" src={Linkedin}></img></a>
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
