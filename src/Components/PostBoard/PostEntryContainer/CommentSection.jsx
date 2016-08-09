import React from 'react';
import CommentEntry from './CommentEntry';
import CommentCreator from './CommentCreator';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Avatar from 'material-ui/Avatar';
import $ from 'jquery';
import {queryForComments} from '../../../Actions/ParseActions';

import Parse from 'parse';
import ParseReact from 'parse-react';

export default class CommentSection extends React.Component {
  constructor(props){
  	super(props);
  	this.state = {

  	}
    this.createCommentElements = this.createCommentElements.bind(this);
  }

  
  createCommentElements(comments){
    var commentElements = comments.map(function(comment, index){
      var commentData = {
        author : comment.get("Author"),
        message : comment.get("Text")
      }
      return <CommentEntry key={index} commentData={commentData}/>
    })
    return commentElements;
  }


  render() {
    var commentElements = this.createCommentElements(this.props.comments);
    return (
      <div id="CommentSection">
        {commentElements}
        <CommentCreator postId={this.props.postId} loadComments={this.loadComments} addComment={this.props.addComment}/>
      </div>
    );

  }
}
