import React from 'react';

export default class DirectoryEntries extends React.Component {
  constructor(props){
  	super(props);
  	this.state = {
  		
  	}
  }

  createDirectoryEntries(){
    return (
      <div id="DirectoryEntryContainer">
        <div className="DirectoryEntryRow">
          <div className="DirectoryEntry">
            <h className="InitialsHeader">DS</h>
          </div>
          <div className="DirectoryEntry">

          </div>
          <div className="DirectoryEntry">

          </div>
          <div className="DirectoryEntry">

          </div>
        </div>
        <div className="DirectoryEntryRow">
          <div className="DirectoryEntry">

          </div>
          <div className="DirectoryEntry">

          </div>
          <div className="DirectoryEntry">

          </div>
          <div className="DirectoryEntry">

          </div>
        </div>
        <div className="DirectoryEntryRow">
          <div className="DirectoryEntry">

          </div>
          <div className="DirectoryEntry">

          </div>
          <div className="DirectoryEntry">

          </div>
          <div className="DirectoryEntry">

          </div>
        </div>
        <div className="DirectoryEntryRow">
          <div className="DirectoryEntry">

          </div>
          <div className="DirectoryEntry">

          </div>
          <div className="DirectoryEntry">

          </div>
          <div className="DirectoryEntry">

          </div>
        </div>
      </div>
    )
  }

  
  render() {
    var directoryEntries = this.createDirectoryEntries();
    return (
      <div id="DirectoryEntries">
        {directoryEntries}
      </div>
    );

  }
}