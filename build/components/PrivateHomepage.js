import React from 'react';
import { BrowserRouter, Route, Link, } from 'react-router-dom';
import axios from 'axios';
import Status from './Status';
import FriendsList from './FriendsList';

export default class PrivateHomepage extends React.Component{
  constructor(){
    super();
    
    this.handleFriends = this.handleFriends.bind(this);
  }

  handleFriends(){
    this.props.history.push('/secure/friends');
  };

  render(){
      
    return(
      <div>
        <h1>Welcome <a href="#">{this.props.users.firstName} {this.props.users.lastName}</a></h1>
        <button type="button" onClick={this.handleFriends}>Friends</button><br/>
        <Status {...this.props}/>
        <Route path='/secure/friends' render={(routeProps) => <FriendsList {...this.props} {...routeProps} />} />
      </div>
    );
  }
}