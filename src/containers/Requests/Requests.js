/**
 * Created by Daniel_Gutierrez on 2/7/2017.
 */
import React from 'react';
import { Button, Row, Col, Icon } from 'react-materialize';

import Solicitude from './Solicitude'

class Request extends React.Component{

    constructor(props){
        super(props);
    }

    render(){
        return(
            <Row>
                <Solicitude key={1}/>
                <Solicitude key={2}/>
            </Row>
        );
    }
}

export default Request;