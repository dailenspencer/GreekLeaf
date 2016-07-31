import React from 'react';
import {browserHistory} from 'react-router';
import TextField from 'material-ui/TextField';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

export default class Login extends React.Component {
	constructor(props){
		super(props);
		this.state = {

		}

		this.handleEnter = this.handleEnter.bind(this)
	}

	handleEnter(event){
		if(event.key === "Enter"){
			console.log('browser history push home');
			browserHistory.push('/Home');
		}
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
			<div id="Login">
				<h id="GreekLeafTitle">GreekLeaf</h>
				<div id="LoginForm">
					<h id="GreekLeafHeader">...Everything, Now In One Place</h>
					<div id="LoginFormBottom">
						<MuiThemeProvider>
            	<TextField
            		style={{'width':'100%'}}
      					hintText="Enter Email"
      					hintStyle={hintStyle}
			      			inputStyle = {{
										'color': 'white',
										'width': '100%',
										'fontFamily': 'Raleway',
										'fontWeight': '200',
										'fontSize': '18px'
									}}
								onKeyPress={(event) => this.handleEnter(event)}
    					/>
          	</MuiThemeProvider>
						
					</div>
				</div>
			</div>
		)
	}
}