import React from 'react';
import ChatMessagesContainer from './ChatMessagesContainer';


export default class ChatBox extends React.Component {

	render() {
		return (
			<div id="ChatBox">
				<ChatMessagesContainer/>
				<div id="ChatInputBox">
					<input id="ChatInput" placeholder="Send Message..."/>
				</div>
			</div>
		);
	}
}