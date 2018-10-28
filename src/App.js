import React, { Component } from 'react';
import logo from './logo.png';
import './App.css';

class App extends Component {
  render() {
    return (
    <div className="target">
      <h3 className="title">Beach party</h3>
      <img src={logo} className="logo"/>
      <p className="p">They are all invited to the party this Sunday</p>
    </div>
      );
  }
}

export default App;
