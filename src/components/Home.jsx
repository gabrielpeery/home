import React, { Component } from 'react'
import ReactDOM from 'react-dom';

import HomeView from './Home/view/HomeView';


class Home extends Component {
  constructor(props: any) {
    super(props)

  }

  render() {
    return (
      <HomeView/>
    )
  }
}

export default Home;
