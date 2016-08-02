import React from 'react';
import TextField from 'material-ui/TextField';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {checkForEmail, parseLogin} from '../../Actions/ParseActions';
import {browserHistory} from 'react-router';


export default class LoginForm extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			email: '',
			LoginFormUsernameClassName: '',
			LoginFormPasswordClassName : '',
			errorText: ''
		}

		this.showPasswordField = this.showPasswordField.bind(this);
		this.handleEmailEnter = this.handleEmailEnter.bind(this);
		this.handlePasswordEnter = this.handlePasswordEnter.bind(this);
	}

	handleEmailEnter(e){
		
		var email = e.target.value;
		if(e.key === "Enter"){
			checkForEmail(email).then((resp) => {
				if(resp.length > 0){
					this.setState({email: email});
					this.showPasswordField();
				} else {
					this.props.showSignUpForm(email);
				}
			})
			
		}
	}

	handlePasswordEnter(e){
		var username = this.state.email;
		var password = e.target.value;
		if(e.key === "Enter" && this.state.passwordFieldIsShowing){
			parseLogin(username, password).then((resp) => {
				browserHistory.push('/Home');
			}).catch((resp) =>{
			this.setState({errorText : 'invalid password'});
			})
		}
	}


	showPasswordField(){
		this.setState({
			passwordFieldIsShowing : true,
			LoginFormUsernameClassName : 'SlideOutToLeft',
			LoginFormPasswordClassName : 'SlideInFromRight'
		})
	}

	render(){
		const hintStyle = {
			'color':'white',
			'fontSize':'18px',
			'textAlign':'center',
			'fontFamily': 'Raleway',
			'fontWeight': '200'
		}
			return (
				<div id="LoginForm">
						<h id="GreekLeafHeader">...Everything, Now In One Place</h>
						<div id="LoginFormUsername" className={this.state.LoginFormUsernameClassName}>
							<MuiThemeProvider>
	            	<TextField
	            		style={{'width':'100%'}}
	      					hintText="Enter Email"
	      					hintStyle={hintStyle}
				      			inputStyle = {{
				      				'autoComplete':'off',
											'color': 'white',
											'width': '100%',
											'fontFamily': 'Raleway',
											'fontWeight': '200',
											'fontSize': '24px'
										}}
									onKeyPress={this.handleEmailEnter}
	    					/>
	          	</MuiThemeProvider>
						</div>
						<div id="LoginFormPassword" className={this.state.LoginFormPasswordClassName}>
							<MuiThemeProvider>
	            	<TextField
	            		style={{'width':'100%'}}
	      					hintText="Enter Password"
	      					type="Password"
	      					errorText={this.state.errorText}
	      					hintStyle={hintStyle}
				      			inputStyle = {{
				      				'autoComplete':'off',
											'color': 'white',
											'width': '100%',
											'fontFamily': 'Raleway',
											'fontWeight': '200',
											'fontSize': '30px'
										}}
									onKeyPress={this.handlePasswordEnter}
	    					/>
	          	</MuiThemeProvider>
	          	</div>
					</div>
			)
	}
}