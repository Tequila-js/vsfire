/**
 * Created by Daniel_Gutierrez on 2/7/2017.
 */
import React from 'react';
import {firebase,firebaseFetch} from '../../services/firebaseService';
import { Button, Row, Col, Preloader, Card } from 'react-materialize';

import Pending from './Pending';
import Result from './Result';
import Closed from './Closed';

class Solicitude extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            loading:false
        };
    }

    getChallengeInfo(){

    }

    componentDidMount(){
        this.getChallengeInfo();
    }

    right(){
        if(this.state.loading){

            return (
                <Col s={12} className="loader">
                    <Preloader flashing size='big' />
                </Col>
            );

        }else {

            switch(this.props.challenge.status){
                case 0: return ( <Pending challenge={this.props.challenge} me={this.props.me}/>);
                    break;
                case 1: return (<Result challenge={this.props.challenge} user2={this.props.user2} me={this.props.me}/>);
                    break;
                case 4: return (<Closed challenge={this.props.challenge} me={this.props.me} />);
            }
        }
    }



    render(){
        return(
            <Col s={12}>
                <Card className='darken-1' >
                    <Row>
                        <Col s={4}>
                            <Row>
                                <p className="cat">{this.props.discipline}</p>
                            </Row>
                            <Row>
                                <img className="user-img" src={this.props.user2.photoURL} alt=""/>
                            </Row>
                            <Row>
                                <p className="user-name">{this.props.user2.displayName}</p>
                            </Row>
                        </Col>
                        <Col s={8}>
                            {this.right()}
                        </Col>
                    </Row>
                </Card>
            </Col>
        );
    }
}

Solicitude.TYPES = {
    request:1,
    result:2
};

export default Solicitude;