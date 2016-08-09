import React from 'react';
import PostEntry from './PostEntry'

export default class PostEntryContainer extends React.Component {
  constructor(props){
  	super(props);
  	this.state = {
  		
  	}
  }

  createPostElements(posts){
    var postElements = posts.map(function(post, index){
    var attachments = post.get("Attachments") ? post.get("Attachments") : []
    var postData = {
        author : post.get("Author"),
        message : post.get("body"),
        createdAt : post.get("createdAt"),
        likes : post.get("uplikes"),
        id : post.id,
        attachments: attachments
    }

       return (
          <PostEntry key={index} postData={postData}/>
        )
    })
    return postElements;
  }

  render() {
    var postElements = this.createPostElements(this.props.posts);
    return (
      <div id="PostEntryContainer">
        {postElements}
      </div>
    );

  }
}