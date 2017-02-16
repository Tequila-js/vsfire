import React from 'react';
import ReactDOM from 'react-dom';
import ReactRouter from 'react-router';
import { Row, Col } from 'react-materialize';
import ChallengeView from './challenge/ChallengeView';
import Requests from './Requests/Requests';

export default class Home extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Row>
                <Row>
                    <Col m={6} className="offset-m3">
                        <ChallengeView user={this.props.user} />
                    </Col>
                </Row>
                <div className="divider"></div>
                <Row>
                    <Col m={6}>
                        <Requests/>
                    </Col>
                </Row>
            </Row>
        );
    }
}
