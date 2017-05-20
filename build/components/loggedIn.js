import React from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import axios from 'axios';

const Home = () => (
  <div>
    <h2>Welcome to facePage</h2>
  </div>
)

class SignUp extends React.Component{
  constructor(){
    super();
    this.signUp = this.signUp.bind(this);
  }
  signUp() {
    axios.post('/register', {
    login: {
      userName: '',
      password: ''
    }
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log('This user has already been created.');
  });
  
  }

  render(){
    return(
      <div>
        <h2>Sign Up</h2>
        <label> User Name: <input type='text' ref='username'/></label>
        <label> Password: <input type='text' ref='password'/></label>
        <label> Confirmation: <input type='text' ref='confirmation'/></label>
        <button onClick={signUp} type='button'>Sign Up</button><br />
        <Link to='/'>Home</Link>
      </div>
      );
  }
}

class SignIn extends React.Component{
  constructor(){
    super();
    this.signIn = this.signIn.bind(this);
  }
  signIn() {
    axios.post('/register', {
    login: {
      userName: '',
      password: ''
    }
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log('This user has already been created.');
  });
  
  }
  render(){
    return(
    <div>
        <h2>Sign In</h2>
        <label> User Name: <input type='text' ref='username'/></label>
        <label> Password: <input type='text' ref='password'/></label>
        <button onClick={signIn} type='button'>Sign In</button>
    </div>
    );
  }
}

export default class LoggedIn extends React.Component{
  constructor(){
    super();

  }

  render(){
    return(
      <Router>
        <div>
          <SignIn/>
            <div>
              or
            </div>
            <div>
              <Link to='/register'>Register</Link>
            </div>
            <Route exact path="/register" component={SignUp}/>
        </div>
      </Router>
      );

  }
}
