import React from 'react';
import ReactDOM from 'react-dom';
import ReactRouter from 'react-router';
import ChallengeView from './challenge/ChallengeView';

export default class Home extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
          <ChallengeView user={this.props.user} />
        );
    }
}
