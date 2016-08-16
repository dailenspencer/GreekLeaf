import React from 'react';
import {saveLike, findPost} from '../../../Actions/ParseActions';
import Parse from 'parse';
import ParseReact from 'parse-react';

export default class HeartButton extends React.Component {
  constructor(props){
    super(props);
    this.state = {
       animate: ''
    }
  }

  componentWillMount(){
    findPost(this.props.postData.id).then((resp) => {
      this.setAnimation(resp);
    })
  }

  setAnimation(resp){
    var currentUserName = Parse.User.current().get("name");
    var post = resp[0];
    var likes = post.get('uplikes');
    if(~likes.indexOf(currentUserName)){

      this.setState({animate: 'heartAnimation'})
      return;
    } 
    this.setState({animate: ''})
  }


  handleHeartClick(){
    console.log('handle heart click');
    if(this.state.animate === ''){
      saveLike(this.props.postData.id);
      this.setState({
        animate:'heartAnimation'
      })
      this.props.changeLikeCount(true);
    } else {
      saveLike(this.props.postData.id);
      this.setState({
        animate:''
      })
      this.props.changeLikeCount(false);
    }
  }


  render() {
    return (
      <div className={'heart ' + this.state.animate} onClick={this.handleHeartClick.bind(this)}></div>
    )
  }
}