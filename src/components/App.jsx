import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import AppView from './App/view/AppView';
import Routes from './App/Routes';
import Menu from './Menu';
import { BrowserRouter as Router } from 'react-router-dom';

import './App/view/main.css';


class App extends Component {
  constructor(props: any) {
    super(props)
  }

  render() {
    const { Page } = this.props;
    return (
        <Router onChange={this._handleRoute}>
          <AppView>
            <Menu {...this.props}/>
            <Routes />
          </AppView>
        </Router>
    )
  }
}
export default App;
