import React, { Component } from 'react'
import UpdatedComponent from './WithCounter'

class ClickCounter extends Component {
  // constructor(props) {
  //   super(props)

  //   this.state = {
  //     count: 0
  //   }
  // }

  // clickHandler = () => {
  //   this.setState(function (preState) {
  //     return { count: preState.count + 1 }
  //   });
  // }


  render() {
    const { count, incrementHandler } = this.props;
    return (
      <div>
        <button onClick={incrementHandler}>{this.props.name} clicked {count} times</button>
      </div>
    )
  }
}

export default UpdatedComponent(ClickCounter)
