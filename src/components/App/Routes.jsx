import React, { Component } from 'react'

import {
  BrowserRouter as Router,
  Route,
  IndexRoute,
  Link
} from 'react-router-dom'

import HomePage from '../Home';
import About from '../About';

const Routes = ({props}) => (
    <div id="page-container">
      <Route exact path="/" component={HomePage}/>
      <Route path="/about" component={About}/>
    </div>
)
export default Routes;
