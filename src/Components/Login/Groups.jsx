import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {queryForGroups} from '../../Actions/ParseActions';


import Parse from 'parse';
import ParseReact from 'parse-react';

export default class Groups extends React.Component {
	constructor(props){
		super(props);
		
		this.state = {
			groupListItems: ''
		}
		
	}

	componentDidMount(){
		queryForGroups().then((resp) => {
			this.createGroups(resp);
		})
	}

	createGroups(groups){
		var groupListItems = groups.map(function(group){
			var name = group.get("Organization");
			return (
				<h className="groupListItem">{name}</h>
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