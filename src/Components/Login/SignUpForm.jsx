import React from 'react';
import TextField from 'material-ui/TextField';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {List, ListItem} from 'material-ui/List';
import ContentDrafts from 'material-ui/svg-icons/content/drafts';
import Call from 'material-ui/svg-icons/maps/local-phone';

import IconButton from 'material-ui/IconButton/IconButton';
import CheckIcon from 'material-ui/svg-icons/action/check-circle';

export default class SignUpForm extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			name: '',
			nameErrorText: '',
			email: '',
			emailErrorText: '',
			phone: '',
			phoneErrorText: '',
			firstPassword: '',
			firstPasswordErrorText: '',
			secondPassword: '',
			secondPasswordErrorText: '',
			signUpButtonClassName: ''

		}

		this.validateNameField = this.validateNameField.bind(this);
		this.validateEmailField = this.validateEmailField.bind(this);
		this.validatePhoneField = this.validatePhoneField.bind(this);
		this.validateFirstPasswordField = this.validateFirstPasswordField.bind(this);
		this.validateSecondPasswordField = this.validateSecondPasswordField.bind(this);

		this.validateFullForm = this.validateFullForm.bind(this);
	}

	validateNameField(e){
		var name = e.target.value;
		this.setState({name: name})
		var nameArray = name.split(" ");
		if(nameArray.length !== 2){
			this.setState({nameErrorText : 'Please enter first & last name'}, function(){
				this.validateFullForm();
			});
			return
		} 
			this.setState({nameErrorText : ''},function(){
				this.validateFullForm()
			});
		
	}

	validateEmailField(e){
		var email = e.target.value;
		this.setState({email: email})
		var emailReg = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
		if(!emailReg.test(email)){
			this.setState({emailErrorText: 'Please enter valid email'}, function(){
				this.validateFullForm();
			})
			return
		} 
		this.setState({emailErrorText: ''},function(){
			this.validateFullForm()
		})
		
	}
	
	validatePhoneField(e){

		var phoneno = /^\d{10}$/;
		
		var phone = e.target.value;
		this.setState({phone: phone})
		if(!phone.match(phoneno)){
			console.log('invalid phone number');
			this.setState({phoneErrorText: 'Please enter valid phone number Ex. 8502341156'}, function(){
				this.validateFullForm();
			})
			return
		}

		this.setState({phoneErrorText: ''}, function(){
			this.validateFullForm();
		});
	
	}

	validateFirstPasswordField(e){
		var password = e.target.value;
		this.setState({firstPassword: password})
		if(password.length < 8){
			this.setState({firstPasswordErrorText: 'Please make password longer than 8 characters'}, function(){
				this.validateFullForm();
			})
			return;
		}

		if(password !== this.state.secondPassword){
			this.setState({firstPasswordErrorText: 'Passwords do not match'}, function(){
				this.validateFullForm();
			});
			return;
		}
		this.setState({
			firstPasswordErrorText: '',
			secondPasswordErrorText: ''
		}, function(){
			this.validateFullForm()
		})
	}

	validateSecondPasswordField(e){
		var secondPassword = e.target.value;
		this.setState({secondPassword: secondPassword})
		if(secondPassword !== this.state.firstPassword){
			this.setState({secondPasswordErrorText: 'Passwords do not match'},function(){
				this.validateFullForm();
			})
			return;
		}
		this.setState({
			 secondPasswordErrorText: '',
			 firstPasswordErrorText: ''
			}, function(){
				this.validateFullForm()
			})
		
		
	}


	validateFullForm(){
		if(this.state.nameErrorText === '' && this.state.phoneErrorText === '' && this.state.emailErrorText === '' && this.state.firstPasswordErrorText === '' && this.state.secondPasswordErrorText === ''){
			if(this.state.name !== '' && this.state.phone !== '' && this.state.email !== '' && this.state.firstPassword !== '' && this.state.secondPassword !== ''){
				this.setState({signUpButtonClassName:'FadeIn'})
				return
			}
		}
		this.setState({signUpButtonClassName:'Hide'})
	}

	
	render(){
		const userInfo = {
			name: this.state.name,
			email:this.state.email,
			phone:this.state.phone,
			password:this.state.firstPassword
		}
		
		const hintStyle = {
			'color':'white',
			'fontSize':'18px',
			'textAlign':'center',
			'fontFamily': 'Raleway',
			'fontWeight': '200'
		}
		const style = {
			'width':'100%',
			'marginBottom':'20px',
			'color':'white'
		}

		const inputStyle = {
				'autoComplete':'off',
				'color': 'white',
				'width': '100%',
				'fontFamily': 'Raleway',
				'fontWeight': '200',
				'fontSize': '24px'
		}

		const buttonStyle = {
			'background':'transparent',
			'border':'none',
			'cursor':'pointer',
			'position':'absolute',
			'left':'50%',
			'transform':'translateX(-50%)'
		}
		
			return (
				<div id="SignUpForm">
						<h id="SignUpHeader">We noticed you aren't in our database, would you like to sign up?</h>
						<div id="SignUpFormBottom">
							<MuiThemeProvider>
			          <TextField
			                hintText="First & Last Name"
			                hintStyle={hintStyle}
			                style={style}
			                inputStyle={inputStyle}
			                onChange={this.validateNameField}
			                errorText={this.state.nameErrorText}
			              />
			        </MuiThemeProvider>
			        <MuiThemeProvider>
			          <TextField
			                hintText="Email"
			                hintStyle={hintStyle}
			                style={style}
			                inputStyle={inputStyle}
			                onChange={this.validateEmailField}
			                errorText={this.state.emailErrorText}
			              />
			        </MuiThemeProvider>
			        <MuiThemeProvider>
			          <TextField
			                hintText="Phone"
			                hintStyle={hintStyle}
			                style={style}
			                inputStyle={inputStyle}
			                onChange={this.validatePhoneField}
			                errorText={this.state.phoneErrorText}
			              />
			        </MuiThemeProvider>
			        <MuiThemeProvider>
			          <TextField
			                hintText="Password"
			                hintStyle={hintStyle}
			                style={style}
			                inputStyle={inputStyle}
			                onChange={this.validateFirstPasswordField}
			                errorText={this.state.firstPasswordErrorText}
			              />
			        </MuiThemeProvider>
			        <MuiThemeProvider>
			          <TextField
			                hintText="Enter Password Again"
			                hintStyle={hintStyle}
			                style={style}
			                inputStyle={inputStyle}
			                onChange={this.validateSecondPasswordField}
			                errorText={this.state.secondPasswordErrorText}
			              />
			        </MuiThemeProvider>
			        <div id="SignUpButtonContainer">
			        	 <button type="button" id="SignUpButton" onClick={this.props.showGroups.bind(null, userInfo)} style={buttonStyle} className={this.state.signUpButtonClassName}>
					          <MuiThemeProvider>
					            <CheckIcon style={{'color':'#fff','width':'50px','height':'50px'}}/>
					          </MuiThemeProvider>
					       </button>
			        </div>
			      </div>

					</div>
			)
	}
}






