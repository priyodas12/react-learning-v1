
import './App.css';
import Human from './Human/Human'

import React, { Component } from 'react'

export default class App extends Component {


  constructor(props) {
    super(props)

    this.state = {
      humans: [
        { name: "A", age: 24 },
        { name: "B", age: 44 },
        { name: "C", age: 84 }
      ]
    }

    this.handleEvent = this.handleEvent.bind(this)
  }

  componentDidMount() {

  }

  componentDidUpdate(prevProps, prevState, snapshot) { if (prevState.name !== this.state.name) { this.handler() } }

  componentWillUnmount() {

  }

  // Prototype methods, Bind in Constructor (ES2015)
  handleEvent() { }

  // Class Properties (Stage 3 Proposal)
  handler = () => {
    this.setState(
      {
        humans: [
          { name: "A", age: 24 },
          { name: "B", age: 44 },
          { name: "C", age: 84 }
        ]
      }
    )
  }

  render() {
    return (
      <>
        <Human name={this.state.humans[0].name} age={this.state.humans[0].age}></Human>
        <Human name={this.state.humans[1].name} age={this.state.humans[1].age}></Human>
        <Human name={this.state.humans[2].name} age={this.state.humans[2].age}></Human>
        <button onClick={this.handler}>Change Content</button>
      </>
    )
  }
}

