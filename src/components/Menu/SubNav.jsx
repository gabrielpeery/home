import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {Router, Link} from 'react-router-dom';
import './SubNav.css';

class SubNav extends Component {
  constructor(props: any) {
    super(props)
    this.enter= this.enter.bind(this);
    this.exit = this.exit.bind(this);
    this.path = window.location.pathname.split('/');
  }

  exit() {
    document.querySelector('.sub-nav-options').style.display = "none";
  }

  enter() {
    document.querySelector('.sub-nav-options').style.display = "block";
  }

  render() {
    const selected = this.props.path.find((p) => p === this.props.is) ? 'selected' : 'can-hover ';
    return (
      <div onMouseEnter={this.enter} onMouseLeave={this.exit} className="sub-nav-container">
        <Link to={this.props.to}> {this.props.is.toUpperCase()} </Link>
        <div className={`${selected}sub-nav-options`}>
          {this.props.children}
        </div>
      </div>
    )
  }
}

class SubNavItem extends Component {
  render() {
    return (
      <div className="sub-nav-child">
        {this.props.children}
      </div>
    )
  }
}

module.exports = {
  SubNav: SubNav,
  SubNavItem: SubNavItem
}
