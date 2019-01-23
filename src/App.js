import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import EditSpirits from './components/EditSpirit';
import Spirits from './components/Spirits'
import logo from './logo.svg';
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
        </header>
        <Switch>
          <Route path='/admin' component={EditSpirits}/>
          <Route path='/spirits' component={Spirits}/>
        </Switch>
      </div>
    );
  }
}

export default App;
