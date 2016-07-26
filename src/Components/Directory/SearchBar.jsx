import React, { Component } from 'react';

export default class SearchBar extends Component {
  constructor(props) {
    super(props)

    this.state = {
      
    }
  }

  render() {
    return(
      <div id="SearchBar">
        <form id="demo-2">
          <input type="search" placeholder="Search"/>
        </form>
      </div>
    )
  }
}