import React from 'react';
import ProfileContainer from './ProfileContainer/ProfileContainer';
import DropZone from './DropZone';
import Loader from './Loader';
import PostEntryContainer from './PostEntryContainer/PostEntryContainer'
import PostEntry from './PostEntryContainer/PostEntry';
import PostCreator from './PostCreator/PostCreator';
import {queryPosts, savePost} from '../../Actions/ParseActions';

export default class PostBoard extends React.Component {
  constructor(props){
  	super(props);
  	this.state = {
  		posts : '',
      loaderVisibility: 'hidden'
  	}
    this.showLoader = this.showLoader.bind(this);
    this.hideLoader = this.hideLoader.bind(this);
    this.handlePost = this.handlePost.bind(this);
    this.createPostElements = this.createPostElements.bind(this);
  }

  componentDidMount(){
    this.showLoader()
    var universityExtension = this.props.user.get("universityExtension");
    queryPosts(universityExtension).then((resp) => {
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

  handlePost(text){
    this.showLoader()
    savePost(text).then((resp) => {
      console.log(resp, "resp");
      this.hideLoader();
    })
  }



  render() {
    
    return (
      <div id="PostBoard">
        <ProfileContainer/>
        <div id="NewsContainer">
          <DropZone/>
          <Loader visible={this.state.loaderVisibility}/>
          <PostCreator handlePost={this.handlePost}/>
          <PostEntryContainer posts={this.state.posts}/>
        </div>
      </div>
    );

  }
}

