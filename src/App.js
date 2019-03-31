import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './components/Home'
import AdminAccount from './components/AdminAccount';
import SpiritsComponent from './components/SpiritsComponent'

import wallpaper from './SuperSmashBrosUltimate.jpg';

import './App.css';


class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={wallpaper} className="wallpaper" alt="wallpaper" />
        </header>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/admin' component={AdminAccount} />
          <Route path='/spirits' component={SpiritsComponent} />
        </Switch>
      </div>
    );
  }
}

export default App;
