import React from 'react';
import SearchBar from './SearchBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Tabs, Tab} from 'material-ui/Tabs';
import SwipeableViews from 'react-swipeable-views';
import {queryForMembers, queryForStaff} from '../../Actions/ParseActions';
import $ from 'jquery';
import DirectoryEntry from './DirectoryEntry';


const styles = {
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400,
  },
  slide: {
    padding: 10,
  },
};



export default class Directory extends React.Component {

	constructor(props) {
	    super(props);
	    this.state = {

	      slideIndex : 0,
	      newMemberDirectoryEntries : '',
	      activeMemberDirectoryEntries : '',
	      executiveMemberDirectoryEntries : '',
	      staffMemberDirectoryEntries : ''
	    };
  		this.createDirectoryEntryElements = this.createDirectoryEntryElements.bind(this)
  		this.handleClick = this.handleClick.bind(this);
  	}




  	handleChange = (value) => {
	    this.setState({
	      slideIndex: value,
	    });
  	};

  	componentDidMount(){
  		
		queryForMembers("new").then((resp) => {
	      var newMemberDirectoryEntries = this.createDirectoryEntryElements(resp);
	      this.setState({newMemberDirectoryEntries: newMemberDirectoryEntries});
	    })
	    queryForMembers("active").then((resp) => {
	      var activeMemberDirectoryEntries = this.createDirectoryEntryElements(resp);
	      this.setState({activeMemberDirectoryEntries: activeMemberDirectoryEntries});
	    })
	    queryForMembers("executive").then((resp) => {
	      var executiveMemberDirectoryEntries = this.createDirectoryEntryElements(resp);
	      this.setState({executiveMemberDirectoryEntries: executiveMemberDirectoryEntries});
	    })
	    queryForStaff().then((resp) => {
	    	var staffMemberDirectoryEntries = this.createDirectoryEntryElements(resp);
	      	this.setState({staffMemberDirectoryEntries: staffMemberDirectoryEntries});
	    })
  	}

  	createDirectoryEntryElements(users){
  		
  		var directoryEntryElements = []

		users.forEach((user, index) =>{
  			directoryEntryElements.push(<DirectoryEntry key={index} handleClick={this.handleClick} user={user}/>);
		})
		return directoryEntryElements;
  }

  	handleClick(target){
  		console.log('handle click');
  	}


	render() {
		return (
			<div id="DirectoryContainer">
				<SearchBar/>
				<div id="DirectoryTabs">
					<MuiThemeProvider>
						<Tabs
				          onChange={this.handleChange}
				          value={this.state.slideIndex}
				        >
				          <Tab label="New Members" value={0} style={{'backgroundColor': '#6AC1B8'}}/>
				          <Tab label="Brothers" value={1} style={{'backgroundColor': '#6AC1B8'}}/>
				          <Tab label="Executive Board" value={2} style={{'backgroundColor': '#6AC1B8'}}/>
				          <Tab label="House Staff" value={3} style={{'backgroundColor': '#6AC1B8'}}/>
				        </Tabs>
				    </MuiThemeProvider>
				</div>
				<SwipeableViews
		          index={this.state.slideIndex}
		          onChangeIndex={this.handleChange}
		        >
		          <div className="DirectoryEntriesContainer">
		            {this.state.newMemberDirectoryEntries}
		          </div>
		          <div className="DirectoryEntriesContainer">
		            {this.state.activeMemberDirectoryEntries}
		          </div>
		          <div className="DirectoryEntriesContainer">
		            {this.state.executiveMemberDirectoryEntries}
		          </div>
		          <div className="DirectoryEntriesContainer">
		            {this.state.staffMemberDirectoryEntries}
		          </div>
		        </SwipeableViews>
			</div>
		);
	}
}