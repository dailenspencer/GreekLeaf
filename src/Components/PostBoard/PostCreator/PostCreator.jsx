import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import PostCreatorTop from './PostCreatorTop';
import ActionBar from './ActionBar';

export default class PostCreator extends React.Component {
  constructor(props){
  	super(props);
    this.handleTextChange = this.handleTextChange.bind(this);
    this.handlePost = this.handlePost.bind(this);
  	this.state = {
  		text: ''
  	}

  }

  handleTextChange(e){
    this.setState({text: e.target.value})
  }

  handlePost(){
    console.log(this.props.currentFiles.length);
    if(this.state.text !== "" || this.props.currentFiles.length !== 0){
      this.props.handlePost(this.state.text);
    }
  }

  render() {
    return (
      <div id="PostCreator">
        <PostCreatorTop handleTextChange={this.handleTextChange}/>
        <ActionBar handlePost={this.handlePost}/>
      </div>
    );

  }
}
