import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import Nav from "../../components/Nav";
import { List, ListItem } from "../../components/List";
import { Input, TextArea, FormBtn } from "../../components/Form";
import DeleteBtn from "../../components/DeleteBtn";
import Profile from "../../components/Profile";
import PanelWells from "../../components/PanelWells";

class Dashboard extends Component {
  state = {
    users: [],
    username: "",
    oneMileRun: "",
    avgMileJogging: "",
    avgMileBiking: ""
  };

  // componentDidMount() {
  //   this.loadUsers();
  // };
//


  loadUsers = () => {
    API.getUsers()
      .then(res =>
        this.setState({ users: res.data, username: "", avgMileWalking: "", avgMileJogging: "", avgMileBiking: "" })
      )
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.username && this.state.avgMileWalking) {
      API.saveUser({
        username: this.state.username,
        oneMileRun: this.state.oneMileRun,
        avgMileJogging: this.state.avgMileJogging,
        avgMileBiking: this.state.avgMileBiking,
      })
        .then(res => this.loadUsers())
        .catch(err => console.log(err));
    }
  };

  render() {
    return (
      <div>
        <Nav />
        <Profile/>
        <PanelWells/>
        <Container fluid>
          <Row>
            <Col size="md-6">
            
                <h1>Please Complete Your Profile?</h1>
            
              <form>
                <Input
                  value={this.state.username}
                  onChange={this.handleInputChange}
                  name="username"
                  placeholder="username (required)"
                />
                <Input
                  value={this.state.oneMileRun}
                  onChange={this.handleInputChange}
                  name="oneMileRun"
                  placeholder="1 Mile Run Time (required)"
                />
                <Input
                  value={this.state.avgMileJogging}
                  onChange={this.handleInputChange}
                  name="avgMileJogging"
                  placeholder="Average Mile Jogging (optional)"
                />
                <Input
                  value={this.state.avgMileBiking}
                  onChange={this.handleInputChange}
                  name="avgMileBiking"
                  placeholder="Average Mile Biking (optional)"
                />
                <FormBtn
                  disabled={!(this.state.avgMileWalking && this.state.username)}
                  onClick={this.handleFormSubmit}
                >
                  Submit  
                </FormBtn>
              </form>
            </Col>
           
          </Row>
        </Container>
       </div>
    
      );
  }
  
}

export default Dashboard;
