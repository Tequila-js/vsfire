/**
 * Created by Daniel_Gutierrez on 2/13/2017.
 */
import React from 'react';
import {firebase,firebaseFetch} from '../../services/firebaseService';
import { Button, Row, Col, Preloader, Card } from 'react-materialize';


class Pending extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            message:''
        }
    }

    handleAccept(challenge){

        firebase.update('challenges/'+challenge.key, {
            data: {
                status:1,
                comment:this.state.message
            }
        }).then(() => {
            challenge.status = 1;
        }).catch(err => {
            console.log('Error');
        });
    }

    handleChange(event) {
        this.setState({message: event.target.value});
    }

    render(){
        if(this.props.challenge.user1===this.props.me.uid){
            return (
                <div>
                    <Row>
                        <Col s={12}>
                            <p>Pendiente</p>
                        </Col>
                    </Row>

                </div>
            );
        }else{
            return (
                <div>
                    <Row>
                        <Col s={12}>
                            <p className="comment"> {this.props.challenge.comment} </p>
                        </Col>
                    </Row>
                    <Row>
                        <Col s={12}>
                            <textarea placeholder="comentario" name="" id="" cols="30" rows="20" value={this.state.message} onChange={this.handleChange.bind(this)} />
                        </Col>
                    </Row>
                    <Row>
                        <Col s={6} className="align-left">
                            <Button className="red" waves='light'>Cancelar</Button>
                        </Col>
                        <Col s={6} className="align-right">
                            <Button waves='light' onClick={this.handleAccept.bind(this, this.props.challenge)}>Aceptar</Button>
                        </Col>
                    </Row>
                </div>
            );
        }

    }

}

export default Pending;