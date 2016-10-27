import React, { Component } from 'react';
import logo from '../logo_400_thumb.svg';
import '../App.css';

class Header extends Component {
  render() {
    return (
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Modal Synth: Part 1</h2>
      </div>
    );
  }
}

export default Header;
