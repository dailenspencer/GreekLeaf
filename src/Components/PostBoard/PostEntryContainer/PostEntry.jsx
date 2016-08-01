import React from 'react';
import CommentSection from './CommentSection';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Avatar from 'material-ui/Avatar';
import $ from 'jquery';
import classnames from 'classnames';
import moment from 'moment';

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

 
render() {
    let  heartClasses = classnames('heart', this.state.animate);

    //POST DATA 
    var profilePictureFile = this.props.postData.author.get("ProfilePicture");
    var avatarUrl;
    if(profilePictureFile){
      avatarUrl = profilePictureFile.url();
    } else {
      avatarUrl = "https://avatars2.githubusercontent.com/u/8779656?v=3&s=460"
    }
    var name = this.props.postData.author.get("name");
    var time = moment(new Date(this.props.postData.createdAt.toString())).fromNow();
    var message = this.props.postData.message;
    var likesCount = this.state.likesCount === 0 ? '' : this.state.likesCount;

    
    return (

      <div id="PostEntry">
        <div id="PostEntryTop">
          <div className="PostEntryAvatar">
            <MuiThemeProvider>
              <Avatar src={avatarUrl} />
            </MuiThemeProvider>
          </div>
          <h id="PostEntryAuthor">{name}</h>
          <p id="PostEntryTime">{time}</p>
        </div>
        <p id="PostEntryMessage">{message}</p>
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