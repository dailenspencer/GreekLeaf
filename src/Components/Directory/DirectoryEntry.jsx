import React, { Component } from 'react';

class DirectoryEntry extends Component{
	refClick(){
		console.log('refClick fired in DirectoryEntry')
		console.log(`this.directoryEntry is ${this.directoryEntry}`)
		this.props.handleClick(this.directoryEntry)
	}
	render(){
		return (
			<div
				ref={(ref) => this.directoryEntry = ref}
				className="DirectoryEntry"
				onClick={() => this.refClick()}>
				<h className="InitialsHeader">DS</h>
			</div>
		);
	}
}

export default DirectoryEntry;