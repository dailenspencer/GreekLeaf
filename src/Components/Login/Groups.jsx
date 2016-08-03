import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {queryForGroups,signUpUser} from '../../Actions/ParseActions';


import Parse from 'parse';
import ParseReact from 'parse-react';


export default class Groups extends React.Component {
	constructor(props){
		super(props);
		
		this.state = {
			groupListItems: ''
		}
		this.createGroups = this.createGroups.bind(this);
		this.handleGroupClick = this.handleGroupClick.bind(this);
	}

	componentDidMount(){
		queryForGroups().then((resp) => {
			this.createGroups(resp);
		})
	}

	handleGroupClick(organization){
		this.props.showLoader();
		signUpUser(this.props.userInfo, organization).then((resp) =>{
			this.props.showSuccess(resp);
		}).catch(function(err){
			this.props.showError(err);
		})
	}

	createGroups(groups){
		var groupListItems = groups.map((group) => {
			var organization = group.get("Organization");
			return (
				<h className="groupListItem" onClick={() => this.handleGroupClick(organization)}>{organization}</h>
			)
		})
		this.setState({groupListItems: groupListItems})
	}

	

	render(){
		return (
				<div id="Groups">
					<h id="GroupsHeader">Please select a group</h>
					<MuiThemeProvider>
						<div id="GroupList">
							{this.state.groupListItems}
						</div>
					</MuiThemeProvider>
				</div>
			)
		}
	}