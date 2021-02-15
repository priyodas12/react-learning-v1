import React, { Component } from 'react'

class ChildLC extends Component {
  constructor(props) {
    super(props)

    this.state = {
      name: "das"
    }
    console.log("Child-constructor");
  }

  static getDerivedStateFromProps(nextProps, prevState) { // Rarely Used
    console.log("Child-getDerivedStateFromProps");
    return null;
  }

  shouldComponentUpdate(nextProps, nextState, nextContext) { // Rarely Used
    console.log("Child-shouldComponentUpdate");
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) { // Rarely Used
    console.log("Child-getSnapshotBeforeUpdate");
    return null;
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("Child-componentDidUpdate");
  }

  componentDidMount() {
    console.log("Child-componentDidMount");
  }

  componentWillUnmount() {
    console.log("Child-componentWillUnmount");
  }
  buttonhandler = (e) => {
    console.log(e.target);
    this.setState(
      { name: "priya" }
    )
  }

  render() {
    console.log("Child-render");
    return (
      < div >
        child component
        <button onClick={this.buttonhandler}>Child Button</button>
      </div >
    )
  }
}

export default ChildLC;
