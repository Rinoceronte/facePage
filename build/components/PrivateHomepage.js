import React from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import axios from 'axios';

export default class PrivateHomepage extends React.Component{
  constructor(){
    super();
    
  }


  render(){
      
    return(
      <div>
        <h1>Welcome {this.props.user.name}</h1>
      </div>
    );
  }
}
