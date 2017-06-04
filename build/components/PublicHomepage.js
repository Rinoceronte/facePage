import React from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import axios from 'axios';

import Registration from './Registration';

export default class PublicHomepage extends React.Component{
  constructor(){
    super();
    this.handleClick = this.handleClick.bind(this);
    this.handleSignup = this.handleSignup.bind(this);

     this.state = {errors: {
        invalidLogin: false
    }}
  }

handleClick(event){
      // signed in User
      
      let email = this.refs.email.value;
      let password = this.refs.password.value;
      try {
          axios.post('/login',{
            email,
            password
          }).then(res => {
              if(res.data.loggedIn){
                  this.props.history.push('/secure');
                  this.props.login(res.data.user);
              }
              else{
                this.props.history.push('/');
                 this.setState({
                  errors: {
                  invalidLogin: true
            }
        });
              }
              
          });
      }catch(e){
          console.error(`Caught: ${e}`)
      }
  }

    handleSignup(){
      this.props.history.push('/signup');
    };

  render(){
    let errorMessage = null;
    if(this.state.errors.invalidLogin){
      errorMessage = (<h4>Invalid Username or Password</h4>);
    }     
    return(
      <div>
        <h1>Welcome to facePage.</h1>
        <div>
            <h2>Sign In</h2>
            <label> Email: <input type='text' ref='email'/></label>
            <label> Password: <input type='password' ref='password'/></label>
            <button type='button' onClick={this.handleClick}>Sign In</button>
            {errorMessage}
            <div>- or -</div>
            <div>
                <button type='button' onClick={this.handleSignup}>Sign Up</button>
                {/* <Link to="/signup">Sign-up</Link> */}
                <Route path='/signup' render={(routeProps) => <Registration {...this.props} {...routeProps} />} />
            </div>
        </div>
      </div>
    );
  }
}
