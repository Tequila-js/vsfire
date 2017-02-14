/**
 * Created by Daniel_Gutierrez on 2/7/2017.
 */
import React from 'react';
import { Button, Row, Col, Icon, Preloader } from 'react-materialize';

import './request.css';
import Solicitude from './Solicitude'
import {firebaseFetch,firebase,getCurrentUser} from '../../services/firebaseService'


class Request extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            me:{},
          challenges:[],
            users:[],
            others:[],
            disciplines:[],
            count:0,
            isLoading:true
        };
    }

    getChallenges(){
        firebase.listenTo('challenges', {
            context: this,
            asArray: true,
            then: (challenges) => {
                this.setState({
                    challenges:challenges
                });
                this.state.challenges.forEach(val=>{
                    let otherUser = '';
                    if(val.user1 === this.state.me.uid ){
                        otherUser = val.user2;
                    }
                    if(val.user2 === this.state.me.uid ){
                        otherUser = val.user1;
                    }

                    this.setState({
                        others : this.state.others.concat([otherUser])
                    });

                    firebaseFetch('users/'+otherUser,this,false).then(user=>{
                        let aux = [user];
                        this.setState({
                            users : this.state.users.concat(aux)
                        });
                        this.setState({
                                count:this.state.count + 1
                            });
                        if(this.state.count==this.state.challenges.length*2){
                            this.setState({
                                isLoading:false
                            });
                        }
                    });
                    firebaseFetch('disciplines/'+val.discipline,this,false).then(discipline=>{
                        let aux = [discipline];
                        this.setState({
                            disciplines : this.state.disciplines.concat(aux)
                        });
                        this.setState({
                                count:this.state.count + 1
                            });
                        if(this.state.count==this.state.challenges.length*2){
                            this.setState({
                                isLoading:false
                            });
                        }
                    });
                });
            }
        });
    }

    componentDidMount() {
        getCurrentUser().then(user => {
            this.setState({me:user});
        });
        this.getChallenges();
    }

    render(){

        if(this.state.isLoading){

            return (
                <Col s={12} className="loader">
                    <Preloader flashing size='big' />
                </Col>
            );

        }else {

            return(
                <Row>
                    <Col s={12} className="solicitudes-container">
                        {this.state.challenges.map((val,index) => {
                                if(this.state.others[index]!='')
                                return (
                                        <Solicitude challenge={val} user2={this.state.users[index]} discipline={this.state.disciplines[index]} type={val.type} me={this.state.me} key={index}/>
                                );

                            }

                        )}
                    </Col>
                </Row>
            );
        }

    }
}

export default Request;