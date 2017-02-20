import React from 'react';
import ReactDOM from 'react-dom';
import { browserHistory } from 'react-router';
import { Row, Col, Icon } from 'react-materialize';
import './login.css';
import '../../public/styles/styles.css';

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
      <Row className="login-container">
        <Col m={12} s={12} className="login-bg">
            <Row>
                <Col m={6} s={6} className="center-align">
                    <h1 className="hiddenMessage">VsFire Leaderboard</h1>
                    <img src="../../public/img/VsFire_Logo_login.png"/>
                </Col>
                <Col m={6} s={6}>
                    <h2 className="login-description">Fire in your blood, show the power as&nbsp;a leader.</h2>
                    <a className="btn-large red accent-2 z-depth-3" onClick={(e) => this.handleLogin(e)}>Sign in with Facebook</a>
                </Col>
            </Row>
        </Col>
      </Row>
  );
  }
}
