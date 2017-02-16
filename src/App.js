import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TileList from './TileList.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
		  
        </div>
		<div>
			<p className="App-intro">
				Hello World!
			</p>
			<TileList list={this.props.media}/>
		</div>
      </div>
    );
  }
}

export default App;
