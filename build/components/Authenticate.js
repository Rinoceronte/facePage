import React from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import axios from 'axios';

import PrivateHomepage from './PrivateHomepage';

export default class Authenticate extends React.Component{
  constructor(){
    super();
    
  }

  handleLogout(){
    this.props.logout();
    this.props.history.push('/');
  };

  render(){
      
    return(
      <div>
        <Link to="/secure">Home</Link><br/>
        <a href="">Log Out</a>
        <Route exact path="/secure" render={() => <PrivateHomepage {...this.props} />}/>
      </div>
    );
  }
}