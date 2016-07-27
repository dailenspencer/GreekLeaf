import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Avatar from 'material-ui/Avatar';


export default class ChatMessages extends React.Component {

	render() {
		return (
			<div className="ChatMessage">
				<div className="ChatMessageAvatar">
					<MuiThemeProvider>
            			<Avatar src="https://avatars2.githubusercontent.com/u/8779656?v=3&s=460" />
          			</MuiThemeProvider>
				</div>
				<div className="ChatMessageAuthor">
					Dailen Spencer
				</div>
				<div className="ChatMessageText">
					Here is a bunch of text that is going to go on here and we are going to see what it looks likeee yeaaahfwjwejfweofoofejofjiojoewfjoiewjiojiowejoifjoewfjoi
				</div>
			</div>
		);
	}
}