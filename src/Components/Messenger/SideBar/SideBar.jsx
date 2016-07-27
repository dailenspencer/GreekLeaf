import React from 'react';
import ChatListItem from './ChatListItem';


export default class SideBar extends React.Component {

	render() {
		return (
			<div id="MessengerSideBar">
				<div id="SideBarSearch">
					<input id="SideBarSearchInput" placeholder="Search Messages"/>
				</div>
				<div id="ChatListContainer">
					<ChatListItem/>
					<ChatListItem/>
					<ChatListItem/>
					<ChatListItem/>
				</div>
			</div>
		);
	}
}