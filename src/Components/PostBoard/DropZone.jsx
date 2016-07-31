
import React from 'react';


export default class Dropzone extends React.Component {
    constructor(props){
      super(props);
      this.state = {
        
      }
    }

    render(){
      return(
        <div id="dropzone">
          <form action="/upload" className="dropzone needsclick dz-clickable" id="demo-upload">
            <div className="dz-default dz-message">
              <span>Drop files here to upload</span>
            </div>
          </form>
        </div>
       
        )
    }
}