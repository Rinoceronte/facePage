import React from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import axios from 'axios';
import Status from './Status';
import Friends from './Friends';

export default class PrivateHomepage extends React.Component{
  constructor(){
    super();
    
  }


  render(){
      
    return(
      <div>
        <h1>Welcome {this.props.user.name}</h1>
        <Link to="/friends">Friends</Link>
        <Route path="/friends" render={(routeProps) => <Friends {...this.props} {...routeProps} />} />
        <Status />
      </div>
    );
  }
}
