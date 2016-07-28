import React from 'react';
import SearchBar from './SearchBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Tabs, Tab} from 'material-ui/Tabs';
import SwipeableViews from 'react-swipeable-views';
import {queryForNewMembers} from '../../Actions/ParseActions';

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
	      newMemberDirectoryEntries : ''
	    };
  	}



  	handleChange = (value) => {
	    this.setState({
	      slideIndex: value,
	    });
  	};

  	componentDidMount(){
	    queryForNewMembers().then((resp) => {
	      var newMemberDirectoryEntries = this.createDirectoryEntryElements(resp);
	      this.setState({newMemberDirectoryEntries: newMemberDirectoryEntries});
	    })

  	}

  	createDirectoryEntryElements(users){
  		var directoryEntryElements = []
  		var directoryEntryRowElements = []

  		var directoryEntryRowElement = (
			<div className="DirectoryEntryRow">
				{directoryEntryElements}
			</div>
	  	)

  		var counter = 0;
  		users.forEach(function(user, index){
  			if(counter < 4){
  				counter++;
  				var directoryEntryElement = (
		  			 <div className="DirectoryEntry" key={index}>
		          		<h className="InitialsHeader">DS</h>
		        	</div>
		        )
		        directoryEntryElements.push(directoryEntryElement);
  			}
  			if(counter === 4){
  				counter = 0;
  				directoryEntryRowElements.push(directoryEntryRowElement);
  				directoryEntryElements = [];
  			}
  		})

  		
  		directoryEntryRowElement = (
  			<div className="DirectoryEntryRow">
				{directoryEntryElements}
			</div>
  		)

  		directoryEntryRowElements.push(directoryEntryRowElement);

		return directoryEntryRowElements;
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
		          <div>
		            {this.state.newMemberDirectoryEntries}
		          </div>
		          <div>
		            
		          </div>
		          <div>
		            
		          </div>
		          <div>
		            
		          </div>
		        </SwipeableViews>


			</div>
		);
	}
}