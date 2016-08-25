import React from 'react';
import PostEntry from './PostEntry'

export default class PostEntryContainer extends React.Component {
  constructor(props){
  	super(props);
  	this.state = {
      postElements : ''
  	}
  }

  componentDidReceiveProps(nextProps){
    console.log('did receive props');
    console.log(nextProps);
  }

  createPostElements(posts){
    var postElements = posts.map((post, index) => {
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
          <PostEntry key={postData.id} postData={postData}/>
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
