/**
 * Created by Daniel_Gutierrez on 2/14/2017.
 */
/**
 * Created by Daniel_Gutierrez on 2/13/2017.
 */
import React from 'react';
import {firebase,firebaseFetch,getCurrentUser} from '../../services/firebaseService';
import { Button, Row, Col, Preloader, Card } from 'react-materialize';


class Closed extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            me:{}
        }
    }

    componentDidMount(){
        getCurrentUser().then(user => {
            this.setState({me:user});
        });
    }

    render(){

        if(this.props.challenge.user1===this.state.me.uid){
            if(this.props.challenge.result === 1){
                return (
                    <Row>
                        <Col s={12}>
                            <p>Ganáste</p>
                        </Col>
                    </Row>
                );
            }else{
                return (
                    <Row>
                        <Col s={12}>
                            <p>Perdíste</p>
                        </Col>
                    </Row>
                );
            }
        }else{
            if(this.props.challenge.result === 1){
                return (
                    <Row>
                        <Col s={12}>
                            <p>Perdíste</p>
                        </Col>
                    </Row>
                );
            }else{
                return (
                    <Row>
                        <Col s={12}>
                            <p>Ganáste</p>
                        </Col>
                    </Row>
                );
            }
        }



    }

}

export default Closed;