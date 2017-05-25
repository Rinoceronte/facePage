import React from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import axios from 'axios';

import Registration from './Registration';

export default class PublicHomepage extends React.Component{
  constructor(){
    super();
    
  }

  handleClick(){

  }

  render(){
      
    return(
      <div>
        <h2>Welcome to facePage.</h2>
        <div>
            <h2>Sign In</h2>
            <label> User Name: <input type='text' ref='username'/></label>
            <label> Password: <input type='password' ref='password'/></label>
            <button type='button' onClick={PublicHomepage}>Sign In</button>
            <div>- or -</div>
            <div>
                <Link to="/signup">Sign-up</Link>
                <Route path='/signup' render={(routeProps) => <Registration {...this.props} {...routeProps} />} />
            </div>
        </div>
      </div>
    );
  }
}
