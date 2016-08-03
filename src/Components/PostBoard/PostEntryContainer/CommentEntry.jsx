import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Avatar from 'material-ui/Avatar';
import $ from 'jquery';
import {createMaterialAvatar, postCreatorInitialAvatar} from '../../../Helpers/RenderHelpers';

export default class CommentEntry extends React.Component {
  constructor(props){
  	super(props);
  	this.state = {
  	
  	}
  }


  render() {

    var name = this.props.commentData.author.get("name");
    var message = this.props.commentData.message;
    var profilePictureFile = this.props.commentData.author.get("ProfilePicture");
    var avatar;
    if(profilePictureFile){
      avatar = createMaterialAvatar(profilePictureFile.url())
    } else {
      avatar = postCreatorInitialAvatar(name);
    }
    
    return (
      <div id="CommentEntry">
        <div id="CommentEntryAvatar">
          {avatar}
        </div>
        <div id="CommentEntryRightContent">
           <h id="CommentEntryAuthor">{name}</h>
           <p id="CommentEntryMessage">{message}</p>
        </div>
       
        

      </div>
    );

  }
}