import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Avatar from 'material-ui/Avatar';
import {List, ListItem} from 'material-ui/List';
import ContentInbox from 'material-ui/svg-icons/content/inbox';
import ActionGrade from 'material-ui/svg-icons/action/grade';
import ContentSend from 'material-ui/svg-icons/content/send';
import ContentDrafts from 'material-ui/svg-icons/content/drafts';

import Call from 'material-ui/svg-icons/maps/local-phone';
import Navigation from 'material-ui/svg-icons/maps/navigation';
import Work from 'material-ui/svg-icons/social/location-city';
import School from 'material-ui/svg-icons/action/account-balance';

import RaisedButton from 'material-ui/RaisedButton';

import TextField from 'material-ui/TextField';

import {profileContainerInitialAvatar} from '../../../Helpers/RenderHelpers';

import Parse from 'parse';
import ParseReact from 'parse-react';


export default class ProfileContainer extends React.Component {
    constructor(props){
      super(props);
      this.state = {
        view: 'Label',
      }
      this.handleSave = this.handleSave.bind(this);
      this.handleEdit = this.handleEdit.bind(this);
      this.handleClick = this.handleClick.bind(this);

      this.handleTextFieldChange = this.handleTextFieldChange.bind(this);
      
    }

    componentDidMount(){
      var currentUser = Parse.User.current()
      this.setState({
        profilePicture:currentUser.get("ProfilePicture"),
        phone:currentUser.get("phonenumber"),
        email:currentUser.get("email"),
        work:currentUser.get("company"),
        address:currentUser.get("address"),
        major:currentUser.get("major"),
        class:currentUser.get("year")
      })
    }

    handleClick(){
      if(this.state.view === 'TextField'){
        this.handleSave()
      } else if(this.state.view === 'Label'){
        this.handleEdit()
      }
    }

    handleSave(){
     this.setState({
        view:'Label'
      });
     console.log(this.state.email, "email");
     var currentUser = Parse.User.current()
     currentUser.set("phonenumber",this.state.phone);
     currentUser.set("email", this.state.email);
     currentUser.set("address", this.state.address);
     currentUser.set("year", this.state.class);
     currentUser.set("major", this.state.major);
     currentUser.set("company", this.state.work);
     currentUser.set("searchText",this.state.phone + this.state.email + this.state.address + this.state.year + this.state.major + this.state.company);
     currentUser.save();
    }

    handleEdit(){
      this.setState({
          view:'TextField'
        });
    }

    /*************************
    TextField Handle Methods
    ************************/

    handleTextFieldChange(type, event){
      switch(type){
        case 'Phone' :
          this.setState({phone: event.target.value});
          break;
        case 'Email' :
          this.setState({email: event.target.value});
          break;
        case 'Work' :
          this.setState({work: event.target.value});
          break;
        case 'Address' :
          this.setState({address: event.target.value});
          break;
        case 'Major' :
          this.setState({major: event.target.value});
          break;
        case 'Class' :
          this.setState({class: event.target.value});
          break;
      }
    }
    


    createLabelDiv(){
      return (
        <MuiThemeProvider>
          <List style={{'width':'100%','marginTop':'140px','marginLeft':'-130px'}}>
            <ListItem primaryText={this.state.phone} leftIcon={<Call />}/>
            <ListItem primaryText={this.state.email} leftIcon={<ContentDrafts />} />
            <ListItem primaryText={this.state.work} leftIcon={<Work />} />
            <ListItem primaryText={this.state.address} leftIcon={<Navigation />} />
            <ListItem primaryText={this.state.major} leftIcon={<School />} />
            <ListItem primaryText={this.state.class} leftIcon={<ActionGrade />} />
          </List>
        </MuiThemeProvider>
      )
    }

    createTextFieldDiv(){
      return (
        <MuiThemeProvider>
          <List style={{'width':'100%','marginTop':'140px','marginLeft':'-130px'}}>
            <ListItem leftIcon={<Call />}>
              <TextField
                hintText="Phone"
                value={this.state.phone}
                onChange={this.handleTextFieldChange.bind(this, "Phone")}
              />
            </ListItem>
            <ListItem leftIcon={<ContentDrafts />}>
              <TextField
                hintText="Email"
                value={this.state.email}
                onChange={this.handleTextFieldChange.bind(this, "Email")}
              />
            </ListItem>
            <ListItem leftIcon={<Work />}>
              <TextField
                hintText="Work"
                value={this.state.work}
                onChange={this.handleTextFieldChange.bind(this, "Work")}
              />
            </ListItem>
            <ListItem leftIcon={<Navigation />}>
              <TextField
                hintText="Address"
                value={this.state.address}
                onChange={this.handleTextFieldChange.bind(this, "Address")}
              />
            </ListItem>
            <ListItem leftIcon={<School />}>
              <TextField
                hintText="Major"
                value={this.state.major}
                onChange={this.handleTextFieldChange.bind(this, "Major")}
              />
            </ListItem>
            <ListItem leftIcon={<ActionGrade />}>
              <TextField
                hintText="Graduating Class"
                value={this.state.class}
                onChange={this.handleTextFieldChange.bind(this, "Class")}
              />
            </ListItem>
          </List>
        </MuiThemeProvider>
      )
    }


    createStyledMaterialAvatar(url){
      return (
          <MuiThemeProvider>
                <Avatar src={url} style={{'width':'120px','height':'120px'}} />
          </MuiThemeProvider>
        )
    }
    
    render(){
      var currentDiv;
      var buttonText;
      var containerHeight;

      
      if(this.state.view === 'Label'){
        currentDiv = this.createLabelDiv();
        buttonText = 'Edit';
        containerHeight = '500';
      } else {
        currentDiv = this.createTextFieldDiv();
        buttonText = 'Save';
        containerHeight = '650'
      }

      var currentUser = Parse.User.current()
      var profilePictureFile = currentUser.get("ProfilePicture")
      var name = currentUser.get('name');
      var avatar;
      if(profilePictureFile){
        avatar = this.createStyledMaterialAvatar(profilePictureFile.url())
      } else {
        avatar = profileContainerInitialAvatar();
      }

      return(
        <div id="ProfileContainer" style={{'height':containerHeight}}>
          <div id="ProfileContainerAvatar">
            {avatar}
          </div>
          <div id="EditProfileButton">
            <MuiThemeProvider>
            <RaisedButton label={buttonText} style={{'width':'100px'}} onClick={this.handleClick}/>
            </MuiThemeProvider>
          </div>
           {currentDiv}
        </div>
      )
    }



}


