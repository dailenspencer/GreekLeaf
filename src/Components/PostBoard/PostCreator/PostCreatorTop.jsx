import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Avatar from 'material-ui/Avatar';
import $ from 'jquery';
import autosize from 'autosize';
import {createMaterialAvatar, postCreatorInitialAvatar} from '../../../Helpers/RenderHelpers';

import Parse from 'parse';
import ParseReact from 'parse-react';

export default class PostCreatorTop extends React.Component {
  constructor(props){
  	super(props);
  	this.state = {

  	}
  }

  componentDidMount(){
   var ta = document.querySelector('#PostCreatorInput');
    ta.addEventListener('focus', function(){
        autosize(ta);
    });
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
      <div id="PostCreatorTop">
        <div id="PostCreatorAvatar">
          {avatar}
        </div>
        <textarea rows="3" cols="26" type="text" id="PostCreatorInput" placeholder="Whats on your mind?" onFocus={this.handleOnFocus} onBlur={this.handleOnBlur} onChange={this.props.handleTextChange} style={{'height':'50px'}}></textarea>
      </div>
    );

  }
}