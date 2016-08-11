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

	componentDidMount(){
		$('#LoginFormUsername').attr('autocomplete','off');
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
			parseLogin(username, password).then((user) => {
				var organizationVerified = user.get("organizationVerified");
				if(organizationVerified){
					browserHistory.push('/Home');
					return
				} 
				alert('Sorry! Your organization hasnt verified you yet..')
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
		const errorStyle = {
			'color':'white'
		}

			return (
				<div id="LoginForm">
					<h id="GreekLeafHeader">...Everything, Now In One Place</h>
					<div id="LoginFormUsername" className={this.state.LoginFormUsernameClassName}>
						<MuiThemeProvider>
			            	<TextField
			            		style={{'width':'100%','autoComplete':'off'}}
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
											autoComplete="off"
			    					/>
			          	</MuiThemeProvider>
					</div>
					<div id="LoginFormPassword" className={this.state.LoginFormPasswordClassName}>
						<MuiThemeProvider>
			            	<TextField
			            		style={{'width':'100%','autoComplete':'off'}}
		      					hintText="Enter Password"
		      					type="Password"
		      					errorText={this.state.errorText}
		      					hintStyle={hintStyle}
		      					errorStyle={errorStyle}
				      			inputStyle = {{
				      				'autoComplete':'off',
									'color': 'white',
									'width': '100%',
									'fontFamily': 'Raleway',
									'fontWeight': '200',
									'fontSize': '30px'
								}}
								onKeyPress={this.handlePasswordEnter}
								autoComplete="off"
			    			/>
          				</MuiThemeProvider>
		          	<h id="ForgotPassword">Forgot Your Password?</h>
          			</div>
				</div>
			)
	}
}