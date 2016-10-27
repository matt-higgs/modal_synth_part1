import React, { Component } from 'react';
import '../App.css';

import AudioDrop from './AudioDrop';
import Header from './Header';

class Main extends Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      dropAccepted: false,
    }
  }
  handleDrop(acceptedFiles) {
    if (typeof acceptedFiles[0] === 'object') {
      console.log("Drop accepted");
      console.log(acceptedFiles[0]);
      this.setState({dropAccepted: true});
    } else {
      console.log('Drop rejected!');
      this.setState({dropAccepted: false});
    }
  }
  render() {
    let button = null;
    if(this.state.dropAccepted){
      button = <p>A button will appear here!</p>
    } else {
      button = <p></p>
    }
    return (
      <div className="App">
        <Header />
        <p className="App-intro">
          To get started, drag and drop a <code>.wav</code> file into the box below...
        </p>
        <AudioDrop handleDrop={this.handleDrop.bind(this)}/>
        {button}
      </div>
    );
  }
}

export default Main;
