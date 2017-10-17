import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import Jumbotron from "../../components/Jumbotron";
import Panel from "../../components/Panel";
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
    avgMileBiking: "",
    open: true,
  };

  componentDidMount() {
    this.loadUsers();
  };


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
        <Jumbotron>
          <Panel>
            <h1>hey</h1>
            <FormBtn
                  data-toggle="collapse"
                  aria-expanded={!this.state.open }
                  data-target="#collapseExample"
                >
                  Toggle

                </FormBtn>
        <Container fluid>
        {this.state.users.length ? (
              <List>
                {this.state.users.map(user => (
                  <ListItem key={user._id}>
                    <Link to={"/users/" + user._id}>
                      <strong style={{ color: "#0b0e7b" }}>
                        {user.username}'s fitness results:
                      </strong>
                      <br/>
                      <strong style={{ color: "#0b0e7b" }}>
                         average mile walking: {user.avgMileWalking} min
                      </strong>
                      <br/>
                      <strong style={{ color: "#0b0e7b" }}>
                         average mile Jogging: {user.avgMileJogging} min
                      </strong>
                      <br/>
                      <strong style={{ color: "#0b0e7b" }}>
                         average mile Biking: {user.avgMileBiking} min
                      </strong>
                    </Link>
                    <DeleteBtn onClick={() => this.deleteuser(user._id)} />
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3 style={{ color: "#0b0e7b" }}>No Results to Display</h3>
            )}
          <div className="collapse" id="collapseExample" aria-expanded={this.state.open}>
            <Row>
              <Col size="md-6">
              
                  <h1>Please Complete Your Profile?</h1>
         
                <form>
                  <Input
                    value={this.state.username}
                    onChange={this.handleInputChange}
                    name="username"
                    placeholder="username (requi#0b0e7b)"
                  />
                  <Input
                    value={this.state.avgMileWalking}
                    onChange={this.handleInputChange}
                    name="avgMileWalking"
                    placeholder="Average Mile Walking (requi#0b0e7b)"
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
                    data-toggle="collapse"
                    aria-expanded={!this.state.open }
                    data-target="#collapseExample"
                    onClick={this.handleFormSubmit}
                  >
                    Submit
                  </FormBtn>
                </form>
              </Col>
               
            </Row>
          </div>
        </Container>
          </Panel>
        </Jumbotron>
        
       </div>
    
      );
  }
  
}

export default Dashboard;
