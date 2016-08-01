import React from 'react';
import ProfileContainer from './ProfileContainer/ProfileContainer';
import DropZone from './DropZone';
import Loader from './Loader';
import PostEntryContainer from './PostEntryContainer/PostEntryContainer'
import PostEntry from './PostEntryContainer/PostEntry';
import PostCreator from './PostCreator/PostCreator';
import {queryPosts} from '../../Actions/ParseActions';

export default class PostBoard extends React.Component {
  constructor(props){
  	super(props);
  	this.state = {
  		posts : '',
      loaderVisibility: 'hidden'
  	}

    this.createPostElements = this.createPostElements.bind(this);
  }

  componentDidMount(){
    this.showLoader()
    queryPosts().then((resp) => {
      this.createPostElements(resp);
      this.hideLoader()
    })
  }

  createPostElements(posts){
    var postElements = posts.map(function(post, index){
    var postData = {
        author : post.get("Author"),
        message : post.get("body"),
        createdAt : post.get("createdAt"),
        likes : post.get("uplikes"),
        id : post.id
    }
       
       return (
          <PostEntry key={index} postData={postData}/>
        )
    })
    this.setState({posts: postElements})
  }

  showLoader(){
    this.setState({loaderVisibility:'visible'})
  }

  hideLoader(){
    this.setState({loaderVisibility:'hidden'})
  }

  render() {
    var user = {
      phone: '850-276-9677',
      email: 'dailenspencer@gmail.com',
      work:'GreekLeaf, LLC',
      address:'3516 dragons ridge road PCB, FL',
      major:'Software Engineering',
      class:'2018'
    }
    return (
      <div id="PostBoard">
        <ProfileContainer user={user}/>
        <div id="NewsContainer">
          <DropZone/>
          <Loader visible={this.state.loaderVisibility}/>
          <PostCreator/>
          <PostEntryContainer posts={this.state.posts}/>
        </div>
      </div>
    );

  }
}