import React from 'react';
import ReactDOM from 'react-dom';
import { browserHistory } from 'react-router';
import { getCurrentUser, firebaseLogout } from '../services/firebaseService';
import { Navbar, NavItem, Row, Col, Icon } from 'react-materialize';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import '../../public/styles/styles.css';

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
                    <Navbar brand='VsFire' right className="nav-wrapper blue accent-3 z-index">
                        <NavItem href='#' onClick={(e) => this.handleLogout(e)}>Logout</NavItem>
                    </Navbar>
                </nav>
                <Row>
                    <Col m={12} className="center-align">
                        <ReactCSSTransitionGroup
                            component="div"
                            className="transition-group"
                            transitionName="page"
                            transitionEnterTimeout={1000}
                            transitionLeaveTimeout={1000}
                            >
                            {React.cloneElement(this.props.children, { user: this.state.user, key: (this.props.location.pathname) })}
                        </ReactCSSTransitionGroup>
                    </Col>
                </Row>
            </div>
        )
    }
}
