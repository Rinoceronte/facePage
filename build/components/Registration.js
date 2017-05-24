import React from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import axios from 'axios';

export default class Registration extends React.Component{
  constructor(){
    super();
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event){
      // Creates a new user
      if(true){
      let name = this.refs.name.value;
      let email = this.refs.email.value;
      let password = this.refs.password.value;
      try {
          axios.post('http://localhost:3000/users',{
            email,
            name,
            password
          }).then(res => {
              console.log('We have registered a user!', res.data.User);
              if(res.data.loggedIn){
                  this.props.history.push('/secure');
              }
              this.props.login(res.data.currentUser);
          });
      }catch(e){
          console.error(`Caught: ${e}`)
      }
    }
    else {
        // // Re-renders the react component with an invalid mismatchPasswords state.
        // this.setState({
        //     errors: {
        //         mismatchPasswords: true
        //     }
        // });
    }
  }

  render(){
      let errorMessages = [];
      if(this.state.errors.mismatchPasswords){
          // React.createElement('div', null, 'Error: Passwords don't match.');
          errorMessages.push(<div className="error message">Error: Passwords do not match.</div>);
      }
    return(
      <div>
        <h3>Sign Up</h3>
            <label>Name: <input type="text" ref="name" /></label>
            <label>Email: <input type="email" ref="email" /></label>
            <label>Password: <input type="password" ref="password" /></label>
            <label>Confirm Password: <input type="password" ref="passwordConfirm" /></label>
            {}
            <button type="button" onClick={this.handleClick}>Register</button>
            <div>- or - </div>
            <div>
                <Link to="/">Home</Link>
            </div>
      </div>
    );
  }
}
