import React, { Component } from 'react';
import './App.css';
import Home from './Home'
import Logo from './Logo'
import {Link, Route} from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
         <Logo />
        </header>
          <nav>
              <Link to="/home">Home</Link>
          </nav>
          <div>
              <Route path="/home" component={Home}/>
          </div>
      </div>
    );
  }
}

export default App;
