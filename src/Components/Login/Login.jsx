import React from 'react';
import LoginForm from './LoginForm';
import SignUpForm from './SignUpForm';
import Groups from './Groups'

export default class Login extends React.Component {
	constructor(props){
		super(props);
		
		this.showSignUpForm = this.showSignUpForm.bind(this);
		this.showGroups = this.showGroups.bind(this);
		
		this.state = {
			currentForm: <LoginForm showSignUpForm={this.showSignUpForm}/>
		}
		
	}


	
	showSignUpForm(){
		this.setState({currentForm: <SignUpForm showGroups={this.showGroups}/>})
	}

	showGroups(userInfo){
		this.setState({currentForm: <Groups userInfo={userInfo}/>})
	}

	render(){

		return (
				<div id="Login">
					<h id="GreekLeafTitle">GreekLeaf</h>
					{this.state.currentForm}
				</div>
			)
		}
	}