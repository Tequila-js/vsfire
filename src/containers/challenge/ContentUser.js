import React, { Component } from 'react';
import { Button, Row, Col} from  'react-materialize';
import Users from './Users';

class ContentUser extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Row>
        <Row>
          <Col s={9}>
            <input type="text" name="search-user" placeholder="Search User" />
          </Col>
          <Col s={3}>
            <Button floating large className='blue' waves='light' icon='add' />
          </Col>
        </Row>
        <Row>
          <Col s={12}>
            <Users />
          </Col>
        </Row>
      </Row>
    );
  }
}

export default ContentUser;
