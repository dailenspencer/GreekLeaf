import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Avatar from 'material-ui/Avatar';

export default class PostCreatorTop extends React.Component {
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
      <div id="PostCreatorTop">
        <MuiThemeProvider>
          <Avatar id="PostCreatorAvatar" src="https://avatars2.githubusercontent.com/u/8779656?v=3&s=460" />
        </MuiThemeProvider>
        <textarea rows="3" cols="26" type="text" id="PostCreatorInput" placeholder="Whats on your mind?" onFocus={this.handleOnFocus} onBlur={this.handleOnBlur}></textarea>
      </div>
    );

  }
}