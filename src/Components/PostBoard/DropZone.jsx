
import React from 'react';

export default class DropZoneArea extends React.Component {
    constructor(props){
      super(props);
      this.state = {

      }

    }

   componentDidMount(){
    var myDropzone = new Dropzone("form#demo-upload", { url: "/"});
    this.props.setMyDropZone(myDropzone);
    myDropzone.on('addedfile',(file) => {
      this.props.addFileToStorage(file);
    })
  }

  

    render(){
      return(
        <div id="dropzone">
          <form action="/" className="dropzone needsclick dz-clickable" id="demo-upload">
            <div className="dz-default dz-message">
              <span>Drop files here to upload</span>
            </div>
          </form>
        </div>
       
        )
    }
}