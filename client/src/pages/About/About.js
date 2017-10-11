import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import Panel from "../../components/Panel";
import API from "../../utils/API";
import { List, ListItem } from "../../components/List";
import { Input, TextArea, FormBtn } from "../../components/Form";
import DeleteBtn from "../../components/DeleteBtn";
import Nav from "../../components/Nav";

class Home extends Component {
  state = {
   home: ""
  };

  // componentDidMount() {
  //   this.loadBooks();
  // };

  render() {
    return (
      
      <Container>
        <Row>
          <h1 className="text-center">FitMatch</h1>
        </Row>
        <Col size="md-6">

          <Panel>
                  <Nav />

          </Panel>
        </Col>
      </Container>
      );
  }
  
}

export default Home;
