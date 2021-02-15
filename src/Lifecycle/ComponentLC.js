import React, { Component } from 'react'
import ChildLC from './ChildLC'

export class ComponentLC extends Component {
  constructor(props) {
    super(props)

    this.state = {
      name: "priyo"
    }
    console.log("Parent-constructor");
  }

  static getDerivedStateFromProps(nextProps, prevState) { // Rarely Used
    console.log("Parent-getDerivedStateFromProps");
    return null;
  }
  shouldComponentUpdate(nextProps, nextState, nextContext) { // Rarely Used
    console.log("Parent-shouldComponentUpdate");
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) { // Rarely Used
    console.log("Parent-getSnapshotBeforeUpdate");
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("Parent-componentDidUpdate");
  }

  componentDidMount() {
    console.log("Parent-componentDidMount");
  }

  render() {
    console.log("Parent-render");
    return (
      < div >
        parent component
        <ChildLC></ChildLC>
      </div >
    )
  }


}

export default ComponentLC;
