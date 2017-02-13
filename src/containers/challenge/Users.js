import React, { Component } from 'react';
import Rebase from 're-base';
import { firebaseFetch } from '../../services/firebaseService';
import { Button, Row, Col} from  'react-materialize';

class Users extends Component {
  constructor(props){
    super(props);
    this.state = {
      userData: [],
      userData_ops: [],
      userCount: 0,
      searchTerm: ''
    };
    this.userData_filter = [];
    this.mainUser = null;
  }
  reducer(userData_reduced, userData, index){
      let userData_uppercase;
      if(this.mainUser.uid !== userData.key){
          userData_reduced.push(userData);
      }
      return userData_reduced;
  }
  handleChangeSearch(event) {
      this.setState({searchTerm: event.target.value.toUpperCase()})
  }
  componentDidMount(){
    firebaseFetch('users', this, true)
        .then(data => {
            this.setState({userData: data, userCount: data.length});
            this.setState({userData_ops: this.state.userData.reduce(this.reducer.bind(this), this.userData_filter)});
        })
        .catch(error => {
            console.error(error + " Couldn't fetch the data.");
        })
  }
  render(){
    this.mainUser = this.props.user;
    return(
        <Row>
          <Row>
            <Col s={9}>
              <input type="text" name="search-user" placeholder="Search User" id="search" value={this.state.searchTerm}  onChange={this.handleChangeSearch.bind(this)}/>
            </Col>
            <Col s={3}>
              <Button floating large className='blue' waves='light' icon='add' />
            </Col>
          </Row>
          <Row>
            <Col s={12}>
                <ul>
                  {
                    this.state.userData_ops
                    .map((data, i) => {
                        if(data.displayName.toUpperCase().search(this.state.searchTerm) !== -1){
                            return <li
                                key={i}
                                className="users-li">
                                <a href="#">
                                    <img
                                    src={data.photoURL}
                                    alt={data.displayName}/>
                                <span className="users-name-label">{data.displayName}</span>
                                </a>
                            </li>
                        }
                    })
                  }
                </ul>
            </Col>
          </Row>
        </Row>
    );
  }
}

export default Users;
