import React from 'react';
import ReactDOM from 'react-dom'
import {checkForCurrentUser} from '../Actions/ParseActions';
import {browserHistory} from 'react-router';

export default class App extends React.Component {
	
	componentDidMount(){
		var currentUser = checkForCurrentUser();
		if(currentUser){
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
