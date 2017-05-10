import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import {SubNav, SubNavItem} from '../SubNav';

class MenuView extends Component {
  constructor(props: any) {
    super(props)

  }

  render() {
    return (
      <nav className="menu-container">
        <Link to="/">HOME</Link>
        <Link to="/about">ABOUT</Link>
        <SubNav is="projects" to="/projects"{...this.props}>
          <SubNavItem><Link to="/projects/prots">PROTS</Link></SubNavItem>
          <SubNavItem><Link to="/projects/projo">PROJES</Link></SubNavItem>
          <SubNavItem><Link to="/projects/pring">PECTS</Link></SubNavItem>
          <SubNavItem><Link to="/projects">PRO</Link></SubNavItem>
        </SubNav>
        <Link to="/about">ABOUT</Link>
      </nav>
    )
  }
}
export default MenuView;
