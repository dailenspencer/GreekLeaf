import React from 'react';
import DatePicker from 'material-ui/DatePicker';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

export default class FoodMenu extends React.Component {

	render() {
		return (
			<div>
				<div id="DatePicker">
					<MuiThemeProvider>
						<DatePicker
							maxDate = { new Date() }
						    defaultDate = { new Date() }
							inputStyle = {
								{
									'color': '#6AC1B8',
									'textAlign': 'center',
									'width': '100%' }
									}
						    	autoOk = { true }
							    />
					</MuiThemeProvider>
				</div>
				<div id="FoodMenuContainer">
					<div id="BreakfastContainer">
						<h>Breakfast</h>
						<p>A bunch of text that would take up the breakfast portion blahh</p>
					</div>
					<div id="LunchContainer">
						<h>Lunch</h>
						<p>A bunch of text that would take up the lunch portion blahh</p>
					</div>
					<div id="DinnerContainer">
						<h>Dinner</h>
						<p>A bunch of text that would take up the dinner portion blahh</p>
					</div>
				</div>
			</div>
		);
	}
}