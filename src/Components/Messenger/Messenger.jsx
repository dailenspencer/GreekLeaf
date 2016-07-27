import React from 'react';
import SideBar from './SideBar/SideBar';
import ChatBox from './ChatBox/ChatBox';


export default class Messenger extends React.Component {

	render() {
		return (
			<div style={{'height':'100%'}}>
				<SideBar/>
				<ChatBox/>
			</div>
		);
	}
}