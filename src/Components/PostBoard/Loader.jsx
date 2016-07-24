import React from 'react';

export default class Loader extends React.Component {
  constructor(props){
  	super(props);
  	this.state = {
  		visible : 'hidden'
  	}
  }

  render() {


    return (
      <div id="Loader" style={{'visibility':this.state.visible}}>
        <img src={'Images/reload.gif'} style={{'width':'50px','height':'50px'}}/>
      </div>
    );

  }
}