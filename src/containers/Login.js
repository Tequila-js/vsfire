import React from 'react';
import ReactDOM from 'react-dom';
import { browserHistory } from 'react-router';
import { Row, Col, Icon } from 'react-materialize';

import { firebaseLogin, firebaseFetch, getCurrentUser, firebasePost } from '../services/firebaseService';

export default class Login extends React.Component {

  constructor() {
    super();
  }

  handleLogin(e) {
    firebaseLogin()
      .then((u) => {
        browserHistory.replace('/');
        getCurrentUser().then((user) => {
          firebaseFetch('users/' + user.uid, this).then((data) => {
            if (data.length === 0) {
              firebasePost('users/' + user.uid, {
                data: {
                  displayName: user.displayName,
                  email: user.email,
                  photoURL: user.photoURL,
                }
              })
            }
          })
        });
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
