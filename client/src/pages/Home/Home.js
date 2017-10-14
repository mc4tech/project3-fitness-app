import React, { Component } from "react";
// import DeleteBtn from "../../components/DeleteBtn";
import Jumbotron from "../../components/Jumbotron";
// import API from "../../utils/API";
// import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
// import { List, ListItem } from "../../components/List";
// import { Input, TextArea, FormBtn } from "../../components/Form";
import { Button, Modal, Popover, Tooltip, OverlayTrigger } from 'react-bootstrap';

class Home extends Component {
 
 state = {
   showModal: false
  };
  // componentDidMount() {
  //   this.loadBooks();
  // };const Example = React.createClass({
  

  close = () => {
    this.setState({ showModal: false });
  };

  open = () => {
    this.setState({ showModal: true });
  };

  render() {
    const popover = (
      <Popover id="modal-popover" title="popover">
        very popover. such engagement
      </Popover>
    );
    const tooltip = (
      <Tooltip id="modal-tooltip">
        wow.
      </Tooltip>
    );

    return (
      <div>
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
                <li><a href="#" onClick= {this.open}>Login</a></li> 
              </ul>
            </div>
          </div>
        </nav>
        <Jumbotron/>
        <div>
          <Modal show={this.state.showModal} onHide={this.close}>
            <Modal.Header closeButton>
              <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <h4>Text in a modal</h4>
              <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula.</p>

              <h4>Popover in a modal</h4>
              <p>there is a <OverlayTrigger overlay={popover}><a href="#">popover</a></OverlayTrigger> here</p>

              <h4>Tooltips in a modal</h4>
              <p>there is a <OverlayTrigger overlay={tooltip}><a href="#">tooltip</a></OverlayTrigger> here</p>

              <hr />

              <h4>Overflowing text to show scroll behavior</h4>
              <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
              <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
              <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
              <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
              <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
              <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
              <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
              <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
              <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={this.close}>Close</Button>
            </Modal.Footer>
          </Modal>
        </div>
      </div>
    );
  }

  
}

export default Home;
