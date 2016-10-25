import React, { Component } from 'react';

export default class Root extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>Welcome to React Boilerplate</h1>
        {this.props.children}
      </div>
    );
  }
}
