import React from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import axios from 'axios';

import Registration from './Registration';

export default class PublicHomepage extends React.Component{
  constructor(){
    super();
    this.handleClick = this.handleClick.bind(this);
  }

handleClick(event){
      // Creates a new user
      if(true){
      let email = this.refs.email.value;
      let password = this.refs.password.value;
      try {
          axios.post('http://localhost:3000/login',{
            email,
            password
          }).then(res => {
              console.log('We have registered a user!', res.data.user);
              if(res.data.loggedIn){
                  this.props.history.push('/secure');
              }
              this.props.login(res.data.user);
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
      
    return(
      <div>
        <h2>Welcome to facePage.</h2>
        <div>
            <h2>Sign In</h2>
            <label> Email: <input type='text' ref='email'/></label>
            <label> Password: <input type='password' ref='password'/></label>
            <button type='button' onClick={this.handleClick}>Sign In</button>
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
