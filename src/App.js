import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom';

import Navigation from './components/navigation/Navigation';

import TestsList from './containers/TestsList';
import TestFormPage from './containers/TestFormPage';
import EditTestFormPage from './containers/EditTestFormPage';
import TestPage from './containers/TestPage';
import Dashboard from './components/dashboard/Dashboard.js'
import Home from './containers/Home';

import LoginPage from './components/login/LoginPage';
import SignupPage from './components/signup/SignupPage';

import requireAuth from './utils/requireAuth';


class App extends Component {
  render() {
    return (
      <div className="page">
        <Navigation />
        <Route exact path="/" component={Home} />
        <Route exact path="/new-test" component={TestFormPage} />
        <Route exact path="/test/:id/edit" component={requireAuth(EditTestFormPage)} />
        <Route exact path="/test/:id" component={TestPage}/>
        <Route path="/login" component={LoginPage}></Route>
        <Route path="/signup" component={SignupPage} />
        <Route path="/dashboard" component={requireAuth(Dashboard)} />
      </div>
    );
  }
}

export default App;
