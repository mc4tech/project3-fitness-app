import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import Jumbotron from "../../components/Jumbotron";
import Panel from "../../components/Panel";
import API from "../../utils/API";
import Nav from "../../components/Nav";
import { List, ListItem } from "../../components/List";
import { Input, TextArea, FormBtn } from "../../components/Form";
import UpdateBtn from "../../components/UpdateBtn";


class Detail extends Component {
  state = {
    user: {},
    open: true,
  };
  // When this component mounts, grab the book with the _id of this.props.match.params.id
  // e.g. localhost:3000/books/599dcb67f0f16317844583fc
  componentDidMount() {
    API.getUser(this.props.match.params.id)
      .then(res => this.setState({ user: res.data }))
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
        avgMileWalking: this.state.avgMileWalking,
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
        <Jumbotron>

        </Jumbotron>
        <Panel>
            <h1 className="text-center" style={{ color: "red" }}>
              Welcome {this.state.user.username}
            </h1>
            <Row>
              <Col size= "md-6">
                <panel style={{ background: "red" }}>
                    <List>
                      <ListItem>
                        <h3 style={{ color: "red" }}>
                          Average Mile Walking : {this.state.user.avgMileWalking} min
                        </h3>
                      </ListItem>
                       <ListItem>
                        <h3 style={{ color: "red" }}>
                          Average Mile Jogging : {this.state.user.avgMileJogging} min
                        </h3>
                      </ListItem>
                       <ListItem>
                        <h3 style={{ color: "red" }}>
                          Average Mile Biking : {this.state.user.avgMileBiking} min
                        </h3>
                      </ListItem>
                    </List>
                </panel>
              </Col>
              <Col size= "md-6">
                <panel>
                    <List>
                      <ListItem>
                        <h3 style={{ color: "red" }}>
                          Average Mile Walking : {this.state.user.avgMileWalking} min
                        </h3>
                      </ListItem>
                       <ListItem>
                        <h3 style={{ color: "red" }}>
                          Average Mile Jogging : {this.state.user.avgMileJogging} min
                        </h3>
                      </ListItem>
                       <ListItem>
                        <h3 style={{ color: "red" }}>
                          Average Mile Biking : {this.state.user.avgMileBiking} min
                        </h3>
                      </ListItem>
                    </List>
                </panel>
              </Col>
            </Row>
            <Row>
              <Col size= "md-6">
                <panel style={{ background: "red" }}>
                    <List>
                      <ListItem>
                        <h3 style={{ color: "red" }}>
                          Average Mile Walking : {this.state.user.avgMileWalking} min
                        </h3>
                      </ListItem>
                       <ListItem>
                        <h3 style={{ color: "red" }}>
                          Average Mile Jogging : {this.state.user.avgMileJogging} min
                        </h3>
                      </ListItem>
                       <ListItem>
                        <h3 style={{ color: "red" }}>
                          Average Mile Biking : {this.state.user.avgMileBiking} min
                        </h3>
                      </ListItem>
                    </List>
                </panel>
              </Col>
              <Col size= "md-6">
                <panel>
                    <List>
                      <ListItem>
                        <h3 style={{ color: "red" }}>
                          Average Mile Walking : {this.state.user.avgMileWalking} min
                        </h3>
                      </ListItem>
                       <ListItem>
                        <h3 style={{ color: "red" }}>
                          Average Mile Jogging : {this.state.user.avgMileJogging} min
                        </h3>
                      </ListItem>
                       <ListItem>
                        <h3 style={{ color: "red" }}>
                          Average Mile Biking : {this.state.user.avgMileBiking} min
                        </h3>
                      </ListItem>
                    </List>
                </panel>
              </Col>
            </Row>
          </Panel>
        
      </div>
    );
  }
}

export default Detail;
