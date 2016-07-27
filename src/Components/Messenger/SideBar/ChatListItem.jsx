import React from 'react';


export default class ChatListItem extends React.Component {

	render() {
		return (
			<div className="ChatListItem">
				<div className="ChatListItemImageContainer">
					<img src="" className="ChatListItemImage"/>
				</div>
				<div className="ChatListItemContentContainer">
					<div className="ChatListItemTitle">Example Title</div>
					<div className="ChatListItemLastMessage">Example Last Message</div>
				</div>
			</div>
		);
	}
}