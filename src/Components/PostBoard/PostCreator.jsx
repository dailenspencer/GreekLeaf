import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Avatar from 'material-ui/Avatar';


export default class PostCreator extends React.Component {
  constructor(props){
  	super(props);
  	this.state = {
  		
  	}
  }

  handleOnFocus(){
    
  }

  handleOnBlur(){
    
  }

  render() {

    const style = {
      height: 60,
      width: '100%',
      textAlign: 'center',
      margin:20,
      display: 'inline-block'
    };

    return (
      <div id="PostCreator">
        <MuiThemeProvider>
          <Avatar id="PostCreatorAvatar" src="https://avatars2.githubusercontent.com/u/8779656?v=3&s=460" />
        </MuiThemeProvider>
        <input type="text" id="PostCreatorInput" placeholder="Whats on your mind?" onFocus={this.handleOnFocus} onBlur={this.handleOnBlur}/>
        
      </div>
    );

  }
}