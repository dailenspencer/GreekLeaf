import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Avatar from 'material-ui/Avatar';
import $ from 'jquery';
import autosize from 'autosize';
import {createMaterialAvatar, postCreatorInitialAvatar} from '../../../Helpers/RenderHelpers';

import Parse from 'parse';
import ParseReact from 'parse-react';

import {saveComment} from '../../../Actions/ParseActions';

export default class CommentCreator extends React.Component {
  constructor(props){
  	super(props);
  	this.state = {

  	}
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  componentDidMount(){
    var ta = document.querySelector('#CommentCreatorInput');
    ta.addEventListener('focus', function(){
        autosize(ta);
    });
  }

  handleKeyPress(e){
    if(e.key === "Enter" && e.target.value !== ""){
      const text = e.target.value
      saveComment(text,this.props.postId).then((resp) => {
        this.props.addComment(resp);
        $('#CommentCreatorInput').val("");
      })
    }
  }

  render() {

    var currentUser = Parse.User.current()
    var profilePictureFile = currentUser.get("ProfilePicture")
    var name = currentUser.get('name');
    var avatar;
    if(profilePictureFile){
      avatar = createMaterialAvatar(profilePictureFile.url())
    } else {
      avatar = postCreatorInitialAvatar(name);
    }


    return (
      <div id="CommentCreator">
        <div id="CommentCreatorAvatar">
          {avatar}
        </div>
        <textarea rows="3" cols="26" type="text" id="CommentCreatorInput" placeholder="Write a comment..." onKeyPress={this.handleKeyPress.bind(this)} onFocus={this.handleOnFocus} onBlur={this.handleOnBlur} style={{'height':'50px'}}></textarea>
      </div>
    );

  }
}
