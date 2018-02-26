import 'semantic-ui-css/semantic.min.css';
import React, { Component } from 'react'
import './App.css'
import Homepage from './pages/homepage'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

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
