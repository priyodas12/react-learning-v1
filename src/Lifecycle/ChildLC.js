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

  componentDidMount() {
    console.log("Child-componentDidMount");
  }

  render() {
    console.log("Child-render");
    return (
      < div >
        child component
      </div >
    )
  }
}

export default ChildLC;
