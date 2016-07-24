import React from 'react';
import Nav from './Nav';
import PostBoard from './PostBoard/PostBoard';
import PledgeTrack from './PledgeTrack/PledgeTrack';

export default class Home extends React.Component {
  constructor(props){
  	super(props);
  	this.state = {
  		visibleComponent : <PostBoard/>
  	}
    this.renderNewSection = this.renderNewSection.bind(this);
  }

  renderNewSection(section){
  	switch (section) {
  		case 'Home':
 			this.setState({visibleComponent : <Postboard/>})
  			break;
  		case 'Messenger':
  			this.setState({visibleComponent : <Messenger/>})
  			break;
  		case 'Directory':
  			this.setState({visibleComponent : <Directory/>})
  			break;
  		case 'Food Menu':
  			this.setState({visibleComponent : <FoodMenu/>})
  			break;
  		case 'Pledge Track':
        console.log('set pledge track');
  			this.setState({visibleComponent : <PledgeTrack/>})
  			break;
  		default:
  			break;
  		

  	}
  }

  render() {
    return (
      <div>
      	<Nav renderNewSection={this.renderNewSection}/>
      	{this.state.visibleComponent}
      </div>
    );

  }
}
