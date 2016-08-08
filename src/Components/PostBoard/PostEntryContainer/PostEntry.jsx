import React from 'react';
import CommentSection from './CommentSection';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Avatar from 'material-ui/Avatar';
import $ from 'jquery';
import classnames from 'classnames';
import moment from 'moment';
import {createMaterialAvatar, postEntryInitialAvatar} from '../../../Helpers/RenderHelpers';

export default class PostEntry extends React.Component {
  constructor(props){
  	super(props);
  	this.state = {
  	 animate: '',
     likesCount: this.props.postData.likes.length
  	}

    this.handleHeartClick = this.handleHeartClick.bind(this);
  }

  


  handleHeartClick(){
    if(this.state.animate === ''){
      this.setState({animate:'heartAnimation'})
    } else {
      this.setState({animate:''})
    }
    this.setState({likesCount: this.state.likesCount + 1});
  }

  renderAttachmentSection(attachments){
    var attachmentList = attachments.map((attachment, index) => {
        console.log(attachment, "attachment");
        
      return (
        <div className="Attachment" key={index}>
          
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
        <CommentSection postId={this.props.postData.id}/>
      </div>
    );

  }
}