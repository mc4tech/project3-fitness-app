import React, { Component } from "react";
// import DeleteBtn from "../../components/DeleteBtn";
import Jumbotron from "../../components/Jumbotron";
// import API from "../../utils/API";
// import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
// import { List, ListItem } from "../../components/List";
// import { Input, TextArea, FormBtn } from "../../components/Form";

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
          <p>Welcome to FitMatch! </p>
        </Container>
      </div>
      );
  }
  
}

export default Home;
