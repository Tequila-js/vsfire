/**
 * Created by Daniel_Gutierrez on 2/13/2017.
 */
import React from 'react';
import {firebase,firebaseFetch} from '../../services/firebaseService';
import { Button, Row, Col, Preloader, Card, Input } from 'react-materialize';

class Result extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            me : {}
        };
    }


    handleWin(){
        firebase.update('challenges/'+this.props.challenge.key, {
            data: {
                status:4,
                result:1
            }
        }).then(() => {

        }).catch(err => {
            console.log('Error');
        });
    }

    handleLoss(){
        firebase.update('challenges/'+this.props.challenge.key, {
            data: {
                status:4,
                result:2
            }
        }).then(() => {

        }).catch(err => {
            console.log('Error');
        });
    }

    render(){

        if(this.props.challenge.user1===this.props.me.uid){
            return (
                <div>
                    <Row>
                        <Button waves='light' onClick={this.handleWin.bind(this)}>Gané &nbsp; ;)</Button>
                    </Row>
                    <Row>
                        <Button waves='light' className="red" onClick={this.handleLoss.bind(this)}>Perdí &nbsp;:(</Button>
                    </Row>
                </div>
            );
        }else{
            return (
                <div>
                    <Row>
                        <p>Pendiente</p>
                    </Row>
                </div>
            );
        }

    }
}

export default Result;