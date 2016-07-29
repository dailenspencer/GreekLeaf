import React, { Component } from 'react';

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


	refClick(){
		this.props.handleClick(this.directoryEntry)
	}

	componentDidMount(){
		var fullName = this.props.user.get("name");
		var fullNameArray = fullName.split(" ");
		var initials = fullNameArray[0].charAt(0) + fullNameArray[1].charAt(0);
		this.setState({initials: initials})
		this.setState({fullName: fullName})
		this.setState({headerText: initials})
		this.setState({initialsHeaderClass: 'InitialsHeader'})
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
				onClick={() => this.refClick()}>
				<div className="DirectoryEntryCircle">
					<h className={this.state.initialsHeaderClass} onMouseOver={this.handleMouseOver} onMouseOut={this.handleMouseOut}>{this.state.headerText}</h>
				</div>
				
			</div>
		);
	}
}

export default DirectoryEntry;