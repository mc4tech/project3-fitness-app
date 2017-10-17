import React from "react";
import { Col, Row, Container } from "../components/Grid";
import { Input, FormBtn } from "../components/Form";

// import "./Panel.css";


const RegistrationForm = ({ children }) =>
  <Row>
  
            <Col size="md-6">
            
                <h1>Please Complete Your Profile?</h1>
       
              <form className="collapse" id="collapseExample" aria-expanded={this.state.open}>
                <Input
                  value={this.state.username}
                  onChange={this.handleInputChange}
                  name="username"
                  placeholder="username (required)"
                />
                <Input
                  value={this.state.avgMileWalking}
                  onChange={this.handleInputChange}
                  name="avgMileWalking"
                  placeholder="Average Mile Walking (required)"
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

export default RegistrationForm;

