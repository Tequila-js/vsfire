import React from 'react';
import ReactDOM from 'react-dom';
import { browserHistory } from 'react-router';
import { Row, Col, Icon } from 'react-materialize';

import {firebaseLogin} from '../services/firebaseService';

export default class Login extends React.Component {

  constructor() {
    super();
  }

  handleLogin(e) {
    
    firebaseLogin()
      .then((u) => {
        browserHistory.replace('/');
      }).catch((e) => {
        console.log(e);
      });
  }

  render() {
    return (
        <Row>
          <Col m={12} s={12} className="center-align">
            <a className="btn-large" onClick={(e) => this.handleLogin(e)}>Login</a>
          </Col>
        </Row>
    )
  }
}
