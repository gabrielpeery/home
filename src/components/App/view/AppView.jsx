import React, { Component } from 'react'

class AppView extends Component {
  constructor(props: any) {
    super(props)

  }

  render() {
    return (
      <div id="container">
        {this.props.children}
      </div>
    )
  }
}
export default AppView;
