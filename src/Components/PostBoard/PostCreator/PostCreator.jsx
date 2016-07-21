import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import PostCreatorTop from './PostCreatorTop';
import ActionBar from './ActionBar';

export default class PostCreator extends React.Component {
  constructor(props){
  	super(props);
  	this.state = {
  		
  	}
  }

  handleOnFocus(){
    
  }

  handleOnBlur(){
    
  }

  render() {

    return (
      <div id="PostCreator">
        <PostCreatorTop/>
        <ActionBar/>
      </div>
    );

  }
}