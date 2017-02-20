import React from 'react';
import ReactDOM from 'react-dom';
import ReactRouter from 'react-router';
import { Row, Col } from 'react-materialize';

import ChallengeView from './challenge/ChallengeView';
import Requests from './Requests/Requests';
import { Navbar, NavItem, Row, Col, Icon } from 'react-materialize';

export default class Home extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Row>
                <Col s={12} m={12} className="section-create-challenge">
                    <h2 className="home-title">START YOUR OWN RECORD</h2>
                    <p className="home-subtitle">VsFire is your LEADERBOARD.</p>
                    <ChallengeView user={this.props.user} />
                    <Requests/>
                </Col>
            </Row>
        );
    }
}
