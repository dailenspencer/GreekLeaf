import React from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import RaisedButton from 'material-ui/RaisedButton'
import {hideProfileModal} from '../../Helpers/AnimationHelpers'

export default class ProfileModal extends React.Component {
	constructor(props){
		super(props)
		this.state = {

		}
	}
	
	componentDidMount(){
		
	}

	hideProfileModal(){
		hideProfileModal()
	}

	render() {
		return (
			<div className="ProfileModal">
				<div className="ProfileModalTop">
					<img className="ProfileModalImage" src="https://avatars2.githubusercontent.com/u/8779656?v=3&s=460"/>
					<div className="ProfileModalTopRight">
						<h className="ProfileModalInfoName"></h>
						<div className="ProfileModalDirectMessage">
							<MuiThemeProvider>
				            	<RaisedButton label="Direct Message" style={{'width':'200px','left':'200px'}}/>
				            </MuiThemeProvider>
						</div>
					</div>
				</div>
				<div className="ProfileModalInfoBox">
					<h className="ProfileModalInfoPhone">850-276-9677</h>
					<h className="ProfileModalInfoEmail">dailenspencer@gmail.com</h>
					<h className="ProfileModalInfoWork">GreekLeaf, LLC</h>
					<h className="ProfileModalInfoAddress">3516 Dragons Ridge Road</h>
					<h className="ProfileModalInfoMajor">Software Engineer</h>
					<h className="ProfileModalInfoYear">2018</h>
				</div>
				<button className="CancelProfileModalButton" onClick={this.hideProfileModal}>
					<img className="cancelProfileModalButtonImage" src="Images/downarrow.png"/>
				</button>
			</div>
		)
	}
}