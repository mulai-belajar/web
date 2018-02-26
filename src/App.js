
import 'semantic-ui-css/semantic.min.css';
import React, { Component } from 'react'
import { Button, Dropdown, Menu,Grid, Image } from 'semantic-ui-react'
import './App.css'
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
