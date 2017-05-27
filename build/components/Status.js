import React from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import axios from 'axios';

export default class Comment extends React.Component{
  constructor(){
    super();
    this.submitStatus = this.submitStatus.bind(this);
  }

submitStatus()
{
     if(true){
      let status = this.refs.status.value;
      let date = Date.now();
      let statusUser = this.props.user._id;
      try {
          axios.post('http://localhost:3000/status',{
            statusUser,
            date,
            status
          }).then(res => {
              console.log('We have created a status', res.data.comment);
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
        <h3>What's on your mind?</h3>
        <textarea ref='status'></textarea>
        <button type="button" onclick={this.submitStatus}>Comment</button>
      </div>
    );
  }
}