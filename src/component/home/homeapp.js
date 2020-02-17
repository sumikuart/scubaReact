import React, { Component } from 'react';
import {BrowserRouter, Route, Switch } from 'react-router-dom'


//Component  
import InfoSection from  './info.js'
import Shop from  './shop.js'
import Eventyr from './eventyr'
import Kurser from './kurser'

class HomeApp extends Component {
  componentDidMount() {
    window.scrollTo(0, 0)
  }
  render() {
    return (
          <main>
            <InfoSection />
            <Shop />
            <Eventyr />
            <Kurser />
          </main>
    )
  }
}

export default HomeApp;
