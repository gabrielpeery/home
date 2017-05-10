import React, { Component } from 'react';
import MenuView from './Menu/view/MenuView';

class Menu extends Component {
  constructor(props: any) {
    super(props)

  }

  render() {
    const path = window.location.pathname.split('/');
    console.log(this);
    return (
      <MenuView 
        path={path}
        {...this.props}
      />
    )
  }
}
export default Menu;
