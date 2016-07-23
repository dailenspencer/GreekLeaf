import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Avatar from 'material-ui/Avatar';
import $ from 'jquery';
import autosize from 'autosize';

export default class PostCreatorTop extends React.Component {
  constructor(props){
  	super(props);
  	this.state = {
  		
  	}
  }

  componentDidMount(){
    // from a jQuery collection
    // autosize($('#PostCreatorInput'));
    var ta = document.querySelector('#PostCreatorInput');
    ta.addEventListener('focus', function(){
        autosize(ta);
    });
  }

  handleOnFocus(){
    
  }

  handleOnBlur(){
    
  }

  render() {

    return (
      <div id="PostCreatorTop">
        <div id="PostCreatorAvatar">
          <MuiThemeProvider>
            <Avatar src="https://avatars2.githubusercontent.com/u/8779656?v=3&s=460" />
          </MuiThemeProvider>
        </div>
        <textarea rows="3" cols="26" type="text" id="PostCreatorInput" placeholder="Whats on your mind?" onFocus={this.handleOnFocus} onBlur={this.handleOnBlur} style={{'height':'50px'}}></textarea>
      </div>
    );

  }
}