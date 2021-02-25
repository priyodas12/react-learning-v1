import React, { Component } from 'react'

export class CounterOneUeCls extends Component {

  constructor(props) {
    super(props)

    this.state = {
      count: 0
    }
  }

  componentDidMount() {
    console.log('componentDidMount');
    document.title = `clicked ${this.state.count} times`;
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('componentDidUpdate');
    if (prevState.count !== this.state.count) {
      document.title = `clicked ${this.state.count} times`;
    }
  }
  componentWillUnmount() {
    console.log('componentWillUnmount');
    document.title = `clicked ${this.state.count} times`;
  }

  render() {
    return (
      <div>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>Click</button>
        <br />
        <p>Clicked {this.state.count} Times</p>
      </div>
    )
  }
}

export default CounterOneUeCls
