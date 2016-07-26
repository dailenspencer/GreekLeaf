import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from "react-tap-event-plugin";
injectTapEventPlugin();
import AppBar from 'material-ui/AppBar';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton/IconButton';
import MenuIcon from 'material-ui/svg-icons/navigation/menu';
import Avatar from 'material-ui/Avatar';
import _ from 'underscore';


export default class Nav extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			value: 1,
			currentSection: 'Home'
		}
	}


	//Rendering menu items for pop out navigation
	renderMenuItems(){
		var sections = ["Home","Messenger","Directory","Food Menu","Pledge Track"]
		return _.map(sections,function(section){
			return  <MenuItem
						checked={section === this.state.currentSection ? true : false}
						key={section}
						onClick={() => this.handleSectionChange(section)}>
						{section}
					</MenuItem>
		}, this)
	}

	//On Section Change: handle nav bar title change and render new section 
	handleSectionChange(section){
		this.setState({currentSection: section});
		this.props.renderNewSection(section);
	}

	render() {
		var menuItems = this.renderMenuItems();
		return(
			<div>
				<MuiThemeProvider>
					<AppBar 
						style={{
							'backgroundColor': '#6AC1B8',
							'position':'fixed',
							'top':'0px',
							'left':'0px',
							'width':'100%'
						}}
						zDepth={2}
						iconElementLeft={
							 <IconMenu
						      iconButtonElement={<IconButton><MenuIcon color={'white'}/></IconButton>}
						      anchorOrigin={{horizontal: 'left', vertical: 'top'}}
						      targetOrigin={{horizontal: 'left', vertical: 'top'}}
						    >
						     {menuItems}
						    </IconMenu>
						}
						iconElementRight={
							<div>
							<Avatar src="https://avatars2.githubusercontent.com/u/8779656?v=3&s=460" />
							</div>
						}
					>
					<h id="centerIcon">{ this.state.currentSection }</h>
					</AppBar>
				</MuiThemeProvider>
   			</div>
  		)
	}
}
