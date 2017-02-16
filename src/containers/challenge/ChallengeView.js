import React, { Component } from 'react';
import Users from './Users';
import { Modal, Button, Row, Col, Input } from 'react-materialize';
import Link from 'react-router';
import { firebaseFetch } from '../../services/firebaseService';
import './challenge.css';

class ChallengeView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      disciplines: []
    }
  }

  componentDidMount() {
    firebaseFetch('disciplines', this, true)
      .then(data => {
        this.setState({ disciplines: data })
      })
      .catch(error => {
        console.error(error + " Couldn't fetch the data.");
      })
  }

  render() {
    return (
      <Modal
        header='Select Match'
        trigger={
          <Button waves='light'>Create Challenge</Button>
        }
        actions={
          [
            <Button waves='light' modal='close' flat>Close</Button>,
            <Button waves='light' className="teal" >Send Challenge</Button>
          ]
        }
        className="modal">
        <Row className="row-container">
          <Row>
            <Col s={5} className="user-container" >
              <div className="main-user-container" >
                <img
                  className="main-user-img"
                  src={this.props.user.photoURL} />
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
              <Users user={this.props.user} />
            </Col>
          </Row>
          <Row>
            <Col m={6} className="txt-center offset-m3">
              <Input m={12} type='select' label="Challenge" defaultValue='0'>
                {
                  this.state.disciplines.map((discipline, i) => {
                    return <option value={i} key={i}>{discipline}</option>
                  })
                }
              </Input>
              <Col m={12} className="input-field">
                <label className="">Comment</label>
                <textarea id="comment" className="materialize-textarea"></textarea>                
              </Col>              
            </Col>
          </Row>
        </Row>
      </Modal>
    );
  }
}

export default ChallengeView;
