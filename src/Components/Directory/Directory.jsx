import React from 'react';
import DirectoryEntries from './DirectoryEntries';
import SearchBar from './SearchBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Tabs, Tab} from 'material-ui/Tabs';
import SwipeableViews from 'react-swipeable-views';

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
	      slideIndex: 0,
	    };
  	}

  	handleChange = (value) => {
	    this.setState({
	      slideIndex: value,
	    });
  	};

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
		            <DirectoryEntries filter={'NewMembers'}/>
		          </div>
		          <div>
		            <DirectoryEntries filter={'Brothers'}/>
		          </div>
		          <div>
		            <DirectoryEntries filter={'ExecutiveBoard'}/>
		          </div>
		          <div>
		            <DirectoryEntries filter={'HouseStaff'}/>
		          </div>
		        </SwipeableViews>


			</div>
		);
	}
}