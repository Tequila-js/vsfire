/**
 * Created by Daniel_Gutierrez on 2/7/2017.
 */
import React from 'react';
import { Button, Row, Col, Icon, Card } from 'react-materialize';

class Solicitude extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <Col s={6}>
                <Card className='blue-grey darken-1' textClassName='white-text' title='Card title' >
                    <Row>
                        <Col s={6}>
                        <span className="cat">
                            FIFA 17
                        </span>
                            <div className="user">
                                <img src="https://university.mongodb.com/static/images/instructors/mongodb_shaun_verch2.f446c4df52ca.png" alt=""/>
                            </div>
                            <p className="user-name">Name</p>
                        </Col>
                        <Col s={6}>
                            <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur autem deleniti, eum hic iure mollitia pariatur quia voluptate? Alias culpa debitis dolorem ex modi, numquam repellat totam ullam velit veniam. </p>
                            <textarea name="" id="" cols="30" rows="10"></textarea>
                            <div>
                                <Button waves='light'>button</Button>
                                <Button waves='light'>button<Icon right>cloud</Icon></Button>
                            </div>
                        </Col>
                    </Row>
                </Card>
            </Col>
        );
    }
}

export default Solicitude;