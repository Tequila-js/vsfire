import React from 'react';
import ReactDOM from 'react-dom';
import ReactRouter from 'react-router';
import ChallengeView from './challenge/ChallengeView';
import Requests from './Requests/Requests';

export default class Home extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <ChallengeView user={this.props.user} />
                <Requests/>
            </div>

        );
    }
}
