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
  	   comments : ''
  	}
    this.createCommentElements = this.createCommentElements.bind(this);
    this.loadComments = this.loadComments.bind(this);
  }

  componentDidMount(){
    this.loadComments();
  }

  loadComments(){
    console.log(this.props.postId);
    queryForComments(this.props.postId).then((resp) => {
      this.createCommentElements(resp);
      this.clearCommentCreator();
    })
  }



  createCommentElements(comments){
    var commentElements = comments.map(function(comment, index){
      var commentData = {
        author : comment.get("Author"),
        message : comment.get("Text")
      }
      return <CommentEntry key={index} commentData={commentData}/>
    })
    console.log('set state');
    this.setState({comments: commentElements})
  }


  render() {
    return (
      <div id="CommentSection">
        {this.state.comments}
        <CommentCreator postId={this.props.postId} loadComments={this.loadComments}/>

      </div>
    );

  }
}
