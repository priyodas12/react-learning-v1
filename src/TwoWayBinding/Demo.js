import React, { Component } from 'react'

class Demo extends Component {
  constructor(props) {
    super(props)

    this.state = {
      name: "priyo"
    }
  }
  changeNameHandler = () => {
    this.setState({
      name: "priya"
    });
  }
  backToOldNameHandler = () => {
    this.setState({
      name: "priyo"
    });
  }
  nameChangeFromInput = (e) => {
    this.setState(
      {
        name: e.target.value
      }
    )
  }
  render() {
    return (
      <div>
        <button onClick={this.backToOldNameHandler.bind(this)}>back to old name</button>
        <br />
        <button onClick={this.changeNameHandler}>change name</button>
        <br />
        <button onClick={() => this.changeNameHandler()}>change name by anonymous function</button>
        <br />
        <button onClick={this.changeNameHandler.bind(this)}>change name by bind function</button>
        <br />
        <input type="text" onChange={this.nameChangeFromInput} value={this.state.name} />
        <div>{this.state.name}</div>
      </div >
    )
  }
}

export default Demo
