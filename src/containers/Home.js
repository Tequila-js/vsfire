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
            <div>
                <Row>
                    <Col s={12}>
                        <ChallengeView user={this.props.user} />
                    </Col>
                </Row>
                <Row>
                    <Col s={6}>
                        <Requests/>
                    </Col>
                </Row>

            </div>

        );
    }
}
