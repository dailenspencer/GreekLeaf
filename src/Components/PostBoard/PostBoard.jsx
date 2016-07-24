import React from 'react';
import Loader from './Loader';
import PostEntryContainer from './PostEntryContainer/PostEntryContainer'
import PostCreator from './PostCreator/PostCreator';

export default class PostBoard extends React.Component {
  constructor(props){
  	super(props);
  	this.state = {
  		
  	}
  }

  render() {


    return (
      <div id="PostBoard">
        <Loader/>
        <PostCreator/>
        <PostEntryContainer/>
      </div>
    );

  }
}