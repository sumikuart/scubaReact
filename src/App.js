import React, { Component } from 'react';
import {BrowserRouter, Route, Switch } from 'react-router-dom'


//Component  
import NavBar from "./component/UI/nav"
import Footer from  './component/UI/footer'
import HomeApp from  './component/home/homeapp'
import ComAbout from  './component/about/about'
import ComContact from './component/contact/contact'
import Comkurser from './component/kurser/kurser'
import ComRejser from './component/rejser/rejser'
import ComShop from './component/shop/shop'



class App extends Component {
  render() {
    return (
          <BrowserRouter>
      <div className="App">
        <div id="wrapper">
          <NavBar /> 
   
           <Switch>
            <Route exact path='/' component={HomeApp} />
            <Route exact path='/Home' component={HomeApp} />
            <Route path='/Shop' component={ComShop} />
            <Route path='/Rejser' component={ComRejser} />
            <Route path='/Kurser' component={Comkurser} />
            <Route path='/Contact' component={ComContact} />
            <Route path='/About' component={ComAbout} />
           </Switch>
          <Footer />
        </div>
      </div>
      </BrowserRouter>
    )
  }
}

export default App;
