import React from 'react';
import CommentEntry from './CommentEntry';
import CommentCreator from './CommentCreator';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Avatar from 'material-ui/Avatar';
import $ from 'jquery';

export default class CommentSection extends React.Component {
  constructor(props){
  	super(props);
  	this.state = {
  	
  	}
  }


  render() {


    return (
      <div id="CommentSection">
        <CommentEntry/>
        <CommentCreator/>
      </div>
    );

  }
}