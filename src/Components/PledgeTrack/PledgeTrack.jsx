import React from 'react';
import {Gmaps, Marker, InfoWindow, Circle} from 'react-gmaps';
import {queryForLocations} from '../../Actions/ParseActions';

export default class PledgeTrack extends React.Component {

	constructor(props){
		super(props);
		this.state = {
			markers: ''
		}
	}

	componentDidMount(){
		queryForLocations().then((users) =>{
			this.createMarkers(users);
		})
	}

	createMarkers(users){
		var markers = users.map((user, index) => {
			console.log(user);
			var lastLocation = user.get('lastLocation');
			var position = {
				latitude: lastLocation.latitude,
				longitude: lastLocation.longitude
			}
			console.log(position);
			return (
				<Marker
					position={position}
	      	defaultAnimation={2}
	      	key={index}
				/>
			)
		})
		console.log(markers, "markers");
		this.setState({markers: markers})
	}

	render() {
		return (
			<div id="map">
				<Gmaps
					
		            width={'100%'}
		            height={'100%'}
		            lat={34.024212}
		            lng={-118.496475}
		            zoom={13}
		            loadingMessage={'Be happy'}
		            params={{v: '3.exp', key: 'AIzaSyAlCGs74Skpymw9LLAjkMg-8jQ1gIue9n8'}}
		         >
		         {this.state.markers}
          </Gmaps>
			</div>
		);
	}
}