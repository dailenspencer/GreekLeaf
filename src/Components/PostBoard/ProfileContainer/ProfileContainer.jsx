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



export default class ProfileContainer extends React.Component {
    constructor(props){
      super(props);
      this.state = {
        
      }
    }

    render(){

      const style = {
        marginTop: 55,
        marginLeft: 50,
      };
      return(
        <div id="ProfileContainer">
          <div id="ProfileContainerAvatar">
            <MuiThemeProvider>
              <Avatar src="https://avatars2.githubusercontent.com/u/8779656?v=3&s=460" style={{'width':'120px','height':'120px'}} />
            </MuiThemeProvider>
          </div>
          <div id="EditProfileButton">
            <MuiThemeProvider>
            <RaisedButton label="Edit" style={{'width':'100px'}}/>
            </MuiThemeProvider>
          </div>
           <MuiThemeProvider>
              <List style={{'width':'100%','marginTop':'140px','marginLeft':'-130px'}}>
                <ListItem primaryText="850-276-9677" leftIcon={<Call />}/>
                <ListItem primaryText="dailenspencer@gmail.com" leftIcon={<ContentDrafts />} />
                <ListItem primaryText="GreekLeaf, LLC" leftIcon={<Work />} />
                <ListItem primaryText="3516 Dragons Ridge Road, PCB, FL" leftIcon={<Navigation />} />
                <ListItem primaryText="Software Engineering" leftIcon={<School />} />
                <ListItem primaryText="2018" leftIcon={<ActionGrade />} />
              </List>
            </MuiThemeProvider>
            
        </div>
      )
    }
}