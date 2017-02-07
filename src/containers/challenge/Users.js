import React, { Component } from 'react';
import Rebase from 're-base';

const base = Rebase.createClass({
    apiKey: "AIzaSyAhVXAL_KEa014DtmgTz0ylHiGfjmy1oEs",
    authDomain: "vsfire-588df.firebaseapp.com",
    databaseURL: "https://vsfire-588df.firebaseio.com/",
    //storageBucket: "qwales1-test.appspot.com",
});

const styles = {
  userLi: {
    display: 'inline-block'
  },
  userImg: {
    border: '3px solid #FFF',
    borderRadius: '3em',
    margin: '5px'
  }
}
class Users extends Component {
  constructor(props){
    super(props);
    this.state = {
      userData: [],
      userCount: 0
    };
  }
  getUsers(){
    base.fetch('users', {
      context: this,
      asArray: true,
      then(data){
        this.setState({userData: data, userCount: data.length});
      }
    });
  }
  componentDidMount(){
    this.getUsers();
  }
  render(){
    return(
      <ul>
        {
          this.state.userData
          .map((data, i) =>
            <li
              key={i}
              style={styles.userLi}>
              <img
                src={data.picture.medium}
                alt={data.name.first}
                style={styles.userImg}/>
            </li>)
        }
      </ul>
    );
  }
}

export default Users;
