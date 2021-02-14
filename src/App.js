
import './App.css';

import React, { Component } from 'react'
import Human from './Human/Human'
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
    console.log(this.props)
    console.log(this.state)
  }

  componentDidMount() {

  }

  componentDidUpdate(prevProps, prevState, snapshot) { if (prevState.name !== this.state.name) { this.handler() } }

  componentWillUnmount() {

  }

  // Prototype methods, Bind in Constructor (ES2015)
  handleEvent() { }

  // Class Properties (Stage 3 Proposal)
  iqChnageHandler = (newName) => {

    this.setState(
      {
        humans: [
          { name: newName, age: 50 },
          { name: "B", age: 50 },
          { name: "C", age: 50 }
        ]
      }
    )
  }

  render() {
    return (
      <>
        <Human
          name={this.state.humans[0].name}
          age={this.state.humans[0].age}
          click={this.iqChnageHandler.bind(this, "CAB")}>

        </Human>
        <Human name={this.state.humans[1].name} age={this.state.humans[1].age}></Human>
        <Human name={this.state.humans[2].name} age={this.state.humans[2].age}></Human>
        <button onClick={this.iqChnageHandler.bind(this, "ABC")}>Change Content</button>
      </>
    )
  }
}


// import React, { useState } from 'react'
// import Human from './Human/Human'

// const App = (props) => {
//   const [initialHumanState, setHumanState] = useState({
//     humans: [
//       { name: "A", age: 50 },
//       { name: "B", age: 50 },
//       { name: "C", age: 50 }
//     ]
//   });

//   const [otherStateData, setOtheStateData] = useState("No Changes Needed");

//   console.log(initialHumanState, otherStateData, setOtheStateData);
//   const changeIQHandler = () => {
//     setHumanState({
//       humans: [
//         { name: "A", age: 50 },
//         { name: "B", age: 50 },
//         { name: "C", age: 50 }
//       ]
//     });
//   }
//   return (
//     <div className="App">
//       <Human name={initialHumanState.humans[0].name} age={initialHumanState.humans[0].age} exp={initialHumanState.otherState}></Human>
//       <Human name={initialHumanState.humans[1].name} age={initialHumanState.humans[1].age}></Human>
//       <Human name={initialHumanState.humans[2].name} age={initialHumanState.humans[2].age}></Human>
//       <button onClick={changeIQHandler}>Chnage IQ</button>
//     </div>
//   )
// }
// export default App;