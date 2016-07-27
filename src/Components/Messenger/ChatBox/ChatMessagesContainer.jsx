import React from 'react';
import ChatMessage from './ChatMessage';

export default class ChatMessagesContainer extends React.Component {

	render() {
		return (
			<div id="ChatMessagesContainer">
				<ChatMessage/>
				<ChatMessage/>
				<ChatMessage/>
			</div>
		);
	}
}