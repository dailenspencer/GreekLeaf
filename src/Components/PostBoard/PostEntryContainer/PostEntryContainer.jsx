import React from 'react';
import PostEntry from './PostEntry'

export default class PostEntryContainer extends React.Component {
  constructor(props){
  	super(props);
  	this.state = {
  		
  	}
  }

  render() {

    return (
      <div id="PostEntryContainer">
        {this.props.posts}
      </div>
    );

  }
}