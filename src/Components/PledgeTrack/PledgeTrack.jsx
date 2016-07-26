import React from 'react';
import {Gmaps, Marker, InfoWindow, Circle} from 'react-gmaps';

export default class PledgeTrack extends React.Component {

	createMap(){

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
          		</Gmaps>
			</div>
		);
	}
}