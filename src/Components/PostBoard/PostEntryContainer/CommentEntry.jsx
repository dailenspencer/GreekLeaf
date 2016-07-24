import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Avatar from 'material-ui/Avatar';
import $ from 'jquery';

export default class CommentEntry extends React.Component {
  constructor(props){
  	super(props);
  	this.state = {
  	
  	}
  }


  render() {


    return (
      <div id="CommentEntry">
        <div id="CommentEntryAvatar">
          <MuiThemeProvider>
            <Avatar src="https://avatars2.githubusercontent.com/u/8779656?v=3&s=460" style={{'width':'35px','height':'35px'}} />
          </MuiThemeProvider>
        </div>
        <div id="CommentEntryRightContent">
           <h id="CommentEntryAuthor">Dailen Spencer</h>
           <p id="CommentEntryMessage">Lorem ips</p>
        </div>
       
        

      </div>
    );

  }
}