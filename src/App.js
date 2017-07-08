import React from 'react';
import './App.css';
import {NavigationBar} from './modules/NavigationBar';
import {CarouselView} from './modules/CarouselView';

class App extends React.Component {

  render() {
    return (
      <div>
        <NavigationBar />
        <CarouselView />
      </div>
    );
  }
}

export default App;