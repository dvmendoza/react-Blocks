import React, { Component } from 'react'

export default class Main extends Component {
  render() {
    return (
      <div className="main col fill pad flex-3">
        Main
        {this.props.children}
        </div>
    )
  }
}
