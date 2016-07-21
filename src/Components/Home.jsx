import React from 'react';
import Nav from './Nav';
import PostBoard from './PostBoard/PostBoard'

export default class Home extends React.Component {
  constructor(props){
  	super(props);
  	this.state = {
  		visibleComponent : <PostBoard/>
  	}
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
