import React, { Component } from 'react';
import Users from './Users';
import { Modal, Button, Row, Col} from  'react-materialize';
import Link from 'react-router';
import './challenge.css';

class ChallengeView extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
          <Modal
            header='Select Match'
            fixedFooter
            trigger={
                <Button waves='light'>Create Challenge</Button>
            }
            className="modal">
            <Row className="row-container">
              <Col s={5} className="user-container" >
                <div className="main-user-container" >
                  <img
                    className="main-user-img"
                    src={this.props.user.photoURL}/>
                </div>
                <Row className="user-name">
                  <Col s={12}>
                      <p>{this.props.user.displayName}</p>
                  </Col>
                </Row>
              </Col>
              <Col s={2} className="txt-center">
                <div className="vs-hexagon">
                  <span className="vs-hexagon-left"></span>
                  <span className="vs-hexagon-text">VS</span>
                  <span className="vs-hexagon-right"></span>
                </div>
              </Col>
              <Col s={5} className="user-container">
                <Users user={this.props.user}/>
              </Col>
            </Row>



          </Modal>
    );
  }
}

export default ChallengeView;
