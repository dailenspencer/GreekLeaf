import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Avatar from 'material-ui/Avatar';

export function createMaterialAvatar(url){
	return (
        <MuiThemeProvider>
          <Avatar src={url} />
        </MuiThemeProvider>
    )
}


export function profileContainerInitialAvatar(name){
	var initials = getInitials(name);
	return (
        <div id="profileContainerInitialAvatar">
          <span id="profileContainerInitials">{initials}</span>
        </div>
      )
}

export function postCreatorInitialAvatar(name){
	var initials = getInitials(name);
	return (
      <div className="postCreatorInitialAvatar">
        <span className="postCreatorInitials">{initials}</span>
      </div>
   )
}

export function postEntryInitialAvatar(name){
	var initials = getInitials(name);
	return (
      <div className="postEntryInitialAvatar">
        <span className="postEntryInitials">{initials}</span>
      </div>
   )
}

function getInitials(name){
	var nameArray = name.split(" ");
	return nameArray[0].charAt(0) + nameArray[1].charAt(0);
}