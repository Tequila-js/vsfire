import React, { Component } from 'react';
import Users from './Users';
import { Modal, Button, Row, Col, Input, Preloader } from 'react-materialize';
import Link from 'react-router';
import { firebaseFetch, firebasePost } from '../../services/firebaseService';
import './challenge.css';

class ChallengeView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      disciplines: [],
      challengedUser: '',
      selectedDiscipline: '',
      comment: '',
      isLoading: false,
      user:''
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

  handleSelectedUser(userKey) {
    this.setState({ challengedUser: userKey })
  }

  onBlurComment(event) {
    this.setState({ comment: event.target.value });
  }

  onChangeSelect(event) {
    this.setState({ selectedDiscipline: event.target.value });
  }

  sendChallenge() {
    if (this.state.challengedUser !== '') {
      this.setState({ isLoading: true });
      firebasePost('challenges', {
        data: {
          sender: this.state.user,
          receiver: this.state.challengedUser,
          status: 1,
          comment: this.state.comment,
          discipline: this.state.selectedDiscipline
        }
      }).then(() => this.setState({ isLoading: false }))
    } else {
      console.log('mensaje de error');
    }
  }

  render() {
    let layout;
    if (this.state.isLoading) {      
      layout = (
        <Col s={12} className="loader">
          <Preloader flashing size='big' />
        </Col>
      )
    } else {
      layout = (
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
              <Users handleSelectedUser={this.handleSelectedUser.bind(this)} user={this.props.user} />
            </Col>
          </Row>
          <Row>
            <Col m={6} className="txt-center offset-m3">
              <Input m={12} type='select' label="Challenge" defaultValue='0' onChange={this.onChangeSelect.bind(this)}>
                {
                  this.state.disciplines.map((discipline, i) => {
                    return <option value={i} key={i}>{discipline}</option>
                  })
                }
              </Input>
              <Col m={12} className="input-field">
                <label className="">Comment</label>
                <textarea id="comment" className="materialize-textarea" onBlur={this.onBlurComment.bind(this)}></textarea>
              </Col>
            </Col>
          </Row>
        </Row>
      )
    }

    return (
      <Modal
        header='Select Match'
        trigger={
          <Button waves='light'>Create Challenge</Button>
        }
        actions={
          [
            <Button waves='light' modal='close' flat>Close</Button>,
            <Button waves='light' className="teal" onClick={this.sendChallenge.bind(this)}>Send Challenge</Button>
          ]
        }
        className="modal">        
          {layout}        
      </Modal>
    );
  }
}

export default ChallengeView;
