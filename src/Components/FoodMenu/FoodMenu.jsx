import React from 'react';
import DatePicker from 'material-ui/DatePicker';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {queryForFood} from '../../Actions/ParseActions';

export default class FoodMenu extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			breakfast: null,
			lunch: null,
			dinner: null
		}
	}

	componentWillMount(){
		queryForFood().then((resp) => {
	     resp.forEach((menu, index) => {
	     	if(menu.get('Breakfast')){
	     		this.setState({breakfast: menu.get('Breakfast')})
	     	} else {
	     		this.setState({breakfast: 'No breakfast set'})
	     	}

	     	if(menu.get('Lunch')){
	     		this.setState({lunch: menu.get('Lunch')})
	     	} else {
	     		this.setState({lunch: 'No lunch created'})
	     	}

	     	if(menu.get('Dinner')){
	     		this.setState({dinner: menu.get('Dinner')})
	     	} else {
	     		this.setState({dinner: 'No dinner set'})
	     	}


	     })

	  })
		
	}

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
						<p>{this.state.breakfast}</p>
					</div>
					<div id="LunchContainer">
						<h>Lunch</h>
						<p>{this.state.lunch}</p>
					</div>
					<div id="DinnerContainer">
						<h>Dinner</h>
						<p>{this.state.dinner}</p>
					</div>
				</div>
			</div>
		);
	}
}