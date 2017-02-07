import React, { Component } from 'react';
import ContentUser from './ContentUser';
import { Modal, Button, Row, Col} from  'react-materialize';
import Link from 'react-router';
require ('./main.css');

const styles = {
  imgCircle: {
    width: '100%',
  },
  imgContainer: {
    border: '3px solid #fff',
    borderRadius: '5em',
    width: '156px',
    height: '156px',
    overflow: 'hidden',
    margin: '0 auto'
  },
  txtCenter: {
    textAlign: 'center'
  },
  modal: {
    width: '70%',
    maxHeight: '90%',
    textAlign: 'center'
  },
  userContainer: {
    backgroundColor: '#f5f5f5',
    textAlign: 'center',
    padding: '30px 20px',
    border: '1px solid #eee'
  }
}

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
            style={styles.modal}>
            <Row>
              <Col s={5} style={styles.userContainer} >
                <div style={styles.imgContainer} >
                  <img
                    style={styles.imgCircle}
                    src={this.props.user.photoURL}/>
                </div>
                <Row className="user-name">
                  <Col s={12}>
                      <p>{this.props.user.displayName}</p>
                  </Col>
                </Row>
              </Col>
              <Col s={2} style={styles.txtCenter}>
                <div className="vs-hexagon">
                  <span className="vs-hexagon-left"></span>
                  <span className="vs-hexagon-text">VS</span>
                  <span className="vs-hexagon-right"></span>
                </div>
              </Col>
              <Col s={5} style={styles.userContainer}>
                <ContentUser />
                  <Row className="user-name">
                    <Col s={12}>
                        <p></p>
                    </Col>
                  </Row>
              </Col>
            </Row>
          </Modal>
    );
  }
}

export default ChallengeView;
