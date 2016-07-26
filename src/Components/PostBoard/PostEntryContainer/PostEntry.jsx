import React from 'react';
import CommentSection from './CommentSection';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Avatar from 'material-ui/Avatar';
import $ from 'jquery';
import classnames from 'classnames';

export default class PostEntry extends React.Component {
  constructor(props){
  	super(props);
  	this.state = {
  	 animate: ''
  	}

    this.handleHeartClick = this.handleHeartClick.bind(this);
  }

  handleHeartClick(){
    if(this.state.animate === ''){
      this.setState({animate:'heartAnimation'})
    } else {
      this.setState({animate:''})
    }
    
  }

  render() {
    let  heartClasses = classnames('heart', this.state.animate);

    return (

      <div id="PostEntry">
        <div id="PostEntryTop">
          <div id="PostEntryAvatar">
            <MuiThemeProvider>
              <Avatar src="https://avatars2.githubusercontent.com/u/8779656?v=3&s=460" />
            </MuiThemeProvider>
          </div>
          <h id="PostEntryAuthor">Dailen Spencer</h>
          <p id="PostEntryTime">30 minutes ago</p>
        </div>
        <p id="PostEntryMessage">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
        <div id="PostEntryActionBar">
          <div className={heartClasses} onClick={this.handleHeartClick}>
          </div>
          <div className="Likes">37 likes</div>
        </div>
        <CommentSection/>
      </div>
    );

  }
}