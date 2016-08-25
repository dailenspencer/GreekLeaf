import React, { Component } from 'react'
import {showProfileModal} from '../../Helpers/AnimationHelpers'

class DirectoryEntry extends Component{
	constructor(props){
		super(props);
		this.state = {

			headerText: '',
			initialsHeaderClass: 'InitialsHeader',
			initials : '',
			fullName : ''
		}
		this.handleMouseOver = this.handleMouseOver.bind(this);
		this.handleMouseOut = this.handleMouseOut.bind(this)
	}

	handleClick(){
		console.log(this.props.user, 'user')
		showProfileModal(this.props.user)
	}

	refClick(){
		this.props.handleClick(this.directoryEntry)
	}

	componentDidMount(){
		if(this.props.user.get("name") === undefined){
			var type = this.props.user.get("type");
			this.setState({initials: type})
			this.setState({fullName: 'Dailen Spencer'})
			this.setState({headerText: type})
			this.setState({initialsHeaderClass: 'InitialsHeader'})
			return
		} else {
			var fullName = this.props.user.get("name");
			var fullNameArray = fullName.split(" ");
			var initials = fullNameArray[0].charAt(0) + fullNameArray[1].charAt(0);
			this.setState({initials: initials})
			this.setState({fullName: fullName})
			this.setState({headerText: initials})
			this.setState({initialsHeaderClass: 'InitialsHeader'})
		}
	}

	handleMouseOver(){
		this.setState({headerText: this.state.fullName})
		this.setState({initialsHeaderClass: 'fullNameHeader'})
	}

	handleMouseOut(){
		this.setState({headerText: this.state.initials})
		this.setState({initialsHeaderClass: 'InitialsHeader'})
	}


	render(){

		return (
			<div
				ref={(ref) => this.directoryEntry = ref}
				className="DirectoryEntry"
				onClick={this.handleClick.bind(this)}
			>
				<div className="DirectoryEntryCircle">
					<h className={this.state.initialsHeaderClass} onMouseOver={this.handleMouseOver} onMouseOut={this.handleMouseOut}>{this.state.headerText}</h>
				</div>
				
			</div>
		);
	}
}

export default DirectoryEntry;