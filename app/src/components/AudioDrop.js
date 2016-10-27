import React, { Component } from 'react';
import Dropzone from 'react-dropzone';
import '../App.css';

class AudioDrop extends Component {
  onDrop(acceptedFiles) {
    this.props.handleDrop(acceptedFiles);
  }
  render() {
    return (
        <div className="Dropzone">
          <Dropzone
            disableClick={true}
            multiple={false}
            accept={'audio/wav'}
            onDrop={this.onDrop.bind(this)}>
                <div>Drop <code>.wav</code> file here...</div>
          </Dropzone>
        </div>
    );
  }
}

export default AudioDrop;
