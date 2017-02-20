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
                <nav className="grey darken-4">
                    <div className="nav-wrapper">
                      <a href="javascript:;"><img src="../../public/img/VsFire_Logo_simple.png"/></a>
                      <ul id="nav-mobile" className="right">
                        <li><a onClick={(e) => this.handleLogout(e)}><Icon>power_settings_new</Icon></a></li>
                      </ul>
                    </div>
                  </nav>
                <Row className="center-align">
                    <Col s={12} m={12} className="padding-0">
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
