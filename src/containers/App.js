import React from 'react';
import ReactDOM from 'react-dom';
import { browserHistory } from 'react-router';
import { getCurrentUser, firebaseLogout } from '../services/firebaseService';
import { Navbar, NavItem, Row, Col, Icon } from 'react-materialize';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: ''
        };
    }

    componentDidMount() {
        getCurrentUser().then((user) => { this.setState({ user: user }) });
    }

    handleLogout(e) {
        firebaseLogout();
    }

    render() {
        return (
            <div>
                <nav>
                    <Navbar brand='VsFire' right className="nav-wrapper  blue accent-3">
                        <NavItem href='#' onClick={(e) => this.handleLogout(e)}>Logout</NavItem>
                    </Navbar>
                </nav>
                <Row>
                    <Col m={12} className="center-align">
                        {React.cloneElement(this.props.children, { user: this.state.user })}
                    </Col>
                </Row>
            </div>
        )
    }
}
