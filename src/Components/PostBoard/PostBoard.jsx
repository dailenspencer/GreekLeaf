import React from 'react';
import ProfileContainer from './ProfileContainer/ProfileContainer';
import DropZoneArea from './DropZone';
import Loader from './Loader';
import PostEntryContainer from './PostEntryContainer/PostEntryContainer'
import PostEntry from './PostEntryContainer/PostEntry';
import PostCreator from './PostCreator/PostCreator';
import {queryPosts, savePost} from '../../Actions/ParseActions';

import Parse from 'parse';
import ParseReact from 'parse-react';

export default class PostBoard extends React.Component {
  constructor(props){
  	super(props);
  	this.state = {
  		posts : [],
      loaderVisibility: 'hidden',
      files : []
  	}
    this.showLoader = this.showLoader.bind(this);
    this.hideLoader = this.hideLoader.bind(this);
    this.handlePost = this.handlePost.bind(this);
    this.queryForPosts = this.queryForPosts.bind(this);
    this.addFileToStorage = this.addFileToStorage.bind(this);
    this.removeDropzoneFiles = this.removeDropzoneFiles.bind(this);
    this.setMyDropZone = this.setMyDropZone.bind(this);
  }

  componentDidMount(){
    this.showLoader()
    this.queryForPosts();
  }


  queryForPosts(){
    const currentUser = Parse.User.current()
    const universityExtension = currentUser.get("universityExtension");
    queryPosts(universityExtension).then((posts) => {
        this.hideLoader()
        this.setState({posts:posts});
    })
  }

  showLoader(){
    this.setState({loaderVisibility:'visible'})
  }

  hideLoader(){
    this.setState({loaderVisibility:'hidden'})
  }

  handlePost(text){
    this.showLoader()
    savePost(text, this.state.files).then((resp) => {
      this.hideLoader();
      this.clearTextArea();
      this.removeDropzoneFiles();
      this.addPost(resp);
      
    })
  }

  addPost(post){
    const posts = this.state.posts;
    posts.unshift(post);
    this.setState({posts:posts});
  }

  clearTextArea(){
    $("#PostCreatorInput").val("");
  }

  addFileToStorage(file){
    var files = this.state.files;
    files.push(file);
    this.setState({files: files});

  }

  setMyDropZone(dropzone){
    this.setState({dropzone:dropzone})
  }

  removeDropzoneFiles(){
    this.state.dropzone.removeAllFiles();

  }


  render() {
    return (
      <div id="PostBoard">
        <ProfileContainer/>
        <div id="NewsContainer">
          <DropZoneArea addFileToStorage={this.addFileToStorage} setMyDropZone={this.setMyDropZone}/>
          <Loader visible={this.state.loaderVisibility}/>
          <PostCreator handlePost={this.handlePost} currentFiles={this.state.files}/>
          <PostEntryContainer posts={this.state.posts}/>
        </div>
      </div>
    );

  }
}

