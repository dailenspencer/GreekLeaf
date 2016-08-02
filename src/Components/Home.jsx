import React from 'react';
import Nav from './Nav';
import PostBoard from './PostBoard/PostBoard';
import Messenger from './Messenger/Messenger';
import Directory from './Directory/Directory';
import FoodMenu from './FoodMenu/FoodMenu';
import PledgeTrack from './PledgeTrack/PledgeTrack';

import Parse from 'parse';
import ParseReact from 'parse-react';



export default class Home extends React.Component {
  mixins: [ParseReact.Mixin]
  constructor(props){
  	super(props);
    var currentUser = Parse.User.current()
  	this.state = {
  		visibleComponent : <PostBoard user={currentUser}/>
  	}
    this.renderNewSection = this.renderNewSection.bind(this);
  }


  
  renderNewSection(section){
    var currentUser = Parse.User.current()
    switch (section) {
  		case 'Home':
 			  this.setState({visibleComponent : <PostBoard user={currentUser}/>})
  			break;
  		case 'Messenger':
  			this.setState({visibleComponent : <Messenger user={currentUser}/>})
  			break;
  		case 'Directory':
  			this.setState({visibleComponent : <Directory user={currentUser}/>})
  			break;
  		case 'Food Menu':
  			this.setState({visibleComponent : <FoodMenu user={currentUser}/>})
  			break;
  		case 'Pledge Track':
  			this.setState({visibleComponent : <PledgeTrack user={currentUser}/>})
  			break;
  		default:
  			break;
  	}
  }

  render() {

   

    return (
      <div style={{'height':'100%'}}>
      	<Nav renderNewSection={this.renderNewSection}/>
      	{this.state.visibleComponent}
      </div>
    );

  }
}
