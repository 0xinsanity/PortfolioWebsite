import React from 'react';
import './App.css';
import {NavigationBar} from './modules/NavigationBar';
import {CarouselView} from './modules/CarouselView';
import {Footer} from './modules/Footer';

class App extends React.Component {

  render() {
    return (
      <div>
        <NavigationBar />
        <CarouselView />
        <Footer />
      </div>
    );
  }
}

export default App;