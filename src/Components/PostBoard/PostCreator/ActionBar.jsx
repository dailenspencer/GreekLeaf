import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import IconButton from 'material-ui/IconButton/IconButton';
import CameraIcon from 'material-ui/svg-icons/image/add-a-photo';
import AttachmentIcon from 'material-ui/svg-icons/file/attachment';


export default class ActionBar extends React.Component {
  constructor(props){
  	super(props);
  	this.state = {
  		
  	}
  }

  
  render() {

    return (
      <div id="ActionBar">
        
        <button type="button" id="AttachMediaButton">
          <MuiThemeProvider>
            <CameraIcon style={{'color':'#6AC1B8'}}/>
          </MuiThemeProvider>
        </button>
        <button type="button" id="AttachFileButton">
          <MuiThemeProvider>
            <AttachmentIcon style={{'color':'#6AC1B8'}}/>
          </MuiThemeProvider>
        </button>
        <button type="button" id="PostButton">Post</button>
      </div>
    );

  }
}