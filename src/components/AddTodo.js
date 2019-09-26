import React, { Component } from "react";
import Axios from "axios";
// import superagent from 'superagent';

export class AddTodo extends Component {
  state = {};

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  onSubmit = e => {
    e.preventDefault();
    // this.props.addTodo(this.state);
    e.target.reset();
    // console.log(this.state);
    // this.setState({
    //   title: "",
    //   name: ""
    // });

    // let postTodoData = JSON.stringify(this.state);
    // console.log(postTodoData);

    Axios.post(
      "http://localhost:5000/api/v1/todos",
      JSON.stringify({
        todo: this.state.title,
        name: this.state.name,
        startDates: this.state.startDates,
        difficulty: this.state.difficulty
      }),
      {
        headers: {
          "Access-Control-Allow-Origin": "*",
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        proxy: {
          host: "localhost",
          port: 5000
        },
        mode: "no-cors"
      }
    ).then(
      response => {
        console.log(response);
      },
      error => {
        console.log(error);
      }
    );

    // fetch("http://localhost:5000/api/v1/todos", {
    //   method: "POST",
    //   mode: "no-cors",
    //   headers: {
    //     Accept: "application/json",
    //     "Content-Type": "application/json"
    //   },
    //   body: postTodoData
    // })
    //   .then(res => {
    //     console.log("this is res", res);
    //   })
    //   .catch(err => {
    //     console.log(err);
    //   });

    // superagent
    //   .post("http://localhost:5000/api/v1/todos")
    //   .set("Content-Type", "application/json")
    //   .send(postTodoData)
    //   .then(console.log("sent"))
    //   .catch(console.error);
  };
  render() {
    return (
      <form onSubmit={this.onSubmit} style={{ display: "flex" }}>
        <input
          type="text"
          name="title"
          placeholder="Add Todo..."
          style={{ flex: "10", padding: "5px" }}
          onChange={this.onChange}
        />
        <input
          type="text"
          name="name"
          placeholder="Name..."
          style={{ flex: "10", padding: "5px" }}
          onChange={this.onChange}
        />
        <input
          type="date"
          name="startDates"
          placeholder="Enter in a date......"
          style={{ flex: "10", padding: "5px" }}
          onChange={this.onChange}
        />
        <input
          type="range"
          name="difficulty"
          placeholder="Enter in a difficulty"
          min="1"
          max="5"
          style={{ flex: "10", padding: "5px" }}
          onChange={this.onChange}
        />
        <input
          type="submit"
          value="Submit"
          className="btn"
          style={{ flex: "1" }}
        />
      </form>
    );
  }
}

export default AddTodo;
