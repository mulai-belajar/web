import React, { Component } from 'react';
import Iconfeature from './components/small/icon-feature'
import Sidebar from './components/medium/sidebar'
import {Grid} from 'semantic-ui-react'

import Footer from './components/small/footer'
import './App.css';
import {BrowserRouter as Router, Route, Link} from "react-router-dom"

import Kelaslist from './components/medium/kelaslist'

import Homepage from './pages/homepage'

class App extends Component {
    render() {
     return (
       <Router>
         <div className="App">
             <div>
               <Route exact path="/" component={Homepage}/>

             </div>
         </div>
       </Router>

      );
    }
  }

export default App
