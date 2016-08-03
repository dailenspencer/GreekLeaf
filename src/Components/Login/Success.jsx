import React from 'react';

export default class Success extends React.Component {
  constructor(props){
  	super(props);
  	this.state = {

  	}
  }

  render() {
    return (
      <div id="Success">
        <h>Great!</h>
        <p>We've sent a request to your organization. Come back by when a current member accepts your request!</p>
      </div>
    );

  }
}