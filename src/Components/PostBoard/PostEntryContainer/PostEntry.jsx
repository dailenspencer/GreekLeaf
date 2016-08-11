import React from 'react';
import CommentSection from './CommentSection';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Avatar from 'material-ui/Avatar';
import $ from 'jquery';
import classnames from 'classnames';
import moment from 'moment';
import {createMaterialAvatar, postEntryInitialAvatar} from '../../../Helpers/RenderHelpers';
import {queryForComments, findPost, saveLike} from '../../../Actions/ParseActions';

import Parse from 'parse';
import ParseReact from 'parse-react';

export default class PostEntry extends React.Component {
  constructor(props){
  	super(props);
  	this.state = {
  	 animate: '',
     likesCount: this.props.postData.likes.length,
     comments: []
  	}

    this.handleHeartClick = this.handleHeartClick.bind(this);
    this.loadComments = this.loadComments.bind(this);
    this.addComment = this.addComment.bind(this);
    this.setAnimation = this.setAnimation.bind(this);
  }


  componentWillMount(){
    console.log('component will mount');
    this.loadComments();
    findPost(this.props.postData.id).then((resp) => {
      this.setAnimation(resp);
    })
  }

  loadComments(){
    queryForComments(this.props.postData.id).then((comments) => {
      this.setState({comments: comments})
    })
  }

  addComment(comment){
    var comments = this.state.comments;
    comments.push(comment);
    this.setState({comments: comments});
  }

  handleHeartClick(){
    if(this.state.animate === ''){
      saveLike(this.props.postData.id);
      this.setState({
        animate:'heartAnimation',
        likesCount: this.state.likesCount + 1
      })
    } else {
      saveLike(this.props.postData.id);
      this.setState({
        animate:'',
        likesCount: this.state.likesCount - 1
      })
    }
  }

  setAnimation(resp){
    var currentUserName = Parse.User.current().get("name");
    var post = resp[0];
    var likes = post.get('uplikes');
    if(~likes.indexOf(currentUserName)){
      this.setState({animate: 'heartAnimation'})
      return;
    } 
    this.setState({animate: ''})
  }

  renderAttachmentSection(attachments){
    var attachmentList = attachments.map((attachment, index) => {
      Parse.Cloud.httpRequest({ url: profilePhoto.url() }).then(function(response) {
        console.log(response.buffer);
      });
      return (
        <div className="Attachment" key={index}>
          <a href={attachment.url()} target="_blank">{attachment.url()}</a>
        </div>
      )
    })
    return (
      <div className="AttachmentSection">
          {attachmentList}
      </div>
    )

  }


render() {
    let  heartClasses = classnames('heart', this.state.animate);

    var name = this.props.postData.author.get("name");
    var time = moment(new Date(this.props.postData.createdAt.toString())).fromNow();
    var message = this.props.postData.message;
    var likesCount = this.state.likesCount === 0 ? '' : this.state.likesCount;

    //POST DATA
    var profilePictureFile = this.props.postData.author.get("ProfilePicture");
    var avatar;
    if(profilePictureFile){
      avatar = createMaterialAvatar(profilePictureFile.url())
    } else {
      avatar = postEntryInitialAvatar(name);
    }


    var attachments = this.props.postData.attachments;


    return (

      <div id="PostEntry">
        <div id="PostEntryTop">
          <div className="PostEntryAvatar">
           {avatar}
          </div>
          <h id="PostEntryAuthor">{name}</h>
          <p id="PostEntryTime">{time}</p>
        </div>
        <p id="PostEntryMessage">{message}</p>
        { attachments.length ? this.renderAttachmentSection(attachments) : '' }
        <div id="PostEntryActionBar">
          <div className={heartClasses} onClick={this.handleHeartClick}>
          </div>
          <div className="Likes">{likesCount}</div>
        </div>
        <CommentSection postId={this.props.postData.id} comments={this.state.comments} addComment={this.addComment} key={this.props.postData.id}/>
      </div>
    );

  }
}
