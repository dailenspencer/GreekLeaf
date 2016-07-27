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
    var name = this.props.commentData.author.get("name");
    var message = this.props.commentData.message;
    var profilePictureFile = this.props.postData.author.get("ProfilePicture");
    console.log(profilePictureFile);

    
    return (
      <div id="CommentEntry">
        <div id="CommentEntryAvatar">
          <MuiThemeProvider>
            <Avatar src="https://avatars2.githubusercontent.com/u/8779656?v=3&s=460" style={{'width':'35px','height':'35px'}} />
          </MuiThemeProvider>
        </div>
        <div id="CommentEntryRightContent">
           <h id="CommentEntryAuthor">{name}</h>
           <p id="CommentEntryMessage">{message}</p>
        </div>
       
        

      </div>
    );

  }
}