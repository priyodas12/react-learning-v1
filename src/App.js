import React, { Component } from 'react'
import UserForm from './Form/UserForm'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <UserForm></UserForm>
      </div>
    )
  }
}

export default App;

// import Human from './Human/Human'
// export default class App extends Component {


//   constructor(props) {
//     super(props)

//     this.state = {
//       humans: [
//         { name: "A", age: 24 },
//         { name: "B", age: 44 },
//         { name: "C", age: 84 }
//       ],
//       showHuman: true
//     }

//     this.handleEvent = this.handleEvent.bind(this)
//     console.log(this.props)
//     console.log(this.state)
//   }

//   componentDidMount() {

//   }

//   componentDidUpdate(prevProps, prevState, snapshot) { if (prevState.name !== this.state.name) { this.handler() } }

//   componentWillUnmount() {

//   }

//   // Prototype methods, Bind in Constructor (ES2015)
//   handleEvent() { }

//   // Class Properties (Stage 3 Proposal)
//   iqChangeHandler = () => {

//     this.setState(
//       {
//         humans: [
//           { name: "A", age: 50 },
//           { name: "B", age: 50 },
//           { name: "C", age: 50 }
//         ]
//       }
//     )
//   }

//   nameChangeHandler = (event) => {

//     this.setState(
//       {
//         humans: [
//           { name: event.target.value, age: 50 },
//           { name: "B", age: 50 },
//           { name: "C", age: 50 }
//         ]
//       }
//     )
//   }
//   showContentHandler = (e) => {
//     console.log(e.target);
//     const nowShow = this.state.showHuman;
//     this.setState({ showHuman: !nowShow });
//   }




//   render() {


//     const btnStyle1 = {
//       backgroundColor: "Green",
//       border: "2px solid",
//       textAlign: "center",
//       color: "white",
//       margin: "20px 100px auto",
//       padding: "10px",
//       cursor: "pointer",
//       textDecoration: "line"
//     }
//     const btnStyle2 = {
//       backgroundColor: "Pink",
//       border: "2px solid",
//       textAlign: "center",
//       color: "white",
//       margin: "20px 100px auto",
//       padding: "10px",
//       cursor: "pointer",
//       textDecoration: "line"
//     }
//     let humanInfo = null;

//     if (this.state.showHuman) {
//       humanInfo = (
//         <div>
//           {this.state.humans.map(h => {
//             return <Human
//               key={h.name}
//               name={h.name}
//               age={h.age}
//               changed={this.nameChangeHandler}
//             />
//           })}
//         </div>);

//       btnStyle1.backgroundColor = "red";
//       btnStyle2.backgroundColor = "green";
//     }
//     return (
//       <div className="App">
//         <h2>IQ Dashboard</h2>
//         <button
//           onClick={this.showContentHandler}
//           style={btnStyle1}>
//           Show Content
//         </button>
//         <button
//           onClick={this.iqChangeHandler}
//           style={btnStyle2}>
//           Change IQ
//         </button>
//         {humanInfo}
//       </div>
//     )
//   }
// }


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