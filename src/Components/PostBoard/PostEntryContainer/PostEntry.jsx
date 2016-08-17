import React from 'react'
import CommentSection from './CommentSection'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Avatar from 'material-ui/Avatar'
import $ from 'jquery'
import classnames from 'classnames'
import moment from 'moment'

import {queryForComments} from '../../../Actions/ParseActions'
import {createMaterialAvatar, postEntryInitialAvatar} from '../../../Helpers/RenderHelpers'
import {showProfileModal} from '../../../Helpers/AnimationHelpers'

import HeartButton from './HeartButton'

import Parse from 'parse'
import ParseReact from 'parse-react'

export default class PostEntry extends React.Component {
  constructor(props){
    super(props)
    this.state = {
     likesCount: this.props.postData.likes.length,
     comments: []
    }
    this.loadComments = this.loadComments.bind(this)
    this.addComment = this.addComment.bind(this)
    this.changeLikeCount = this.changeLikeCount.bind(this)
  }


  componentWillMount(){
    this.loadComments();
  }

  loadComments(){
    queryForComments(this.props.postData.id).then((comments) => {
      this.setState({comments: comments})
    })
  }

  addComment(comment){
    var comments = this.state.comments
    comments.push(comment)
    this.setState({comments: comments})
  }

  changeLikeCount(like){
    if(like){
      this.setState({likesCount: this.state.likesCount + 1})
      return;
    }
    this.setState({likesCount: this.state.likesCount -1})
  }

  handlePostEntryAvatarClick(){
    showProfileModal(this.props.postData)
  }

  
  renderAttachmentSection(attachments){
    var attachmentList = attachments.map((attachment, index) => {
      // Parse.Cloud.httpRequest({ url: profilePhoto.url() }).then(function(response) {
      //   console.log(response.buffer);
      // });
      return (
        <div className="Attachment" key={index}>
          <a href={attachment.url()} target="_blank">Attachment #{index + 1}</a>
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
    let  heartClasses = classnames('heart', this.state.animate)

    var name = this.props.postData.author.get("name");
    var time = moment(new Date(this.props.postData.createdAt.toString())).fromNow()
    var message = this.props.postData.message;
    var likesCount = this.state.likesCount === 0 ? '' : this.state.likesCount;

    var attachments = this.props.postData.attachments

    //POST DATA
    var profilePictureFile = this.props.postData.author.get("ProfilePicture");
    var avatar;
    if(profilePictureFile){
      avatar = createMaterialAvatar(profilePictureFile.url())
    } else {
      avatar = postEntryInitialAvatar(name)
    }


    return (
      <div id="PostEntry">
        <div id="PostEntryTop">
          <div className="PostEntryAvatar" onClick={this.handlePostEntryAvatarClick.bind(this)}>
            {avatar}
          </div>
          <h id="PostEntryAuthor">{name}</h>
          <p id="PostEntryTime">{time}</p>
        </div>
        <p id="PostEntryMessage">{message}</p>
        { attachments.length ? this.renderAttachmentSection(attachments) : '' }
        <div className="PostEntryActionBar">
          <HeartButton key={this.props.postData.id} postData={this.props.postData} changeLikeCount={this.changeLikeCount}/>
          <div className="Likes">{likesCount}</div>
        </div>
        <CommentSection postId={this.props.postData.id} comments={this.state.comments} addComment={this.addComment} key={this.props.postData.id}/>
      </div>
    );

  }
}
