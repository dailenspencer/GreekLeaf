import React from 'react';

export default class Loader extends React.Component {
  constructor(props){
  	super(props);
  	this.state = {

  	}
  }

  render() {
    return (
      <div id="Loader" style={{'visibility':this.props.visible}}>
        <img src={'Images/reload.gif'} style={{'width':'50px','height':'50px'}}/>
      </div>
    );

  }
}