import React from 'react';
import ReactDOM from 'react-dom'



export default class App extends React.Component {
	

	render() {
		return (
			<div style={{'height':'100%'}}>
				{this.props.children}
			</div>
		);
	}
}
