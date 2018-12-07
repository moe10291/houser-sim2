import React, { Component } from 'react';
import './App.css';
// import Dashboard from './component/Dashboard/Dashboard';
// import Wizard from './component/Wizard/Wizard';
import route from './Route'
import Header from './component/Header/Header';
import House from './component/House/House';



class App extends Component {
  render() {
    return (
      <div className="App">
      {route}
      <Header/>
      <House/>
      </div>
    );
  }
}

export default App;
