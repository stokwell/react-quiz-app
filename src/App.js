import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom';

import Navigation from './components/navigation/Navigation';

import TestsList from './containers/TestsList';
import TestFormPage from './containers/TestFormPage';
import EditTestFormPage from './containers/EditTestFormPage';
import TestPage from './containers/TestPage';
import Dashboard from './components/dashboard/Dashboard.js'



class App extends Component {
  render() {
    return (
      <div className="page">
        <Navigation />
        <Route exact path="/" component={TestsList} />
        <Route exact path="/new-test" component={TestFormPage} />
        <Route exact path="/test/:id/edit" component={EditTestFormPage} />
        <Route exact path="/test/:id" component={TestPage}/>
        <Route exact path="/dashboard" component={Dashboard}/>
      </div>
    );
  }
}

export default App;
