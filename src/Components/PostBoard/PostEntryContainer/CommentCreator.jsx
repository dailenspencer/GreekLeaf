import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Avatar from 'material-ui/Avatar';
import $ from 'jquery';
import autosize from 'autosize';

export default class CommentCreator extends React.Component {
  constructor(props){
  	super(props);
  	this.state = {
  	
  	}
  }

  componentDidMount(){
    // from a jQuery collection
    // autosize($('#PostCreatorInput'));
    var ta = document.querySelector('#CommentCreatorInput');
    ta.addEventListener('focus', function(){
        autosize(ta);
    });
  }


  render() {


    return (
      <div id="CommentCreator">
        <div id="CommentCreatorAvatar">
          <MuiThemeProvider>
            <Avatar src="https://avatars2.githubusercontent.com/u/8779656?v=3&s=460" style={{'width':'35px','height':'35px'}} />
          </MuiThemeProvider>
        </div>
        <textarea rows="3" cols="26" type="text" id="CommentCreatorInput" placeholder="Write a comment..." onFocus={this.handleOnFocus} onBlur={this.handleOnBlur} style={{'height':'50px'}}></textarea>
      </div>
    );

  }
}