import React, { Component } from 'react'
import UpdatedComponent from './WithCounter'

class HoverOverCounter extends Component {
  // constructor(props) {
  //   super(props)

  //   this.state = {
  //     count: 0
  //   }
  // }

  // mouseOverHandler = () => {
  //   this.setState(function (prevState) {
  //     return { count: prevState.count + 1 }
  //   });
  // }

  render() {
    const { count, incrementHandler } = this.props;
    return (
      <div>
        <h3 onMouseOver={incrementHandler}>{this.props.name} Hover Over {count} times</h3>
      </div>
    )
  }
}

export default UpdatedComponent(HoverOverCounter)
