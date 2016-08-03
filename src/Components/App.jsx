import React from 'react';
import ReactDOM from 'react-dom'
import {checkForCurrentUser} from '../Actions/ParseActions';
import {browserHistory} from 'react-router';

export default class App extends React.Component {
	
	componentDidMount(){
		var currentUser = checkForCurrentUser();
		var organizationVerified = currentUser.get("organizationVerified")
		if(currentUser && organizationVerified){
			browserHistory.push('/Home');
		} else {
			browserHistory.push('/Login');
		}
	}

	render() {
		return (
			<div style={{'height':'100%'}}>
				{this.props.children}
			</div>
		);
	}
}

