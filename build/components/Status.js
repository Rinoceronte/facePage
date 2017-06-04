import React from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import axios from 'axios';

export default class Status extends React.Component{
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
          axios.put(`/user/${this.props.user._id}/status`,{
            status
          }).then(res => {
              console.log('We have created a status', res.data.status);
              //when you make these requests, your state will change.
            //This means redux needs to know about those changes.
            //In order for redux to be notified, that their user state has changed,
            // we must dispatch an action to propigate the new user state object to all of the children components.
            // so that the children components will re-render.

              this.props.changeStatus(res.data);
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
      let statuses = [];
      statuses = this.props.user.statuses.map(s => <li key={s._id+'-status'}>{s.status}</li>);
    return(
      <div>
        <div>
          <h3>What's on your mind?</h3>
          <textarea ref='status' id='newStatus'></textarea><br/>
          <button type="button" onClick={this.submitStatus}>Submit</button>
        </div>
        <ul>
            {statuses}
        </ul>
      </div>
    );
  }
}