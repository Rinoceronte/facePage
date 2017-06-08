import React from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import axios from 'axios';

export default class Registration extends React.Component{
  constructor(){
    super();
    this.state = {errors: {
        mismatchPasswords: false
    }}
    this.handleClick = this.handleClick.bind(this);
    this.handleHome = this.handleHome.bind(this);
  }

    handleGender(){
        let male = this.refs.male.checked;
        let female = this.refs.female.checked;
        let other = this.refs.other.checked;
        if (male)
        return "Male"
        if (female)
        return "Female"
        if (other)
        return "Other"
    }

  handleClick(event){
      // Creates a new user
      if(true){
        let firstname = this.refs.firstname.value;
        let lastname = this.refs.lastname.value;
        let email = this.refs.email.value;
        let password = this.refs.password.value;
        let age = this.refs.age.value;
        let gender = this.handleGender();
        let school = this.refs.school.value;
        let job = this.refs.job.value;
      try {
          axios.post('/users',{
            firstName: firstname,
            lastName: lastname,
            email: email,
            age: age,
            gender: gender,
            school: school,
            job: job,
            password: password
          }).then(res => {
              console.log('We have registered a user!', res.data.user);
              if(res.data.loggedIn){
                  this.props.login(res.data.user);
                  this.props.history.push('/secure');
              }
              
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

    handleHome(){
      this.props.history.push('/');
    };

    render(){
      let errorMessages = [];
      if(this.state.errors.mismatchPasswords){
          // React.createElement('div', null, 'Error: Passwords don't match.');
          errorMessages.push(<div className="error message">Error: Passwords do not match.</div>);
    }
    return(
      <div>
        <h3>Sign Up</h3>
            <label>First Name: <input type="text" ref="firstname" /></label><br />
            <label>Last Name: <input type="text" ref="lastname" /></label><br />
            <label>Email: <input type="email" ref="email" /></label><br />
            <label>Password: <input type="password" ref="password" /></label><br />
            <label>Confirm Password: <input type="password" ref="passwordConfirm" /></label><br />
            <label>Age: <input type="number" ref="age" /></label><br />
                <label >Gender: 
                    <input type="radio" name="genders" value="male" ref="male"/>Male
                    <input type="radio" name="genders" value="female" ref="female"/>Female
                    <input type="radio" name="genders" value="other" ref="other"/>Other
                </label><br />
                    <label>School: <input type="text" ref="school" /></label><br />
                    <label>Job: <input type="text" ref="job" /></label><br />
            <button type="button" onClick={this.handleClick}>Register</button>
            {/*<div>- or - </div>*/}
            <div>
                <button type="button" onClick={this.handleHome}>Home</button>
            </div>
      </div>
    );
  }
}