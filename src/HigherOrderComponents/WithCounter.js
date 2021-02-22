import React from 'react';

const UpdatedComponent = (OriginalComponent) => {
  class NewComponent extends React.Component {

    constructor(props) {
      super(props)

      this.state = {
        count: 0
      }
    }

    incrementHandler = () => {
      this.setState(function (preState) {
        return { count: preState.count + 1 }
      });
    }

    render() {
      return <OriginalComponent count={this.state.count} incrementHandler={this.incrementHandler}></OriginalComponent>
    }
  }
  return NewComponent;
}

export default UpdatedComponent;