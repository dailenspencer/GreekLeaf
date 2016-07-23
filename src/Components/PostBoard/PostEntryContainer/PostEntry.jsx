import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Avatar from 'material-ui/Avatar';

export default class PostEntry extends React.Component {
  constructor(props){
  	super(props);
  	this.state = {
  		
  	}
  }

  render() {


    return (
      <div id="PostEntry">
        <div id="PostEntryTop">
          <div id="PostEntryAvatar">
            <MuiThemeProvider>
              <Avatar src="https://avatars2.githubusercontent.com/u/8779656?v=3&s=460" />
            </MuiThemeProvider>
          </div>
          <h id="PostEntryAuthor">Dailen Spencer</h>
          <p id="PostEntryTime">30 minutes ago</p>
          <p id="PostEntryMessage">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
          <div className="heart"></div>
        </div>
      </div>
    );

  }
}