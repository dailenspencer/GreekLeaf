import React from 'react';
import CommentEntry from './CommentEntry';
import CommentCreator from './CommentCreator';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Avatar from 'material-ui/Avatar';
import $ from 'jquery';
import {queryForComments} from '../../../Actions/ParseActions';

export default class CommentSection extends React.Component {
  constructor(props){
  	super(props);
  	this.state = {
  	   comments : ''
  	}
    this.createCommentElements = this.createCommentElements.bind(this);
  }

  componentDidMount(){
    queryForComments(this.props.postId).then((resp) => {
      this.createCommentElements(resp);
    })
  }

  createCommentElements(comments){
    var commentElements = comments.map(function(comment, index){
      var commentData = {
        author : comment.get("Author"),
        message : comment.get("text")
      }
      return <CommentEntry key={index} commentData={commentData}/>
    })
    this.setState({comments: commentElements})
  }


  render() {
    
    return (
      <div id="CommentSection">
        {this.state.comments}
        <CommentCreator/>
      </div>
    );

  }
}