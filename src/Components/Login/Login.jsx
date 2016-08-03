import React from 'react';
import LoginForm from './LoginForm';
import SignUpForm from './SignUpForm';
import Groups from './Groups';
import Loader from './LoginLoader';
import Success from './Success';

export default class Login extends React.Component {
	constructor(props){
		super(props);
		
		this.showSignUpForm = this.showSignUpForm.bind(this);
		this.showGroups = this.showGroups.bind(this);
		this.showSuccess = this.showSuccess.bind(this);
		this.showError = this.showError.bind(this);
		this.showLoader = this.showLoader.bind(this);
		
		this.state = {
			currentForm: <LoginForm showSignUpForm={this.showSignUpForm}/>
		}
		
	}


	
	showSignUpForm(){
		this.setState({currentForm: <SignUpForm showGroups={this.showGroups}/>})
	}

	showGroups(userInfo){
		this.setState({currentForm: <Groups userInfo={userInfo} showSuccess={this.showSuccess} showError={this.showError} showLoader={this.showLoader}/>})
	}

	showSuccess(){
		console.log('show success');
		this.setState({currentForm: <Success/>})
	}

	showError(){
		console.log('show Error');
	}

	showLoader(){
		this.setState({
			currentForm:<Loader/>
		})
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