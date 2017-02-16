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
      searchTerm: '',
      onHoverUserData: '',
      userChallenged: {},
      //userChallengedName: '',
      userSelection: true,
      userSelected: false,
      btnControl: false
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
  onChangeSearch(displayName) {
      this.setState({
          searchTerm: displayName.target.value.toUpperCase(),
          userChallenged: {}
      })
  }
  onHoverSearch(displayName) {
      this.setState({onHoverUserData: displayName.toUpperCase()})
  }
  onClickSearch(displayName, data) {
      this.setState({
          searchTerm: displayName.toUpperCase(),
          userChallenged: data
      })
  }
  onClickSelection() {
      this.setState({
          //userChallengedName: this.state.userChallenged.displayName,
          userSelection: false,
          userSelected: true
      });      
      this.props.handleSelectedUser(this.state.userChallenged.key);
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
    let userSelection = this.state.userSelection ? 'user-selection-true' : 'user-selection-false';
    let userSelected = this.state.userSelected ? 'user-selected-true' : 'user-selected-false';
    let btnControl = this.state.btnControl ? 'enabled' : 'disabled';
    return(
        <Row>
            <Row className={userSelection}>
              <Row className="row-search">
                <Col s={9}>
                  <input type="text" name="search-user" placeholder="Search User" id="search" value={this.state.searchTerm} placeholder={this.state.onHoverUserData} onChange={this.onChangeSearch.bind(this)}/>
                </Col>
                <Col s={3}>
                  <Button floating large className='blue' waves='light' disabled={!this.state.userChallenged.displayName} icon='&#x2714;' onClick={this.onClickSelection.bind(this)}/>
                </Col>
              </Row>
              <Row className="row-users">
                    <Col s={12}>
                        <ul>
                          {
                            this.state.userData_ops
                            .map((data, i) => {
                                if(data.displayName.toUpperCase().search(this.state.searchTerm) !== -1){
                                    return <li
                                        onMouseOver={this.onHoverSearch.bind(this, data.displayName)}
                                        onClick={this.onClickSearch.bind(this, data.displayName, data)}
                                        key={i}
                                        className="users-li">
                                        <a href="#">
                                            <img
                                            src={data.photoURL}
                                            alt={data.displayName}/>
                                        </a>
                                    </li>
                                }
                            })
                          }
                        </ul>
                    </Col>
                </Row>
            </Row>
            <Row className={userSelected}>
                <div className="main-user-container" >
                  <img
                    className="main-user-img"
                    src={this.state.userChallenged.photoURL}/>
                </div>
                <Row className="user-name">
                  <Col s={12}>
                      <p>{this.state.userChallenged.displayName}</p>
                  </Col>
                </Row>
            </Row>
        </Row>
    );
  }
}

export default Users;
