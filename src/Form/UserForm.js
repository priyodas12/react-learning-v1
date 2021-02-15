import React, { Component } from 'react'

class UserForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      username: "",
      topic: "Vue",
      textarea: ""
    }
  }

  userNameChangehandler = (event) => {
    this.setState(
      {
        username: event.target.value,
      }
    );
    console.log(event.target.value)
  }

  topicChangeHandler = (event) => {
    this.setState(
      {
        topic: event.target.value,
      }
    );
    console.log(event.target.value)
  }

  commectChangeHandler = (event) => {
    this.setState(
      {
        textarea: event.target.value,
      }
    );
    console.log(event.target.value)
  }

  submitAllDataHandler = (event) => {
    alert(`submiting ${this.state.username},${this.state.topic},${this.state.textarea}`);
    // event.preventDefault();
  }

  render() {
    return (
      <div className="FormComponent">
        <h1>From16</h1>
        <form>
          <div>
            <label>Username::</label>
            <input
              type="text"
              value={this.state.username}
              onChange={this.userNameChangehandler}></input>
          </div>
          <br /><br />
          <div>
            <label>Topic::</label>
            <select
              value={this.state.topic}
              onChange={this.topicChangeHandler}>
              <option>React</option>
              <option>Angular</option>
              <option>Vue</option>
            </select>
          </div>
          <br /><br />
          <div>
            <label>Comments::</label>
            <textarea
              value={this.state.textarea}
              onChange={this.commectChangeHandler}>write something for us....
            </textarea>
          </div>
          <button type="submit" onClick={this.submitAllDataHandler}>Submit</button>
        </form>
      </div>
    )
  }
}

export default UserForm;
