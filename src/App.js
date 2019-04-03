import React, { Component } from 'react';
import {BrowserRouter, Route, Switch } from 'react-router-dom'


//Component  
import NavBar from "./component/nav"
import InfoSection from  './component/info.js'
import Shop from  './component/shop.js'
import Eventyr from './component/eventyr'
import Kurser from './component/kurser'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div id="wrapper">
          <NavBar /> 
          <InfoSection /> 
         
          <main>
            <Shop />
            <Eventyr />
            <Kurser />
          </main>

          <footer></footer>
        </div>
      </div>
    )
  }
}

export default App;
