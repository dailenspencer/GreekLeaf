import React from 'react';

export default class LoginLoader extends React.Component {
  constructor(props){
  	super(props);
  	this.state = {

  	}
  }

  render() {
    return (
      <div id="LoginLoader">
        <img src={'../../../Images/ring-alt.gif'} style={{'width':'50px','height':'50px'}}/>
      </div>
    );

  }
}