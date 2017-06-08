import React from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import axios from 'axios';

import PrivateHomepage from './PrivateHomepage';
import PublicHomepage from './PublicHomepage';

export default class Authenticate extends React.Component{
  constructor(){
    super();
    this.handleUserHome = this.handleUserHome.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }

  handleUserHome(){
    this.props.history.push('/secure');
  };

  handleLogout(){
    this.props.history.push('/');
    this.props.logout();
  };

  render(){
      
    return(
      <div>
        {/*<Link to="/secure">Home</Link><br/>*/}
        <button type="button" onClick={this.handleUserHome}>Home</button><br/>
        <button type="button" onClick={this.handleLogout}>Log Out</button>
        {/*<a href="#" onClick={this.handleLogout}>Log Outtt</a>*/}
        <Route path="/secure" render={() => <PrivateHomepage {...this.props} />}/>
      </div>
    );
  }
}