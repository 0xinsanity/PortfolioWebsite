import React from 'react';
import './App.css';
import $ from 'jquery'; 

class App extends React.Component {

  render() {
    return (
      <div className="navigation-bar">
          <ul className="top-bar">
              <a href="index.html" className="item title">NOAH HANOVER ART</a>
              <a href="aboutme.html" className="item">About Me</a>
              <a href="design.html" className="item">Design</a>
              <a href="abstract.html" className="item">Abstract</a>
          </ul>
      </div>
    );
  }
}

export default App;